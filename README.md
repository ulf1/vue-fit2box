# v-fit2box
Resize the font-size in rem units so that the text fits into the html element.


## Getting Started
1. Install into your project

```bash
yarn add vue-fit2box
```

2. Add directive globally to your `src/main.js`

```js
import Vue from 'vue';
import Fit2Box from 'vue-fit2box';
...
Vue.directive('fit2box', Fit2Box);
...
```

3. Apply directive in HTML

```html
<div v-fit2box class="mysize">
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>
```

```css
.mysize {
  width: 250px;
  height: 100px;
}
```

## Misc commands
- Login into yarn: `yarn login`
- Publish the package: `yarn publish` 
