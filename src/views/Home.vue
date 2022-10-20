<template>
  <main class="articles">
    <AppNewArticles :articles="articles.slice(0, 4)" />
    <AppArticles :articles="articles.slice(4)" />
  </main>
</template>

<script>
import AppNewArticles from "../components/AppNewArticles.vue";
import AppArticles from "../components/AppArticles.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { AppNewArticles, AppArticles },
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      articles: [
        {
          id: 1,
          img: "img_1.png",
          title: "Почему фрукты остаются полезными?",
          category: "Здоровье",
          text: "В нем нет сахара, зато много витаминов. К тому же, в нем не содержатся натуральные консерванты. Однако, не все знают, что такое конфитюр и чем...",
        },
        {
          id: 2,
          img: "img_2.png",
          title: "сколько варенья можно съедать в день?",
          category: "Здоровье",
          text: "В нем нет сахара, зато много витаминов. К тому же, в нем не содержатся натуральные консерванты. Однако, не все знают, что такое конфитюр и чем...",
        },
        {
          id: 3,
          img: "img_3.png",
          title: "какие витамины есть в варенье?",
          category: "Здоровье",
          text: "В нем нет сахара, зато много витаминов. К тому же, в нем не содержатся натуральные консерванты. Однако, не все знают, что такое конфитюр и чем...",
        },
        {
          id: 4,
          img: "img_1.png",
          title: "Почему фрукты остаются полезными?",
          category: "Здоровье",
          text: "В нем нет сахара, зато много витаминов. К тому же, в нем не содержатся натуральные консерванты. Однако, не все знают, что такое конфитюр и чем...",
        },
        {
          id: 5,
          img: "img_1.png",
          title: "Почему фрукты остаются полезными?",
          category: "Здоровье",
          text: "В нем нет сахара, зато много витаминов. К тому же, в нем не содержатся натуральные консерванты. Однако, не все знают, что такое конфитюр и чем...",
        },
        {
          id: 6,
          img: "img_2.png",
          title: "сколько варенья можно съедать в день?",
          category: "Здоровье",
          text: "В нем нет сахара, зато много витаминов. К тому же, в нем не содержатся натуральные консерванты. Однако, не все знают, что такое конфитюр и чем...",
        },
        {
          id: 7,
          img: "img_3.png",
          title: "какие витамины есть в варенье?",
          category: "Здоровье",
          text: "В нем нет сахара, зато много витаминов. К тому же, в нем не содержатся натуральные консерванты. Однако, не все знают, что такое конфитюр и чем...",
        },
        {
          id: 8,
          img: "img_1.png",
          title: "Почему фрукты остаются полезными?",
          category: "Здоровье",
          text: "В нем нет сахара, зато много витаминов. К тому же, в нем не содержатся натуральные консерванты. Однако, не все знают, что такое конфитюр и чем...",
        },
      ],
    };
  },
  mounted() {
    // this.$modal.show("recover");
    // this.$modal.show("error_code");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        document.querySelector(".header").classList.remove("_modified");
      } else {
        document.querySelector(".header").classList.add("_modified");
      }
    });
  },
  methods: {},
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  created() {},
};
</script>
<style lang="scss">
.articles {
  width: rem(768px);
  max-width: 100%;
  margin: rem(160px) auto 0;
}
</style>
