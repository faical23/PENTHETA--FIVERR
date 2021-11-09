<template>
    <div class="ExploreArt MyNTFs">
            <div class="TitreAndFilter">
                <h2>My NFTs</h2>
                <div class="Filter"   @click="OpenCardFilter ? OpenCardFilter = false : OpenCardFilter= true">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
                      Filter & Sort
                    </button>
                </div>
                <div class="PopupFilter"  v-if="OpenCardFilter">
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
            </div>
              <div class="ExploreArt__Card">
                    <div  v-for="Explore,n in MyNTFS" :key="n">
                      <div class="Card">
                              <img :src="Explore.ImgCover" alt="" class="NFTImg" @click="SwitchToDetailArt(Explore)">
                              <div class="AvatarName">
                                  <img :src="Explore.ImgAvatar" alt="">
                                  <span>{{Explore.AvatarName}}</span>
                              </div>
                              <h3>{{Explore.TitreCard}}</h3>
                              <div class="BuyAndPrice">
                                    <button  @click="SellFuniton()">Sell</button>
                              </div>
                        </div>
                  </div>  
              </div>
    </div>

</template>

<script>
import axios from "axios";
import API_URL from "../../Config";

export default {
  name: 'Home',
  data() {      
    return{

        MyNTFS:[ 
         {
            ImgCover:require('../assets/Img/CardImg.png'),
            ImgAvatar:require('../assets/Img/Avatar.png'),
            AvatarName:'Yerikho Christian',
            TitreCard:'Inner State : Joy',
            Price:'100'
          },
          {
                        ImgCover:require('../assets/Img/CardImg.png'),
            ImgAvatar:require('../assets/Img/Avatar.png'),
                        AvatarName:'Rudolf Basna',

            TitreCard:'Sequences Scene',
            Price:'100'
          },
          {
                        ImgCover:require('../assets/Img/CardImg.png'),
            ImgAvatar:require('../assets/Img/Avatar.png'),
                        AvatarName:'Antoni Djomabala',

            TitreCard:'Birdy Birdy Birdy',
            Price:'100'
          },
          {
                        ImgCover:require('../assets/Img/CardImg.png'),
            ImgAvatar:require('../assets/Img/Avatar.png'),
                        AvatarName:'Sintya Marley',

            TitreCard:'Dope Wised',
            Price:'100'
          },
          {
                        ImgCover:require('../assets/Img/CardImg.png'),
            ImgAvatar:require('../assets/Img/Avatar.png'),
                        AvatarName:'Jack Hammer',

            TitreCard:'Preset Presence',
            Price:'100'
          },
          {
                        ImgCover:require('../assets/Img/CardImg.png'),
            ImgAvatar:require('../assets/Img/Avatar.png'),
                        AvatarName:'Roy Ricardo',

            TitreCard:'namarizonia',
            Price:'100'
          },
                    {
                        ImgCover:require('../assets/Img/CardImg.png'),
            ImgAvatar:require('../assets/Img/Avatar.png'),
                        AvatarName:'Jack Hammer',

            TitreCard:'Preset Presence',
            Price:'100'
          },
          {
                        ImgCover:require('../assets/Img/CardImg.png'),
            ImgAvatar:require('../assets/Img/Avatar.png'),
                        AvatarName:'Roy Ricardo',

            TitreCard:'namarizonia',
            Price:'100'
          },
        ],
      MinPrice:'',
      MaxPrice:'',
      AllProjet:[],
      AllCreator:[],
      OpenCardFilter :false


    }
  },
  components: {
  },
  methods:{
    SwitchToDetailArt(Explore){
      this.$store.commit('GetDetailArtData',Explore)
      this.$router.push('/DetailArt')
    },
    SellFuniton(){
      console.log("Sel funtion")
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
  },
  mounted() {
    this.GetAlProjet()
    this.GetAllCreators()
  }

}
</script>
