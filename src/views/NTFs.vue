<template>
  <div class="home NTFs">
      <MyNFTSCmpt/>
      <MyNFTSOnSale/>
    <Myfooter/>
  </div>
</template>

<script>
import Myfooter from '../components/Footer.vue'
import MyNFTSCmpt from '../components/MyNFTs.vue'
import MyNFTSOnSale from '../components/MyNFTsOnSale.vue'

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
        ],
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
        ],

    }
  },
  components: {
     Myfooter,
     MyNFTSCmpt,
     MyNFTSOnSale
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



