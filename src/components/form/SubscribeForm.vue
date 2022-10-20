<template>
  <form class="subscribe-form">
    <div class="subscribe-form__title">подписка на новости</div>
    <inputText
      placeholder="Введите E-mail"
      :field="email"
      @input="email = $event"
      type="email"
      :class="{ error: validationStatus($v.email) || errorMessage.email }"
      :error="
        (!$v.email.required && $v.email.$error ? 'Обязательное поле' : '') ||
        errorMessage.email
      "
    />
    <checkBox
      :label="`Принимаю <a href='/docs/rules.pdf' class='_undeline-link' target='_blank'>пользовательское соглашение</a> и&nbsp;согласен с&nbsp;<a href='/docs/rules.pdf' class='_undeline-link' target='_blank'>правилами использования</a> и&nbsp;<a href='/docs/rules.pdf' class='_undeline-link' target='_blank'>обработки персональных данных</a>`"
      :field="checkbox"
      :class="{
        error: validationStatus($v.checkbox) || errorMessage.checkbox,
      }"
      :error="errorMessage.checkbox"
      @input="checkbox = $event"
    />
    <button
      type="button"
      class="btn btn--primary"
      @click="submit()"
      :class="{ loading: submitStatus == 'PENDING' }"
    >
      подписаться<img
        src="../../assets/img/spinner.svg"
        class="loader"
        alt=""
      />
    </button>
  </form>
</template>

<script>
import CheckBox from "./checkBox.vue";
import inputText from "@/components/form/inputText.vue";

import { required, sameAs, email } from "vuelidate/lib/validators";

export default {
  name: "RecoverForm",
  data() {
    return {
      ready: false,
      index: 1,
      email: null,
      checkbox: false,
      errorMessage: {
        email: null,
        checkbox: null,
      },

      submitStatus: null,
    };
  },

  validations: {
    email: { required, email },
    checkbox: {
      required,
      sameAs: sameAs(() => true),
    },
  },

  methods: {
    errorReset() {
      this.$v.$reset();

      this.errorMessage = {
        email: null,
        checkbox: null,
      };
    },

    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    submit() {
      this.$v.$touch();

      if (this.$v.$pendding || this.$v.$error) return;

      if (this.submitStatus !== "PENDING") {
        this.submitStatus = "PENDING";

        this.$store
          .dispatch("Subscribe", {
            email: this.email,
            subscription_agreement: 1,
          })
          .then((r) => {
            if (r.error != 0) {
              this.submitStatus = null;

              let fieldsError = null;
              
              if (r.message.email) {
                console.log( r.message.email);
                this.errorMessage.email = r.message.email;
                fieldsError = true;
              }

              if (r.message && !fieldsError) {
                this.$modal.show("common_error", {
                  text: "Что-то пошло не так! " + r.message,
                });
              }
            } else {
              this.submitStatus = null;
              this.$modal.show("common_success", {
                text: "На указанный адрес электронной почты отправлена ссылка для подтверждения подписки"
              });
            }
          })
          .catch(() => {
            this.submitStatus = null;
          });
      }
    },
  },
  mounted() {
  },
  components: {
    inputText,
    CheckBox,
  },
};
</script>

<style lang="scss">
.subscribe-form {
  width: 100%;  
  border-radius: rem(20px);
  &__title {
    margin-bottom: rem(20px);
    font-family: "CeraProBlack";
    font-size: rem(20px);
    text-transform: uppercase;
    letter-spacing: rem(1px);
  }
  .btn {
    width: 100%;
  }
  @media (min-width: $sm) {
    padding: rem(34px) rem(110px) rem(45px);
    border: 1px solid #eff0f5;
    &__title {
      text-align: center;
    }
  }
}
</style>
