<template>
  <div class="home Explore">
    <div class="Hero">
        <div class="container-fluid">
            <div class="Hero__Content">
                <h1>Explore Now</h1>
                <h1> & Get Experience</h1>
                <div class="SearchInput">
                  <input type="text" class="inpsearch" list="mysearch" placeholder="Search Place ..." @keyup="SerchFuntion()" v-model="BarSearch">
                      <button @click="GoToDetailPage()">Search Now</button>
                </div>
            </div>
        </div>
    </div>
    <div class="PopupFilter PopupFilterExplore" v-if="SearchClicked">
                      <div class="Projet">
                          <h6>Projets</h6>
                            <ul>
                              <li v-for="Projet,n in AllProjet" :key="n">
                                <input type="checkbox" >
                                <span>{{Projet.name}}</span>
                              </li>
                          </ul>
                      </div>
                      <div class="creator">
                          <h6>Creators</h6>
                          <ul>
                              <li v-for="CreatorProjet,n in AllCreator" :key="n">
                                <input type="checkbox" >
                                <span>{{CreatorProjet}}</span>
                              </li>
                          </ul>
                      </div>
                      <div class="Price">
                          <h6>Price</h6>
                          <button>Ascending</button>
                          <button>Descending</button>
                          <input type="number" placeholder="Min" v-model="MinPrice">
                          <input type="number" placeholder="Max" v-model="MaxPrice">

                      </div>
    </div>
    <div class="ExploreArt" v-if="SearchClicked">
      <div class="ExploreArt__Card">
                    <div  v-for="Explore,n in ResultSearch" :key="n">
                        <div class="Card">
                          <img :src="Explore.imgUrl" alt="" class="NFTImg" @click="SwitchToDetailArt(Explore)" />
                          <div class="AvatarName">
                            <img
                              :src="
                                Explore.projectImgUrl != ''
                                  ? Explore.projectImgUrl
                                  : require('../assets/Img/Avatar.png')
                              "
                              alt=""
                              style="width: 40px; border-radius: 100%"
                            />
                            <span>{{ Explore.creator }}</span>
                          </div>
                          <h3>{{ Explore.name }}</h3>
                          <div class="BuyAndPrice">
                            <button @click="BuyFunction()">Buy</button>
                            <div class="Price">
                              <h6>Price:</h6>
                              <h4>{{ Explore.Price }} 100 TFuel</h4>
                            </div>
                          </div>
                        </div>
                    </div>  
      </div>
    </div>

    <NewArtistCmpt v-if="!SearchClicked"/>
    <NewCryptoCmpt  v-if="!SearchClicked"/>
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
      BarSearch:'',
      MinPrice:'',
      MaxPrice:'',
      AllProjet:[],
      AllCreator:[],
      OpenCardFilter :false,
      SearchClicked:false,
     ResultSearch:[ ],

    }
  },
  components: {
     Myfooter,
     NewArtistCmpt,
     NewCryptoCmpt
  },
  methods:{
    SerchFuntion(){  
      console.log(this.BarSearch)
      if(this.BarSearch == ""){
        this.SearchClicked = false
      }
    },
    GoToDetailPage(){
      if(this.BarSearch != ""){
          axios
              .get(`${API_URL}nft/search/${this.BarSearch}`)
              .then(response => {
                this.ResultSearch = response.data.slice(0,8) 
                console.log("result" , response.data.slice(0,8) )
          })
          this.SearchClicked = true
          console.log(this.BarSearch)
      }
    },
    GetAlProjet(){
        axios.get(`${API_URL}projects`).then((response) => {
              this.AllProjet = response.data
        });
    },
    GetAllCreators(){
        axios.get(`${API_URL}projects`).then((response) => {
              let CreatorsHave=[]
              for(let i = 0 ; i <response.data.length ; i++){
                !(CreatorsHave.includes(response.data[i].creator)) ? 
                CreatorsHave.push(response.data[i].creator)
                : ''
              }
              this.AllCreator = CreatorsHave
        });
    },
    BuyFuniton(){
      console.log("Buy funtion")
    },
    SwitchToDetailArt(Explore){
      this.$store.commit('GetDetailArtData',Explore)
      this.$router.push('/DetailArt')
    },
  },
  mounted() {
    this.GetAlProjet()
    this.GetAllCreators()
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

