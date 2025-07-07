# Assignment 1
Assignment one consists of the documents related to the Items overview page and Single Item page
1. Test plan
2. Test cases
3. Bug Report

*Note: Files with respect to the above list can be found in `assignment-1` directory*
- Test plan: QA_Assignment1_Channable.docx
- Testcases and bug report

|Type | Page |Sheet name  |
|--|--|--|
| Test Cases | Overview Page | Test Cases - Items Overview Page |
| Test Cases | Single Item Page | Test Cases - Single Item Page |
| Bug Report | Overview Page | Bug Report Items Overview Page |
| Documents | - | Bug Report Document |
| Documents | - | Test Case Document |

# Assignment 2 
## Channable Pricing page testing

### Scope
The scope of this project is to design and write an automated test suite that covers the basic user flows of Channable Pricing

### Tests incorporated
* Verify testsuite is running in right page
* Check default currency type
* Change items count to 15K
* Change plan to Core standard
* Add additional CSS Standard

### Technical Details
* The test suite is deigned using `Playwright` and `Typescript`
```
    "@playwright/test": "^1.53.2",
    "@types/node": "^24.0.10"
```

### How to run?
```
> npm install
> npx playwright test
```
### Projuect Structure

- Entry Point: tests/index.spec.ts
- Result: test-resuts.*.json
- Report: playright-report/index.html
