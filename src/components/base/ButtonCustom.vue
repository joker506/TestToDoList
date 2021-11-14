<template>
  <div>
    <v-btn plain @click="$emit('clickCustom')"> {{ `${title}` }} </v-btn>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      default: "Button",
    },
  },
};
</script>

<style lang="scss" scoped></style>
