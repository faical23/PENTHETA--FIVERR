<template>
  <div class="home Explore">
    <div class="Hero">
        <div class="container-fluid">
            <div class="Hero__Content">
                <h1>Explore Now</h1>
                <h1> & Get Experience</h1>
                <div class="SearchInput">
                      <input type="text" placeholder="Search Favorite Artist or Collector">
                      <button>Search Now</button>
                </div>
            </div>
        </div>
    </div>
    <div class="PopularArtist">
            <div class="TitreAndButtnSwitch">
                <h2>New Artist</h2>
                <div class="BtnSwitch">
                    <button @click='ShowNewRNewArtist("Back")' :style="this.StartPopular <= 0 ? 'background-color:transparent !important;border:1px solid #18E5E7' :''"><svg :style="this.StartPopular <= 0 ? 'fill:#18E5E7' :''"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg></button>
                    <button @click='ShowNewRNewArtist("Next")' :style="this.EndPopular >= this.NewArtist.length ? 'background-color:transparent !important;border:1px solid #18E5E7' :''" ><svg  :style="this.EndPopular >= this.NewArtist.length? 'fill:#18E5E7' :''" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg></button>
                </div>
            </div>
            <div class="PopularArtis__Content">
                <div class="row">
                    <div  v-for="Popular,n in NewArtist.slice(StartPopular,EndPopular)" :key="n" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div class="PopularArtis__Content__single">
                            <div class="AvatarAndName">
                                <img src="../assets/Img/Avatar.png" alt="">
                                <h5>{{Popular.AvatarName}}</h5>
                            </div>
                            <span>{{Popular.Price}} ETH</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="ExploreArt">
            <div class="TitreAndFilter">
                <h2>New Crypto Art</h2>
                <div class="Filter">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
                      Filter & Sort
                    </button>
                </div>
            </div>
              <div class="ExploreArt__Card">
                  <div class="row">
                    <div  v-for="Explore,n in NewCrypto" :key="n" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="Card">
                              <img :src="Explore.ImgCover" alt="">
                              <div class="AvatarName">
                                  <img :src="Explore.ImgAvatar" alt="">
                                  <span>{{Explore.AvatarName}}</span>
                              </div>
                              <h3>{{Explore.TitreCard}}</h3>
                              <div class="BuyAndPrice">
                                    <button>Buy</button>
                                    <div class="Price">
                                        <h6>Price:</h6>
                                        <h4>{{Explore.Price}} TFuel</h4>
                                    </div>

                              </div>
                        </div>
                    </div>
                  </div>  
              </div>
    </div>

    <Myfooter/>
  </div>
</template>

<script>
import Myfooter from '../components/Footer.vue'

export default {
  name: 'Home',
  data() {      
    return{

        NewCrypto:[ 
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
        ],
        NewArtist:[
          {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            AvatarName:'Arlene McCoy',
            Price:'214.22'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
             AvatarName:'Darlene Robertson',
            Price:'214.22'
          },          {
            ImgAvatar:require('../assets/Img/Avatar.png'),
             AvatarName:'Marvin McKinney',
            Price:'214.22'
          },          {
            ImgAvatar:require('../assets/Img/Avatar.png'),
             AvatarName:'Albert Flores',
            Price:'214.22'
          },          {
            ImgAvatar:require('../assets/Img/Avatar.png'),
             AvatarName:'Brooklyn Simmons',
            Price:'214.22'
          },          {
            ImgAvatar:require('../assets/Img/Avatar.png'),
             AvatarName:'Devon Lane',
            Price:'214.22'
          },
          ////////////////////////////////  
            {
            ImgAvatar:require('../assets/Img/Avatar.png'),
             AvatarName:'Lorem lorem',
            Price:'214.22'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
             AvatarName:'Lorem lorem',
            Price:'214.22'
          },          {
            ImgAvatar:require('../assets/Img/Avatar.png'),
             AvatarName:'Lorem lorem',
            Price:'214.22'
          },          {
            ImgAvatar:require('../assets/Img/Avatar.png'),
             AvatarName:'Lorem lorem',
            Price:'214.22'
          },          {
            ImgAvatar:require('../assets/Img/Avatar.png'),
             AvatarName:'Lorem lorem',
            Price:'214.22'
          },          {
            ImgAvatar:require('../assets/Img/Avatar.png'),
             AvatarName:'Lorem lorem',
            Price:'214.22'
          }
        ],
        StartNumberRecentlySoldShow:0,
        EndNumberRecentlySoldShow:3,
        StartPopular:0,
        EndPopular:6,

    }
  },
  components: {
     Myfooter
  },
  methods:{

    ShowNewRNewArtist(Condition){
    if(Condition == "Next"){
        if(!(this.EndPopular >= this.NewArtist.length)){
            this.StartPopular +=6
            this.EndPopular +=6
        }
      }
      else{
        if(this.StartPopular != 0){
            this.StartPopular -=6
            this.EndPopular -=6
        }
      }
    }
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



>