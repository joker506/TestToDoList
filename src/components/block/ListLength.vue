<template>
  <div>
    {{ `${value > 0}` ? `${value} item left` : `You haven't added any tasks` }}
  </div>
</template>

<script>
export default {
  name: "ListLength",
  props: {
    value: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped></style>
