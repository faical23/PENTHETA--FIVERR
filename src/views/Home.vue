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
                        <h6>Price</h6>
                        <h4>100 TFuel</h4>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="RecentlySold">
      <div class="container-fluid">
            <div class="TitreAndButtnSwitch">
                <h2>Recently sold</h2>
                <div class="BtnSwitch">
                    <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg></button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg></button>
                </div>
            </div>

                <div class="RecentlySold__Card">
                  <div class="row">
                        <div v-for="n in 3" :key='n' class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="Card">
                                <img src="../assets/Img/CardImg.png" alt="">
                                <div class="AvatarName">
                                    <img src="../assets/Img/Avatar.png" alt="">
                                    <span>Angelina Siaahaan</span>
                                </div>
                                <h3>Blurry Effection</h3>
                                <h4>Price: 100 TFuel</h4>
                          </div>
                        </div>
                    </div>  
                </div>
        </div>
    </div>
    <div class="ExploreArt">
            <div class="TitreAndFilter">
                <h2>Explore Art</h2>
                <div class="Filter">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
                      Filter & Sort
                    </button>
                </div>
            </div>
              <div class="ExploreArt__Card">
                  <div class="row">
                    <div  v-for="n in 6" :key="n" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="Card">
                              <img src="../assets/Img/CardImg.png" alt="">
                              <div class="AvatarName">
                                  <img src="../assets/Img/Avatar.png" alt="">
                                  <span>Angelina Siaahaan</span>
                              </div>
                              <h3>Blurry Effection</h3>
                              <div class="BuyAndPrice">
                                    <button>Buy</button>
                                    <div class="Price">
                                        <h6>Price</h6>
                                        <h4>100 TFuel</h4>
                                    </div>

                              </div>
                        </div>
                    </div>
                  </div>  
              </div>
    </div>
    <div class="PopularArtist">
            <div class="TitreAndButtnSwitch">
                <h2>Popular Artist</h2>
                <div class="BtnSwitch">
                    <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg></button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg></button>
                </div>
            </div>
            <div class="PopularArtis__Content">
                <div class="row">
                    <div  v-for="n in 6" :key="n" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div class="PopularArtis__Content__single">
                            <div class="AvatarAndName">
                                <img src="../assets/Img/Avatar.png" alt="">
                                <h5>Arlene McCoy</h5>
                            </div>
                            <span>214.22 ETH</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
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

export default {
  name: 'Home',
  components: {
     Myfooter
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



