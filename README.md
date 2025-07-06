# Channable Pricing page testing

## Scope
The scope of this project is to design and write an automated test suite that covers the basic user flows

## Tests incorporated
* Verify testsuite is running in right page
* Check default currency type
* Change items count to 15K
* Change plan to Core standard
* Add additional CSS Standard

## Technical Details
* The test suite is deigned using `Playwright` and `Typescript`
```
    "@playwright/test": "^1.53.2",
    "@types/node": "^24.0.10"
```

## How to run?
```
> npm install
> npx playwright test
```
## Projuect Structure

- Entry Point: tests/index.spec.ts
- Result: test-resuts.*.json
- Report: playright-report/index.html
