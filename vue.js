const app = Vue.createApp({
  data: () => ({ // detaプロパティ
    message: "hello <span style='color: red';>vue.js</span>",
    text: "Hello. Vue.js",
    number: 100,
    ok: false,
    url: "https://www.google.co.jp",
    basePrice: 100,
    km: 0,
    m: 0,
    firstName: "",
    lastName: "",
    colors: [
      { name: "red" },
      { name: "green" },
      { name: "blue" },
    ],
  }),
  methods: { // 関数
    clickHandler: function() {
      this.message = this.message.split("").reverse().join("");
    },
    onClickColor: function() {
      this.colors[1].name = "white";
    }
  },
  computed: { // 算出プロパティ
    reversedMessage: function() {
      return this.text.split("").reverse().join("");
    },
    taxIncludedPrice: { // プロパティだからgetter,setterを定義できる
      get: function() {
        return this.basePrice * 1.1;
      },
      set: function(value) {
        this.basePrice = value / 1.1;
      }
    },
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  },
  watch: { // 監視プロパティ
    text: function(newValue, oldValue) {
      console.log("new: %s, old: %s", newValue, oldValue);
    },
    km: function(value) {
      this.km = value;
      this.m = value * 1000;
    },
    m: function(value) {
      this.km = value / 1000;
      this.m = value;
    },
    colors: {
      handler: function(newValue, oldValue) {
        console.log("update");
      }, deep: true
    }
    // firstName: function(value) {
    //   this.fullName = value + ' ' + this.lastName;
    // },
    // lastName: function(value) {
    //   this.fullName = this.firstName + ' ' + value;
    // }
  }
});
app.mount("#app");