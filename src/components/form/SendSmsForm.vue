<template>
  <div>
    <form @submit.prevent="submitSendCode()">
      <input type="hidden" name="phone" v-model="phoneNumber" />
      <div class="error-hint" v-if="errorMessage.phoneNumber">
        {{ errorMessage.phoneNumber }}
        <br />
        <button class="btn btn--secondary" @click="backToSingUp()">
          Форма регистрации
        </button>
      </div>

      <button
        class="btn btn--primary"
        type="submit"
        :class="{ loading: submitStatus == 'PENDING' }"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  props: ["phone", "formData"],
  data() {
    return {
      ready: false,

      phoneNumber: this.phone,
      errorMessage: {
        phone: null,
      },

      submitStatus: null,
    };
  },
  validations: {
    phoneNumber: {
      required,
    },
  },
  methods: {
    errorReset() {
      this.$v.$reset();

      this.errorMessage = {
        phoneNumber: null,
      };
    },
    backToSingUp() {
      this.$modal.hide("send_sms");
      this.$modal.show("authorization");
    },
    submitSendCode() {
      console.log("submit");
      this.$v.$touch();

      if (this.$v.$pendding || this.$v.$error) return;

      if (this.submitStatus !== "PENDING") {
        this.submitStatus = "PENDING";

        this.$store
          .dispatch("SendSms", {
            phone: this.phoneNumber,
          })
          .then((r) => {
            console.log(r);
            if (r.error !== 0) {
              this.submitStatus = null;
              let fieldsError = null;
              if (r.message && r.message.phone) {
                [this.errorMessage.phoneNumber] = r.message.phone;
                fieldsError = true;
              }
            } else {
              this.submitStatus = null;

              this.$modal.hide("send_sms");
              this.$modal.show("enter_code", {
                phone: this.phoneNumber,
                formData: this.formData,
              });
            }
          })
          .catch(() => {
            this.submitStatus = null;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error-hint {
  position: static;
  padding-top: 20px;
  font-size: 18px;
  background: none;
  color: #d63a3a;
  &::after,
  &::before {
    display: none;
  }
}
</style>
