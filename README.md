# CyCtNoExitBug

1. install deps, `npm ci`
1. run component tests, `npx nx component-test demo`

   - Cypress doesn't exit

1. run e2e test, `npx nx e2e demo-e2e`

   - Tests exit.

Looks to be isolated to component testing.
