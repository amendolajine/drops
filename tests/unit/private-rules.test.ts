import { execFileSync, spawnSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { findPrivate, isPrivatePath } from '../../scripts/private-rules.ts';

describe('private check (map 9.5 point 3)', () => {
  it('flags local paths, personal emails and private names, by number only', () => {
    const home = ['', 'Users', 'someone', 'x'].join('/');
    expect(findPrivate(`see ${home}`, []).map((p) => p.what)).toEqual(['local path']);
    const mail = ['someone.name', 'mailbox.test'].join('@'); // built from pieces: the check scans this file too
    const emailHits = findPrivate(`mail me: ${mail}`, []);
    expect(emailHits).toEqual([{ line: 1, what: 'email address [redacted]' }]);
    expect(JSON.stringify(emailHits)).not.toContain(mail);
    const hits = findPrivate('line one\nwe work at ACME corp', ['other', 'acme']);
    expect(hits).toEqual([{ line: 2, what: 'private name #2' }]);
    expect(JSON.stringify(hits)).not.toContain('acme');
  });
  it('allows the GitHub noreply identity', () => {
    expect(findPrivate('4541177+amendolajine@users.noreply.github.com', [])).toEqual([]);
  });
  it('rejects private paths and keeps public configuration and assets allowed', () => {
    for (const path of [
      'private/snapshot.bin',
      'nested/private/note.txt',
      '.env',
      'site/.env.preview',
      '.private-terms',
      '.private-names',
      '.local-settings/state.json',
      'nested/.settings/session.bin',
    ])
      expect(isPrivatePath(path)).toBe(true);
    for (const path of [
      '.github/workflows/ci.yml',
      '.githooks/pre-commit',
      '.gitignore',
      '.gitattributes',
      '.npmrc',
      '.nvmrc',
      '.size-limit.json',
      'site/.nojekyll',
      'site/assets/preview.png',
    ])
      expect(isPrivatePath(path)).toBe(false);
  });
  it('blocks forcibly added private files, including binaries, without printing personal emails', () => {
    const root = mkdtempSync(join(tmpdir(), 'drops-private-check-'));
    const mail = ['synthetic.person', 'mailbox.test'].join('@');
    try {
      mkdirSync(join(root, 'scripts'), { recursive: true });
      mkdirSync(join(root, 'src/debug'), { recursive: true });
      mkdirSync(join(root, 'private'), { recursive: true });
      mkdirSync(join(root, '.local-settings'), { recursive: true });
      for (const file of ['scripts/check-private.ts', 'scripts/private-rules.ts', 'src/debug/log.ts'])
        copyFileSync(new URL(`../../${file}`, import.meta.url), join(root, file));
      writeFileSync(join(root, 'package.json'), '{"type":"module"}\n');
      writeFileSync(
        join(root, '.gitignore'),
        'private/\n.env*\n.private-terms\n.private-names\n.local-settings/\n',
      );
      writeFileSync(join(root, 'private/capture.bin'), Buffer.from([0, 1, 2]));
      writeFileSync(join(root, '.env.preview'), 'PUBLIC_SAMPLE=example\n');
      writeFileSync(join(root, '.private-terms'), 'synthetic-private-name\n');
      writeFileSync(join(root, '.private-names'), 'sample\n');
      writeFileSync(join(root, '.local-settings/session.json'), '{}\n');
      writeFileSync(join(root, 'public.txt'), `Contact: ${mail}\n`);
      execFileSync('git', ['init', '--quiet'], { cwd: root });
      execFileSync('git', ['add', '--force', '--all'], { cwd: root });
      for (const args of [[], ['--staged']]) {
        const result = spawnSync(process.execPath, ['scripts/check-private.ts', ...args], {
          cwd: root,
          encoding: 'utf8',
          env: { ...process.env, DROPS_PRIVATE_TERMS: '' },
        });
        const output = result.stdout + result.stderr;
        expect(result.status).toBe(1);
        for (const file of [
          'private/capture.bin',
          '.env.preview',
          '.private-terms',
          '.private-names',
          '.local-settings/session.json',
        ])
          expect(output).toContain(`${file}: private file path`);
        expect(output).toContain('public.txt:1: email address [redacted]');
        expect(output).not.toContain(mail);
      }
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
