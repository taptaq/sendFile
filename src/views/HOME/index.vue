<template>
  <div>
    <slideTab></slideTab>
    <sendBtn></sendBtn>
  </div>
</template>

<script>
import sendBtn from "@/components/sendBtn";
import slideTab from "@/components/slideTab";

export default {
  name: "HOME",
  components: {
    sendBtn,
    slideTab,
  },
};
</script>

<style>
body {
  overflow: hidden;
  background: rgba(87, 114, 235, 0.9);
}
</style>
