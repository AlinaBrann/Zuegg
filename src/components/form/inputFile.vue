<template>
  <label class="form-file">
    <div class="form-file__caption">{{ label }}</div>
    <input
      type="file"
      class="form-file__input"
      @input="(e) => submitMedia(e.target.files)"
    />
    <div class="form-file__custom">
      <img src="../../assets/images/icons/attach.svg" alt="" />
      <span class="form-file__caption">Прикрепить изображение</span>
    </div>
    <div class="form-file__chosen" v-if="chosenFileName[0]">
      {{ chosenFileName[0].name }}
      <div class="form-file__del" @click.prevent="deleteFile"></div>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    chosenFileName: {
      type: [FileList, Object],
    },
  },
  data: function () {
    return {
      // chosenFileName: ""
    };
  },
  methods: {
    submitMedia(e) {
      this.$emit("submitMedia", e);
    },
    deleteFile() {
      this.$emit("deleteFile");
    },
  },
};
</script>

<style lang="scss" scoped>
.form-file {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto rem(15px);
  &__input {
    position: absolute;
    left: -9999px;
    opacity: 0;
    visibility: hidden;
  }

  &__custom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: rem(28px);
    margin-bottom: rem(10px);
    background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' rx='10' ry='10' height='100%' style='fill: none; stroke: white; stroke-width: 4; stroke-dasharray: 7 7'/></svg>");
    border-radius: rem(10px);
    img {
      margin-right: rem(6px);
    }
    span {
      font-size: rem(16px);
      line-height: 1;
      border-bottom: 1px solid #fff;
      transition: 0.4s;
    }
    &:hover {
      span {
        border-color: transparent;
      }
    }
  }

  &__caption {
    cursor: pointer;
    color: #fff;
    font-size: rem(15px);
  }

  &__btn {
    height: rem(32px);
    margin: 0;
    line-height: rem(32px);
    padding: 0 rem(28px);
    font-size: rem(13px);
    background: transparent;
  }

  &__chosen {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: rem(22px);
    text-transform: none;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: url("../../assets/images/icons/attach.svg") no-repeat center
      left;
    background-size: rem(16px);
    color: #fff;
    font-size: rem(16px);
  }

  &__del {
    cursor: pointer;
    display: flex;
    width: rem(10px);
    height: rem(10px);
    margin: 0 0 0 rem(10px);
    background: url("../../assets/images/icons/close-white.svg") no-repeat
      center;
    background-size: contain;
  }
}
</style>
