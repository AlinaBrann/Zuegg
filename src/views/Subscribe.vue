<template>
  <div>
    <div class="subscribe">
      <h1 class="subscribe__title">тем, кто интересуется здоровым питанием</h1>
      <SubscribeForm />
    </div>
  </div>
</template>

<script>
import SubscribeForm from "../components/form/SubscribeForm.vue";
export default {
  components: { SubscribeForm },
  mounted() {
    const params = this.$route.query;
    if (params.email === "1") {
      this.$modal.show("common_success", {
        text: "Подписка активирована, мы отправили подарок на указанный адрес электронной почты"
      });
      this.$router.push("/subscribe");
    }
  }
};
</script>

<style lang="scss" scoped>
.subscribe {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: rem(40px) rem(24px) rem(25px);
  width: rem(768px);
  max-width: calc(100% - #{rem(40px)});
  margin: rem(160px) auto rem(30px);
  background: #fff;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.16);
  border-radius: rem(20px);
  &__title {
    margin: 0 auto rem(25px);
    font-size: rem(24px);
    line-height: rem(30px);
    font-family: "CeraProBlack";
    text-transform: uppercase;
  }
  @media (min-width: $sm) {
    padding: rem(60px) rem(94px) rem(48px);
    &__title {
      margin: 0 auto rem(33px);
      font-size: rem(44px);
      line-height: rem(57px);
      text-align: center;
    }
  }
}
</style>
