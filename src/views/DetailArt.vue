<template>
  <div class="home DetailArt">
    <div class="Hero">
      <div class="container-fluid">
        <img class="BigImg" :src="NftImg" alt="" />
        <div class="Hero__Content">
          <h1>{{ NftName }}</h1>
          <h6>Edition 1 of 1</h6>
          <p>{{ NftDescription }}</p>
          <div class="AvatarName">
            <img
              :src="
                ProjetImg !== ''
                  ? ProjetImg
                  : require('../assets/Img/Avatar.png')
              "
              alt=""
            />
            <span>{{ Creator }}</span>
          </div>
          <div class="Price">
            <h6>Price:</h6>
            <h2 class="PriceETH">0.4435 ETH ($1.231)</h2>
          </div>
          <button @click="BuyFunction()">Buy</button>
        </div>
      </div>
    </div>
    <HistoryCmpt />
    <MoreWorksByLukeCmpt />
    <Myfooter />
  </div>
</template>

<script>
import Myfooter from "../components/Footer.vue";
import MoreWorksByLukeCmpt from "../components/MoreWorksByLuke.vue";
import HistoryCmpt from "../components/History.vue";

export default {
  name: "Home",
  data() {
    return {
      NftImg: "",
      NftName: "",
      NftDescription: "",
      ProjetImg: "",
      Creator: "",
      Price: "",
    };
  },
  components: {
    Myfooter,
    MoreWorksByLukeCmpt,
    HistoryCmpt,
  },
  methods: {
    GetDetailNFt() {
      this.NftImg = this.$store.state.DeaylArtData.imgUrl;
      this.NftName = this.$store.state.DeaylArtData.name;
      this.NftDescription = this.$store.state.DeaylArtData.projectDescription;
      this.ProjetImg = this.$store.state.DeaylArtData.projectImgUrl;
      this.Creator = this.$store.state.DeaylArtData.creator;
      this.Price = this.$store.state.DeaylArtData.price;

      console.log(this.$store.state.DeaylArtData);
    },
    BuyFunction() {
      console.log("Buy");
    },
  },
  mounted() {
    this.GetDetailNFt();
  },
};
</script>
<style scoped>
.Hero {
  background-image: url("../assets/Img/HeroBackground.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.StayInTheTop__content {
  background-image: url("../assets/Img/SectionBackground.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>



