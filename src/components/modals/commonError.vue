<template>
  <Modal name="common_error" title="Ошибка!" @closeModal="closeModal">
    <template v-slot:content>
      <div class="success_modal">
        <p class="modal__text">
          {{ text }}
        </p>
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
    };
  },
  methods: {
    closeModal(name) {
      this.$modal.hide(name);
    },

    beforeOpen(event) {
      this.text = event.params.text;
    },
  },
};
</script>
