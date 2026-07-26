JOY Diary v0.13 — GitHub Pages root-path fix

IMPORTANT:
This ZIP intentionally has NO enclosing "JOY-Diary-main" folder.
Copy/extract the CONTENTS directly into the root of your local JOY-Diary repository,
where index.html, css, js, manifest.webmanifest, and sw.js already exist.

What this fixes:
- New v0.12 files had been placed inside JOY-Diary-main/JOY-Diary-main/.
- GitHub Pages continued serving the old root index.html.
- v0.13 updates the actual repository root.
- Service-worker cache version bumped to v13.
- UI image URLs include v=13 cache-busting parameters.

After copying:
1. GitHub Desktop should show index.html, sw.js, and assets/ui files at the ROOT path.
2. Summary: JOY Diary v0.13 root fix
3. Commit to main
4. Push origin
5. Open GitHub Pages and refresh once. If installed as an app, fully close and reopen it.

Optional cleanup after confirming the app works:
Delete the mistakenly nested folder JOY-Diary-main/ from the repository root.
Do not delete the repository itself—only the extra inner folder shown on GitHub.
