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
    <HistoryCmpt/>
    <MoreWorksByLukeCmpt/>
    <Myfooter/>
  </div>
</template>

<script>
import Myfooter from '../components/Footer.vue'
import MoreWorksByLukeCmpt from '../components/MoreWorksByLuke.vue'
import HistoryCmpt from '../components/History.vue'

export default {
  name: 'Home',
  data() {      
    return{

    }
  },
  components: {
     Myfooter,
     MoreWorksByLukeCmpt,
     HistoryCmpt
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



