<template>
  <Modal name="common_success" :title="title" @closeModal="closeModal">
    <template v-slot:content>
      <div class="success_modal">
        <p class="modal__text" v-html="text"></p>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
  data: function () {
    return {
      text: "",
      title: "Спасибо!",
    };
  },
  methods: {
    closeModal(name) {
      this.$modal.hide(name);
    },

    beforeOpen(event) {
      this.text = event.params.text;
      if (event.params.title) {
        this.title = event.params.title || "Спасибо!";
      }
    },
  },
};
</script>
