<template>
  <div>
    <v-row>
      <v-col cols="6" class="d-flex justify-space-between">
        <div class="mx-10">
          <ListLength :value="isLengthList" />
        </div>
        <div class="" v-for="(item, idx) in menu" :key="idx">
          <router-link :to="item.path">
            <span>{{ item.label }}</span>
          </router-link>
        </div>
        <div class="" v-if="compledTodo">
          <ButtonCustom @clickCustom="clickCustom" title="Clear Completed" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ListLength from "@/components/block/ListLength";
import ButtonCustom from "@/components/base/ButtonCustom";
export default {
  name: "NavBar",

  components: {
    ListLength,
    ButtonCustom,
  },
  computed: {
    ...mapState("todo", ["listTodo"]),
    ...mapState("menu", ["menu"]),
    ...mapGetters("todo", ["compledTodo"]),

    isLengthList() {
      switch (this.$route.name) {
        case "All":
          return this.listTodo.length || 0;
        case "Active":
          return this.listTodo.filter((e) => !e.selected).length;
        case "Completed":
          return this.listTodo.filter((e) => e.selected).length;
        default:
          return this.listTodo.length;
      }
    },
  },
  methods: {
    ...mapActions("todo", ["removeCompled"]),

    clickCustom() {
      const list = this.listTodo.filter((item) => !item.selected);
      console.log(list);
      this.removeCompled(list);
    },
  },
};
</script>

<style lang="scss" scoped></style>
