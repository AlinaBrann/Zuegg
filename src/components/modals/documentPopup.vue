<template>
  <Modal
    name="document_popup"
    size="lg"
    :withoutClosing="true"
    @closeModal="closeModal"
  >
    <template v-slot:content>
      <!-- <vue-pdf-embed :source="pdfSource" /> -->
      <div class="modal-pdf">
        <pdf
          v-for="i in numPages"
          :key="i"
          :src="src"
          :page="i"
          style="display: inline-block; width: 100%"
          class="modal-pdf__page"
        ></pdf>
      </div>

      <button
        type="button"
        class="btn btn--primary"
        @click="isRead ? submit() : ''"
        :class="{ _disabled: !isRead }"
        v-tooltip="!isRead ? 'Прочтите правила, чтобы закрыть окно' : ''"
      >
        Я ознакомлен(а)
      </button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
// import VuePdfEmbed from "vue-pdf-embed";
import pdf from "vue-pdf";

export default {
  components: {
    Modal,
    pdf,
    // VuePdfEmbed,
  },
  data: function () {
    return {
      src: null,
      pdfSource:
        "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf",
      isRead: false,
      numPages: undefined,
    };
  },
  watch: {
    showAllPages() {
      this.page = this.showAllPages ? null : 1;
    },
  },
  methods: {
    closeModal(name) {
      this.$modal.hide(name);
    },
    beforeOpen(event) {
      this.src = pdf.createLoadingTask(event.params.src);
      this.src.promise.then((pdf) => {
        this.numPages = pdf.numPages;
      });
      setTimeout(() => {
        let element = document.querySelector(".modal-pdf");
        element.addEventListener(
          "scroll",
          () => {
            if (
              element.scrollTop >=
              element.scrollHeight - element.offsetHeight - 1000
            ) {
              this.isRead = true;
            }
          },
          { passive: false }
        );
      }, 100);
    },
    submit() {
      this.closeModal("document_popup");
      this.$store.commit("SET_AGREE", true);
    },
  },
  mounted() {},
};
</script>
