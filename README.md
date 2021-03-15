[![npm version](https://badge.fury.io/js/vue-fit2box.svg)](https://badge.fury.io/js/vue-fit2box)
[![DOI](https://zenodo.org/badge/294111327.svg)](https://zenodo.org/badge/latestdoi/294111327)

# v-fit2box directive for Vue3
Resize the font-size in rem units so that the text fits into the html element.

In other words the font size is smaller for long texts, and bigger for shorter text passages.
For example,

![](https://user-images.githubusercontent.com/8018044/92608452-acc7d080-f2b5-11ea-9951-cc89cd92d10f.png)

## Important Note
The branch `main` and all npm versions `@1.*.*` refer to fit2box as Vue3 directive.
For legacy code the old Vue2 directive is available in the branch `main-vue2` where the npm versions `@0.*.*` of the Vue2 v-fit2box directive are maintained.

## Getting Started
1) Install into your project

```bash
yarn add vue-fit2box@1.0.0
```

2) Add directive globally to your `src/main.js`

```js
  
/** Load packages */
import { createApp, h } from 'vue';
import App from './App.vue';

/** Add everything together */
const app = createApp({
  render: () => h(App)
});

/** v-fit2box */
import Fit2Box from 'vue-fit2box';
app.directive('fit2box', Fit2Box);

/** Mount the app */
app.mount('#app');
```

3) Apply directive in the Vue component

```html
<template>
  <div>
    <div v-fit2box="mytext" class="mybox" :key="index"> {{ mytext }} </div>
    <button @click="nextExample">Next</button>
  </div>
</template>
```

```javascript
<script>
import { ref, reactive, watch } from "vue";
export default {
  name: "DemoFit2Box",
  setup(){
    const index = ref(0);
    const mytext = ref("");
    const data = reactive({
      examples: [
        "Lorem ipsum dolor sit amet",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in  reprehenderit in voluptate velit esse."
      ]
    });
    watch(
      () => index.value,
      (x) => {
        mytext.value = data.examples[x]
      }
    );
    const nextExample = () => {
      index.value = (index.value + 1) % data.examples.length;
    }
    nextExample();
    return { nextExample, mytext, index }
  }
}
</script>
```

```css
.mybox {
  height: 100px;
  width: 50%;
  border: solid 1px black;
}
```


# Appendix

## Misc commands
- Login into yarn: `yarn login`
- Publish the package: `yarn publish` 

### Support
Please [open an issue](https://github.com/satzbeleg/vue-fit2box/issues/new) for support.


### Contributing
Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/satzbeleg/vue-fit2box/compare/).


### Acknowledgements
This work was funded by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) - [433249742](https://gepris.dfg.de/gepris/projekt/433249742). Project duration: 2020-2023.
