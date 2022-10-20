<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$parent.showFooter = false;
    this.$parent.showHeader = false;
    this.$modal.show("temporarily_unavailable");
  },
};
</script>

<style lang="scss" scoped></style>
