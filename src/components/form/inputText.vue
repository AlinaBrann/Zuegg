<template>
  <label
    class="form__field"
    :class="
      color === 'white'
        ? 'form__field--white'
        : '' || color === 'green'
        ? 'form__field--green'
        : ''
    "
  >
    <div class="form__caption" v-if="label">{{ label }}</div>
    <input
      v-if="maskValue != ''"
      :disabled="isDisabled"
      :type="type"
      :value="value"
      :id="fieldId"
      :placeholder="placeholder"
      class="form__field-input"
      :class="size ? 'form__field-input--' + size : ''"
      v-model.trim="retValue"
      v-mask="maskValue"
      :name="name"
      @focus="errorReset()"
      @input="onInput()"
      @blur="onBlur()"
    />
    <input
      v-else
      :disabled="isDisabled"
      :type="type"
      :id="fieldId"
      :value="value"
      :placeholder="placeholder"
      class="form__field-input"
      :class="size ? 'form__field-input--' + size : ''"
      v-model.trim="retValue"
      :name="name"
      @focus="errorReset()"
      @input="onInput()"
      @blur="onBlur()"
    />
    <div class="error-hint" v-if="error">{{ error }}</div>
  </label>
</template>
<script>
export default {
  data() {
    return {
      retValue: this.field,
      maskValue: this.mask || "",
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
    fieldId: String,
    mask: String,
    name: String,
    label: {
      type: String,
    },
    error: {
      type: [String, Boolean],
    },
    value: [String, Number],
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: () => {
        return "text";
      },
    },
    isDisabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    size: {
      type: String,
      default: () => {
        return "sm";
      },
    },
    color: {
      type: String,
      default: () => {
        return "white";
      },
    },
  },

  components: {},
};
</script>
<style lang="scss" scoped>
.form__field--white {
  width: 100%;
  margin-bottom: rem(16px);
}

.form__field-input {
  width: 100%;
  height: rem(50px);
  padding: 0 rem(23px) 0;
  max-width: 100%;
  appearance: none;
  font-size: rem(16px);
  background: #eff0f5;
  border: 1px solid #eff0f5;
  border-radius: rem(16px);
  transition: all 0.3s ease-in-out;
  color: $blue;
  ._centered-text & {
    text-align: center;
  }
  &::placeholder {
    color: $blue;
    opacity: 0.4;
  }
  &:focus {
    outline: none;
  }
}
</style>
