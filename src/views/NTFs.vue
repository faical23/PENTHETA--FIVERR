<template>
  <div class="home NTFs">
    <div class="ExploreArt MyNTFs">
            <div class="TitreAndFilter">
                <h2>My NFTs</h2>
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
                                        <h6>Price</h6>
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