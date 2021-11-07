<template>
  <div class="home Explore">
    <div class="Hero">
        <div class="container-fluid">
            <div class="Hero__Content">
                <h1>Explore Now</h1>
                <h1> & Get Experience</h1>
                <div class="SearchInput">
                  <input type="text" class="inpsearch" list="mysearch" placeholder="Search Place ..." @keyup="SerchFuntion()" v-model="BarSearch">
                      <datalist id="mysearch">
                          <option   v-for="NFT,n in  ResultSearch" :key="n" :value="NFT"/>
                      </datalist>
                      <button @click="GoToDetailPage()">Search Now</button>
                </div>
            </div>
        </div>
    </div>
    <NewArtistCmpt/>
    <NewCryptoCmpt/>
    <Myfooter/>
  </div>
</template>

<script>
import Myfooter from '../components/Footer.vue'
import NewArtistCmpt from '../components/NewArtist.vue'
import NewCryptoCmpt from '../components/NewCryptoArt.vue'

import axios from "axios";
import API_URL from "../../Config";

export default {
  name: 'Home',
  data() {      
    return{
      SearchNft : 'a',
      ResultSearch:[],
      BarSearch:''

    }
  },
  components: {
     Myfooter,
     NewArtistCmpt,
     NewCryptoCmpt
  },
  methods:{
    ResultSearchFuntion(){
            axios
              .get(`${API_URL}nft/search/${this.SearchNft}`)
              .then(response => {
                response.data.forEach(element => {
                    this.ResultSearch.push(element.name)
                });
                // console.log(response)
                // console.log("result" ,this.ResultSearch)
              })
    },
    SerchFuntion(){
        this.SearchNft = this.BarSearch
        this.ResultSearchFuntion()
    },
    GoToDetailPage(){
      console.log(this.BarSearch)
    }
  },
  mounted() {
    this.ResultSearchFuntion()
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

