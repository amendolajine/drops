# drops.

A quiet browser experience inspired by childhood car rides: look around from the back seat and watch rain on the window.

Work in progress. Try the current journey at https://amendolajine.github.io/drops/playtest-study/

Study 08 includes continuous rain, seated looking, a reading light, two skies and local save/resume.
The car is provisional. People, sound and the story from home to arrival are still being built.
The earlier race simulation remains in the repository; it is separate from the current journey study.

The playtest offers Italian and English. After playing, download your answers and send the file to Antonio.
This GitHub Pages version does not send feedback automatically. Received files can be combined locally
at https://amendolajine.github.io/drops/feedback-study/owner.html

Public page sources are in `web/`. `npm run build:playtest` builds them into `site/` and records a
source/output manifest. `npm run check` includes this build and its integrity and download-budget checks.
GitHub Pages publishes only a successful checked revision from `main`.
