# Use Guide

## Verdaccio

- clean up

  ```shell
  rm -rf ~/.local/share/verdaccio
  ```

- publish

  ```shell
  lerna exec 'yarn publish'
  ```

- add internal deps

  ```shell
  lerna add @shlack/utils --scope '@shlack/{ui,data}'
  ```

- scoped

  ```shell
  lerna run dev --scope @shlack/ui --stream
  ```
