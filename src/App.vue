<template>
  <v-app>
    <v-main>
      <router-view />
      <NavBar />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/block/NavBar";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    NavBar,
  },
  created() {
    this.getListTodo();
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions("todo", ["getListTodo"]),
  },
};
</script>
