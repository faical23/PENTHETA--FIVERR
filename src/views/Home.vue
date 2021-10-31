<template>
  <div class="home">
    <div class="Hero">
        <div class="container-fluid">
            <div class="Hero__Content">
                <h1>The largest NFT marketplace</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <button>Start Collecting</button>
            </div>
            <div class="Hero__Img">
                <img src="../assets/Img/CardImg.png" alt="">
                <div class="AvatarName">
                    <img src="../assets/Img/Avatar.png" alt="">
                    <span>Angelina Siaahaan</span>
                </div>
                <h3>Blurry Effection</h3>
                <div class="BuyAndPrice">
                    <button>Buy</button>
                    <div class="Price">
                        <h6>Price:</h6>
                        <h4>100 TFuel</h4>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <RecentlySoldCmpt/>
    <ExploreArtCmpt/>
    <PopularArtistCmpt/>
    <div class="StayInTheTop">
      <div class="StayInTheTop__content">
          <h1>Stay in the loop on CryptoArt and NFTs</h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          <div class="Subscribe">
                <input type="text" placeholder="Your Email">
                <button>Subscribe</button>
          </div>
      </div>

    </div>
    <Myfooter/>
  </div>
</template>

<script>
import Myfooter from '../components/Footer.vue'
import RecentlySoldCmpt from '../components/RecentlySold.vue'
import ExploreArtCmpt from '../components/ExploreArt.vue'
import PopularArtistCmpt from '../components/PopularArtist.vue'

export default {
  name: 'Home',
  data() {      
    return{


    }
  },
  components: {
     Myfooter,
     RecentlySoldCmpt,
     ExploreArtCmpt ,
    PopularArtistCmpt
  },
  methods:{

  }

}
</script>
<style scoped>
.Hero{
    background-image:url('../assets/Img/HeroBackground.png');
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
}
.StayInTheTop__content{
      background-image:url('../assets/Img/SectionBackground.png');
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
}
</style>



