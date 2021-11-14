<template>
  <div>
    <h2>TodoComplead</h2>
    <v-row>
      <v-col cols="6">
        <TodoItem
          v-for="(item, idx) in compledTodo"
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
  name: "TodoComplead",
  components: { TodoItem },

  computed: { ...mapGetters("todo", ["compledTodo"]) },
};
</script>

<style lang="scss" scoped></style>
