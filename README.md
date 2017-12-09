```
austin@oswald:~/projects/eslint-vue-spread-breaks$ ./node_modules/.bin/eslint test.jsx 
Cannot read property 'name' of undefined
TypeError: Cannot read property 'name' of undefined
    at prop.value.properties.find.p (/home/austin/projects/eslint-vue-spread-breaks/node_modules/eslint-plugin-vue/lib/rules/require-default-prop.js:52:25)
    at Array.find (native)
    at propHasDefault (/home/austin/projects/eslint-vue-spread-breaks/node_modules/eslint-plugin-vue/lib/rules/require-default-prop.js:52:10)
    at propsNode.value.properties.filter.filter.prop (/home/austin/projects/eslint-vue-spread-breaks/node_modules/eslint-plugin-vue/lib/rules/require-default-prop.js:70:44)
    at Array.filter (<anonymous>)
    at findPropsWithoutDefaultValue (/home/austin/projects/eslint-vue-spread-breaks/node_modules/eslint-plugin-vue/lib/rules/require-default-prop.js:65:10)
    at utils.executeOnVue (/home/austin/projects/eslint-vue-spread-breaks/node_modules/eslint-plugin-vue/lib/rules/require-default-prop.js:89:35)
    at ExportDefaultDeclaration:exit (/home/austin/projects/eslint-vue-spread-breaks/node_modules/eslint-plugin-vue/lib/utils/index.js:467:9)
    at listeners.(anonymous function).forEach.listener (/home/austin/projects/eslint-vue-spread-breaks/node_modules/eslint/lib/util/safe-emitter.js:47:58)
    at Array.forEach (<anonymous>)
```
