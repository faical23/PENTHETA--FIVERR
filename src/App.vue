<template>
  <div id="app">
    <div class="Navbar">
      <div v-if="BurgerWork" class="NavbarMobileCobtent">
            <ul>
              <li><router-link to="/">Home</router-link>  </li>
              <li><router-link to="/Explore">Explore</router-link> </li>
              <!-- <li><router-link to="/DetailArt">Detail Art</router-link> </li> -->
              <li><router-link to="/NTFs">My NFTs</router-link> </li>
              <button @click='ConnectWalletFunction()'>Connect Wallet</button>
            </ul>
      </div>
      <div class="container-fluid">
        <div class="DescktopNavbar">
          <div class="LeftNavbar">
            <ul>
              <li><router-link to="/"><img src="./assets/Img/Logo.png" alt=""></router-link> </li>
              <li><router-link to="/">Home</router-link>  </li>
              <li><router-link to="/Explore">Explore</router-link> </li>
              <!-- <li><router-link to="/DetailArt">Detail Art</router-link> </li> -->
              <li><router-link to="/NTFs">My NFTs</router-link> </li>
            </ul>
          </div>
          <div class="RightNavbar">
              <button  @click='ConnectWalletFunction()'>Connect Wallet</button>
          </div>
        </div>
        <div  class="MobileNavbar">
          <ul>
            <li><router-link to="/"><img src="./assets/Img/Logo.png" alt=""></router-link> </li>
            <li>
              <div class="BurgerMenu" @click="OpenNavbarMobile">
                <span :class=" BurgerWork ? 'Burger_1' : '' "></span>
                <span :class=" BurgerWork ? 'Burger_2' : '' "></span>
                <span :class=" BurgerWork ? 'Burger_3' : '' "></span>
              </div>
            </li>
          </ul>
        </div>


      </div>

    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "features",
  data() {
    return {
        BurgerWork:false,
    };
  },

  methods: {
    OpenNavbarMobile(){
      this.BurgerWork ? this.BurgerWork =  false : this.BurgerWork = true;
      console.log(this.BurgerWork)
    },
    ConnectWalletFunction(){
      console.log("Connect wallet function")
    }
  },
  mounted() {
  }
};
</script>
<style lang="scss">
 @import 'assets/css/style.css';
</style>


