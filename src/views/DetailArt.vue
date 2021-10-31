<template>
  <div class="home DetailArt">
    <div class="Hero">
        <div class="container-fluid">
                <img class="BigImg" src="../assets/Img/CardImg.png" alt="">
            <div class="Hero__Content">
                <h1>Artificial Beat heart-fire</h1>
                <h6>Edition 1 of 1</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <div class="AvatarName">
                    <img src="../assets/Img/Avatar.png" alt="">
                    <span>Cameron Williamson</span>
                </div>
                <div class="Price">
                    <h6>Price:</h6>
                    <h1>0.4435 ETH ($1.231)</h1>
                </div>
                <button>Buy</button>
            </div>

        </div>
    </div>
    <div class="History">
        <h1>History</h1>
        <div class="Single__History" v-for="Histo,n in History" :key="n">
          <img src="../assets/Img/Avatar.png" alt="">
          <div class="NameAndDate">
              <h4>{{Histo.Name}}</h4>
              <p><span>Bid 1 ETH </span>{{Histo.Date}}</p>
          </div>

        </div>
    </div>
        <div class="ExploreArt">
            <div class="TitreAndFilter">
                <h2>More Works by Luke Henderson</h2>
                <div class="Filter">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
                      Filter & Sort
                    </button>
                </div>
            </div>
              <div class="ExploreArt__Card">
                  <div class="row">
                    <div  v-for="Explore,n in MoreWorkByLuke" :key="n" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
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
      History:[
        {
          Name:'CameronWilliamson',
          Date:'2021 June 20, 06:30 AM'
        },
        {
          Name:'GuyHawkins',
          Date:'2021 June 20, 06:30 AM'
        },
        {
          Name:'RalphEdwards',
          Date:'2021 June 20, 06:30 AM'
        },
        {
          Name:'AnnetteBlack',
          Date:'2021 June 20, 06:30 AM'
        }
      ],
       MoreWorkByLuke:[ 
         {
            ImgCover:require('../assets/Img/CardImg.png'),
            ImgAvatar:require('../assets/Img/Avatar.png'),
            AvatarName:'Luke Henderson',
            TitreCard:'Hakuna Mutuala',
            Price:'100'
          },
          {
                        ImgCover:require('../assets/Img/CardImg.png'),
            ImgAvatar:require('../assets/Img/Avatar.png'),
                        AvatarName:'Luke Henderson',

            TitreCard:'Cheery Bluury',
            Price:'100'
          },
          {
                        ImgCover:require('../assets/Img/CardImg.png'),
            ImgAvatar:require('../assets/Img/Avatar.png'),
                        AvatarName:'Luke Henderson',

            TitreCard:'Ron and Bon',
            Price:'100'
          },
        ],

    }
  },
  components: {
     Myfooter
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



