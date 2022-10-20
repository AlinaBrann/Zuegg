<template>
  <Modal
    name="code_registration"
    title="регистрация кода"
    @closeModal="closeModal"
  >
    <template v-slot:content>
      <CodeRegForm />
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";

import CodeRegForm from "../form/CodeRegForm.vue";

export default {
  components: {
    Modal,
    CodeRegForm,
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

<style lang="scss" scoped></style>
