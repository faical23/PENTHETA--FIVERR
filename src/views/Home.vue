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
                <img :src="ImgUrl" alt="" class="NftImg" >
                <div class="AvatarName">
                    <img :src="ProjectImgUrl != '' ? ProjectImgUrl : require('../assets/Img/Avatar.png')" alt="" class="ProjetImg">
                    <span>{{creator}}</span>
                </div>
                <h3>{{NftName}}</h3>
                <div class="BuyAndPrice">
                    <button @click='BuyFunction()'>Buy</button>
                    <div class="Price">
                        <h6>Price:</h6>
                        <h4> 100 TFuel</h4>
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

import axios from 'axios'
import API_URL from "../../Config";
// import ethers from 'ethers'
export default {
  name: 'Home',
  data() {      
    return{
      ImgUrl : '',
      Price:'',
      NftName : '',
      creator : '',
      ProjectImgUrl : ''

    }
  },
  components: {
     Myfooter,
     RecentlySoldCmpt,
     ExploreArtCmpt ,
    PopularArtistCmpt
  },
  methods:{
    GetpromotedData(){
            axios
              .get(`${API_URL}nft/promoted`)
              .then(response => {
                this.Price = response.data.price
                this.ImgUrl = response.data.imgUrl
                this.NftName = response.data.name
                this.creator = response.data.creator
                this.ProjectImgUrl = response.data.projectImgUrl
                // console.log(response.data)
              })
    },
    BuyFunction(){
      console.log("this is buy funtion")
    }
  },
  mounted() {
    this.GetpromotedData()
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



