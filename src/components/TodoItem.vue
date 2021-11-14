<template>
  <div>
    <v-list-item-group multiple active-class="">
      <v-list-item>
        <template>
          <v-list-item-action>
            <v-checkbox
              v-model="item.selected"
              @change="$emit('check', checkbox)"
            ></v-checkbox>
          </v-list-item-action>

          <v-list-item-content :class="{ item__select: item.selected }">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list-item-group>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    title: {
      type: String,
      default: "Add Title",
    },
    item: {
      type: Object,
    },
  },
  data() {
    return {
      checkbox: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.item__select {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
