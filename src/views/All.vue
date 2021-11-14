<template>
  <div class="mx-10">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  name: "All",

  components: {
    TodoList,
  },
};
</script>
