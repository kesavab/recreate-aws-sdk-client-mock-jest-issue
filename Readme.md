With aws-sdk-client-mock version of 0.6.2 when we run tests with `npm test`, tests run successfully
But when we change version to 1.0.0, the testing fails with below error

> aws-sdk-client-mock-issue-reproduce@1.0.0 test /home/bandl2k/migration/nodejsplayground/aws-sdk-client-mock-issue-reproduce
> NODE_OPTIONS=--experimental-vm-modules jest

(node:16964) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 FAIL  ./index.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /home/bandl2k/migration/nodejsplayground/aws-sdk-client-mock-issue-reproduce/node_modules/aws-sdk-client-mock/dist/es/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){export * from './mockClient';
                                                                                      ^^^^^^

    SyntaxError: Unexpected token 'export'

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1796:14)
          at async Promise.all (index 0)


ReferenceError: You are trying to `import` a file after the Jest environment has been torn down. From index.test.js.

          at async Promise.all (index 1)
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.942 s, estimated 2 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
