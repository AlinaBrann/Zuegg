<template>
  <label class="form-textarea">
    <div class="form-textarea__caption" v-if="label">{{ label }}</div>
    <textarea
      class="form-textarea__field"
      :placeholder="placeholder"
      v-model.trim="retValue"
      :name="name"
      @focus="errorReset()"
      @input="onInput()"
      @blur="onBlur()"
    ></textarea>

    <div class="error-hint" v-if="error">{{ error }}</div>
  </label>
</template>
<script>
export default {
  data() {
    return {
      retValue: this.field,
      nameValue: this.name || "",
    };
  },
  methods: {
    errorReset() {
      this.$parent.errorReset();
    },

    onInput() {
      this.$emit("input", this.retValue);
    },

    onBlur() {
      this.$emit("input", this.retValue);
    },
  },
  props: {
    field: String,
    name: String,
    label: {
      type: String,
    },
    error: {
      type: String,
    },
    value: [String, Number],
    placeholder: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
$color: $green_dark;
.form-textarea {
  position: relative;
  display: block;
  max-width: 100%;
  margin: 0 auto rem(20px);

  &__field {
    resize: none;
    min-height: rem(130px);
    width: 100%;
    padding: rem(17px) rem(37px) 0;
    max-width: 100%;
    appearance: none;
    font-size: rem(18px);
    background: $green_light;
    border: 1px solid $green_light;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: rem(20px);
    transition: all 0.3s ease-in-out;
    color: $color;
    &::placeholder {
      font-size: rem(18px);
      color: $color;
    }
  }
  &__field:focus {
    border-color: $green_light;
    outline: none;
  }
  &__caption {
    margin-bottom: rem(4px);
    font-size: rem(15px);
    line-height: rem(18px);
  }
}
</style>
