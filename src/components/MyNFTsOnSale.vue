<template>
    <div class="ExploreArt MyNTFsOnSale">
            <div class="TitreAndFilter">
                <h2>My NFTs on sale</h2>
            </div>
              <div class="ExploreArt__Card">
                    <div  v-for="Explore,n in MyNTFsOnSale" :key="n">
                      <div class="Card">
                              <img :src="Explore.ImgCover" alt="" class="NFTImg" @click="SwitchToDetailArt(Explore)">
                              <div class="AvatarName">
                                  <img :src="Explore.ImgAvatar" alt="">
                                  <span>{{Explore.AvatarName}}</span>
                              </div>
                              <h3>{{Explore.TitreCard}}</h3>
                              <div class="BuyAndPrice">
                                    <button @click='CancelFunction()'>Cancel</button>
                              </div>
                        </div>
                  </div>  
              </div>
    </div>
</template>

<script>


export default {
  name: 'Home',
  data() {      
    return{

        MyNTFsOnSale:[ 
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

    }
  },
  components: {

  },
  methods:{
    SwitchToDetailArt(Explore){
      this.$store.commit('GetDetailArtData',Explore)
      this.$router.push('/DetailArt')
    },
    CancelFunction(){
      console.log("Cancel function")
    }
  }

}
</script>




