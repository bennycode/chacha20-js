# chacha20-js
A JavaScript implementation of the ChaCha20 stream cipher.

References:

- https://github.com/quartzjer/chacha20
- https://gist.github.com/devi/da696f47865605e5f6ed

## Grunt tasks

- **init**
- **check**
 - check_demo (*Check code style for demo code*)
    - `grunt check_demo_coffee`
    - `grunt check_demo_js`
    - `grunt check_demo_ts`
 - check_main (*Check code style for source code*)
    - `grunt check_main_coffee`
    - `grunt check_main_js`
    - `grunt check_main_ts`
 - check_style (*Check code style for stylesheets*)
 - check_test (*Check code style for test code*)
    - `grunt check_test_coffee`
    - `grunt check_test_js`
    - `grunt check_test_ts`
- **build**
 - build_demo (*Transpile demo code*)
    - `grunt build_demo_coffee`
    - `grunt build_demo_js`
    - `grunt build_demo_ts`
 - build_main (*Transpile source code*)
    - `grunt build_main_coffee`
    - `grunt build_main_js`
    - `grunt build_main_ts`
 - build_test (*Transpile test code*)
    - `grunt build_test_coffee`
    - `grunt build_test_js`
    - `grunt build_test_ts`
- **test**
 - test_spec (*Run a specification test with PhantomJS*)
    - `grunt test_spec_coffee:Proteus/util/KeyDerivationUtilSpec` 
    - `grunt test_spec_js:de/bennyn/crypto/ChaCha20/ContextSpec` 
    - `grunt test_spec_ts:Validation/HelloWorldSpec`
 - test_specs (*Run all specification tests with PhantomJS*)
    - `grunt test_specs_coffee`
    - `grunt test_specs_js`
    - `grunt test_specs_ts`
 - test_spec-browser (*Run a specification test with a browser*)
 - test_spec-browsers (*Run all specification tests with a browser*)
    - `grunt test_specs-browser_coffee:Chrome`
    - `grunt test_specs-browser_js:PhantomJS`
    - `grunt test_specs-browser_ts:IE`
 - test_end2end (*Run End-to-End tests on a development server*)
- **coverage**
- **develop**
- **docs**
- **deploy**

