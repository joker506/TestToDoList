<template>
  <div>
    <h2>TodoList</h2>
    <v-row>
      <v-col cols="6">
        <Input title="Add title todo" @inputItem="addNewTodo" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <TodoItem
          v-for="(item, idx) in listTodo"
          :key="idx"
          :item="item"
          @check="addChecked(item)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import TodoItem from "@/components/TodoItem";
import Input from "@/components/base/Input";
export default {
  name: "TodoList",
  data() {
    return {
      formItem: "",
    };
  },
  components: {
    TodoItem,
    Input,
  },
  created() {
    this.getListTodo();
  },
  methods: {
    ...mapActions("todo", ["setTodo", "getListTodo", "setCheckTodo"]),
    ...mapMutations("todo", ["NEW_TODO"]),
    addNewTodo(item) {
      item
        ? this.setTodo({
            id: this.listTodo.length + 1,
            title: "new",
            text: item,
          })
        : console.log("error");
    },

    addChecked() {
      this.setCheckTodo(this.listTodo);
    },
  },
  computed: {
    ...mapState("todo", ["listTodo"]),
  },
};
</script>

<style lang="scss" scoped></style>
