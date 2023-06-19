# Getting started

## Prerequisites

- Ensure `Node 17` installed

## How to run

- Run `npm install`

- Create `input-data.json` contains input keywords into search bar in `testdata` folder with below structure:

#### test/testdata/input-data.json
```json
{
"shortkeywords" : "Wikipedia",
"longkeywords" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, purus bibendum dictum imperdiet, dui neque porttitor mi, sit amet congue eros ante vel magna. Nam quis hendrerit lacus. Vivamus eu ullamcorper erat. Quisque facilisis at magna at fringilla. Curabitur ultricies urna eros, in molestie urna elementum in. Suspendisse vitae iaculis justo, quis cursus nunc. Quisque vel enim in lectus facilisis rutrum. Fusce congue at tellus ut ultricies. Aenean vitae imperdiet lacus, in condimentum mi. Ut commodo dui lectus, vitae interdum ex consequat eu. Aliquam sit amet leo malesuada, blandit leo sit amet, tristique felis. Proin tempus gravida lectus, sed vehicula mauris rutrum at. Aliquam at blandit ex. Phasellus eget vulputate sapien. Nam et diam ante. Mauris iaculis nibh varius arcu maximus, nec cursus ex suscipit. Sed tortor lectus, suscipit cursus finibus interdum, sollicitudin ut augue. Donec justo nisl, mollis id nulla accumsan, consequat mollis diam. Morbi dapibus quam vel fringilla cursus. Fusce varius, dolor id tempor pharetra, sapien sem sagittis leo, condimentum egestas arcu neque vulputate elit. Phasellus sed pulvinar metus. Nunc ultrices volutpat felis id pretium. Quisque id purus urna. Nulla facilisi. Sed in dui eu dui tempor luctus in nec metus."
}
```
- Create `constants.js` contains Base URL with belowed structure:
#### test/constants.js
```js
export const BASE_URL = "***"
```
- Run `npm run` with name of script (config in `package.json`). Example: `npm run search`

## How to add new Test Suite
- Create new test file in `test/specs` (Ex: `test/specs/search-specific-text.js`)
- Add the test file path into the `suites` in the `wdio.conf.js` file (Ex: `search`)

#### wdio.conf.js
```js
{
    suites: {
        ...
        apply: ['./test/specs/search-specific-text.js']
    }
}
```
- Add the new `scripts` into the `package.json` (Ex: `search`)

#### package.json
```json
"scripts": {
    "search": "npx wdio wdio.conf.js --suite search"
},
```

- Run `npm run` with that script that created in `package.json` (Ex: `npm run search`)

## How to debug

- Put debug point in some lines of script 

- Select `Run in debug` in `Run` tab of VSCode 

## Documentation

- [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted.html)
