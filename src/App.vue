<template>
  <div id="app">
    <div>
      <div v-fit2box="mytext" class="mybox" :key="index"> {{ mytext }} </div>
      <button @click="nextExample">Next</button>
    </div>
  </div>
</template>

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

<style>
.mybox {
  height: 100px;
  width: 50%;
  border: solid 1px black;
}
</style>
