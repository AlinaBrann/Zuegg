<template>
  <label class="form-radio" :class="color === 'red' ? 'form-radio--red' : ''">
    <input
      type="radio"
      :name="name"
      :checked="checked"
      class="form-radio__input"
      :value="value"
    />
    <div class="form-radio__custom"></div>
    <div class="form-radio__caption">{{ label }}</div>
  </label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: () => false,
    },
    label: {
      type: String,
    },
    color: {
      type: String,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.form-radio {
  display: flex;

  &--red {
    .form-radio__input:checked + .form-radio__custom {
      background-color: #fa1357;
    }
  }

  &__input {
    position: absolute;
    left: -9999px;
    opacity: 0;
    visibility: hidden;
  }

  &__input:checked + .form-radio__custom {
    background-color: #0073aa;
  }

  &__custom {
    width: 18px;
    height: 18px;
    border: 3px solid #fff;
    background: #ffffff;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }

  &__caption {
    font-size: 13px;
    margin-left: 8px;
  }
  &.dense {
    .form-radio__caption {
      font-size: 9px;
      line-height: 18px;
      margin-left: 8px;
    }

    .form-radio__input:checked + .form-radio__custom {
      background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='9' cy='9' r='7.5' fill='%230073AA' stroke='white' stroke-width='3'/%3E%3Ccircle cx='9' cy='9' r='8.5' stroke='%23BFD5E0'/%3E%3C/svg%3E%0A");
    }

    .form-radio__custom {
      border: none;
      background: #ffffff;
      background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='9' cy='9' r='8.5' fill='white' stroke='%23BFD5E0'/%3E%3C/svg%3E%0A");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    &.red {
      .form-radio__input:checked + .form-radio__custom {
        background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='9' cy='9' r='7.5' fill='%23E50044' stroke='white' stroke-width='3'/%3E%3Ccircle cx='9' cy='9' r='8.5' stroke='%23BFD5E0'/%3E%3C/svg%3E%0A");
      }
    }
  }
}
</style>
