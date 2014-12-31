<!--
order: 7
title: Updating npm Enterprise
-->

## Updating npm Enterprise

npm Enterprise can self-update. To ensure that all dependencies are updated, remove the @npm directory before running the update.

```bash
rm -rf /etc/npme/node_modules/@npm
npme update
```
