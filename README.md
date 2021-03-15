# v-fit2box directive for Vue2
Resize the font-size in rem units so that the text fits into the html element.

In other words the font size is smaller for long texts, and bigger for shorter text passages.
For example,

![](https://user-images.githubusercontent.com/8018044/92608452-acc7d080-f2b5-11ea-9951-cc89cd92d10f.png)

## Important Note
The branch `main-vue2` and all npm versions `@0.*.*` refer to fit2box as Vue2 directive.
Please visit to the `main` branch of this repository, or resp. use versions `@1.*.*` of this npm package for Vue3.

## Getting Started
1) Install into your project

```bash
yarn add vue-fit2box@0.2.2
```

2) Add directive globally to your `src/main.js`

```js
import Vue from 'vue';
import Fit2Box from 'vue-fit2box';
...
Vue.directive('fit2box', Fit2Box);
...
```

3) Apply directive in the Vue component

```html
<template>
  <div>
    <div v-fit2box="mytext" class="mybox"></div>
    <button @click="nextExample">Next</button>
  </div>
</template>
```

```javascript
<script>
export default {
  name: "DemoFit2Box",
  data() {  
    return {
      myexamples: [
        "Lorem ipsum dolor sit amet",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in  reprehenderit in voluptate velit esse."
      ],
      index: 0
    }
  },
  computed: {
    mytext(){
      return this.myexamples[this.index];
    }
  },
  methods: {
    nextExample(){
      this.index = (this.index + 1) % this.myexamples.length;
    }
  },
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
