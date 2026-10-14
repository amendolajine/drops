import { describe, expect, it } from 'vitest';
import { findPrivate } from '../../scripts/private-rules.ts';

describe('private check (map 9.5 point 3)', () => {
  it('flags local paths, personal emails and private names, by number only', () => {
    const home = ['', 'Users', 'someone', 'x'].join('/');
    expect(findPrivate(`see ${home}`, []).map((p) => p.what)).toEqual(['local path']);
    const mail = ['someone.name', 'mailbox.test'].join('@'); // built from pieces: the check scans this file too
    expect(findPrivate(`mail me: ${mail}`, []).map((p) => p.what)).toEqual([`email address ${mail}`]);
    const hits = findPrivate('line one\nwe work at ACME corp', ['other', 'acme']);
    expect(hits).toEqual([{ line: 2, what: 'private name #2' }]);
    expect(JSON.stringify(hits)).not.toContain('acme');
  });
  it('allows the GitHub noreply identity', () => {
    expect(findPrivate('4541177+amendolajine@users.noreply.github.com', [])).toEqual([]);
  });
});
