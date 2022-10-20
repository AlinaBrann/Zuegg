<template>
  <label class="form-checkbox" :class="color ? `_${color}` : ''">
    <input
      type="checkbox"
      class="form-checkbox__input"
      @change="onInput()"
      v-model.trim="retValue"
    />
    <div class="form-checkbox__custom"></div>
    <div class="form-checkbox__caption" v-html="label"></div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      retValue: this.field,
    };
  },

  methods: {
    errorReset() {
      this.$parent.errorReset();
    },

    onInput() {
      this.$emit("input", this.retValue);
    },
  },
  props: {
    field: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    color: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.form-checkbox {
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  margin-bottom: rem(20px);
  &._center {
    align-items: center;
  }

  &__input {
    position: absolute;
    left: -9999px;
    opacity: 0;
    visibility: hidden;
  }

  &__input:checked + .form-checkbox__custom {
    background-color: #eff0f5;
    background-image: url("../../assets/images/icons/checked.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    ._white & {
      background-color: #fff;
    }
  }

  &__custom {
    min-width: rem(24px);
    width: rem(24px);
    height: rem(24px);
    background-size: rem(12px);
    background: #eff0f5;
    border-radius: rem(8px);
    background-repeat: no-repeat;
    background-position: center;
    ._white & {
      background: #fff;
    }
    // transition: all 0.3s ease-in-out;
  }

  &__caption {
    margin-left: rem(13px);
    font-size: rem(13px);
    font-weight: 400;
    line-height: normal;
    text-transform: none;
    color: $blue;
    a {
      color: $blue;
      font-weight: 700;
    }
  }
}

.error .form-checkbox__custom {
  background: #ff9999;
}
</style>
