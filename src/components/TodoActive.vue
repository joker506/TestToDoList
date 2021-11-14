<template>
  <div>
    <h2>TodoActive</h2>

    <v-row>
      <v-col cols="6">
        <TodoItem
          v-for="(item, idx) in activeTodo"
          :key="idx"
          :item="item"
          @check="addChecked(item)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoActive",
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters("todo", ["activeTodo"]),
  },
};
</script>

<style lang="scss" scoped></style>
