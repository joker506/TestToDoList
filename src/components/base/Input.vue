<template>
  <div>
    <v-text-field
      :label="title"
      hide-details="auto"
      v-model="item"
      @keyup.enter.prevent="$emit('inputItem', item), (item = '')"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    title: {
      type: String,
      default: "Add Title!",
    },
    itemVal: String,
  },
  data() {
    return {
      item: null,
      rules: [(value) => (value && value.length >= 3) || "Min 3 characters"],
    };
  },
  created() {
    this.item = this.itemVal;
  },
};
</script>

<style lang="scss" scoped></style>
