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
    <NewArtistCmpt/>
    <NewCryptoCmpt/>
    <Myfooter/>
  </div>
</template>

<script>
import Myfooter from '../components/Footer.vue'
import NewArtistCmpt from '../components/NewArtist.vue'
import NewCryptoCmpt from '../components/NewCryptoArt.vue'

export default {
  name: 'Home',
  data() {      
    return{


    }
  },
  components: {
     Myfooter,
     NewArtistCmpt,
     NewCryptoCmpt
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

