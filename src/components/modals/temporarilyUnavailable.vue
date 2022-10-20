<template>
  <Modal
    name="temporarily_unavailable"
    title="Внимание!"
    @closeModal="closeModal"
  >
    <template v-slot:content>
      <div class="success_modal">
        <div class="modal__subtitle">
          Спасибо за участие. Приём чеков завершён
        </div>
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
    return {};
  },
  methods: {
    closeModal(name) {
      this.$modal.hide(name);
    },
    beforeOpen() {},
  },
};
</script>
