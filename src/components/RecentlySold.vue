<template>
    <div class="RecentlySold">
      <div class="container-fluid">
            <div class="TitreAndButtnSwitch">
                <h2>Recently sold</h2>
                <div class="BtnSwitch">
                    <button  @click='ShowNewRecentlySold("Back")' :style="this.StartNumberRecentlySoldShow <= 0 ? 'background-color:transparent !important;border:1px solid #18E5E7' :''"><svg  :style="this.StartNumberRecentlySoldShow <= 0 ? 'fill:#18E5E7' :''" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg></button>
                    <button  @click='ShowNewRecentlySold("Next")' :style="this.EndNumberRecentlySoldShow >= this.RecentlySold.length ? 'background-color:transparent !important;border:1px solid #18E5E7' :''" ><svg  :style="this.EndNumberRecentlySoldShow >= this.RecentlySold.length? 'fill:#18E5E7' :''"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg></button>
                </div>
            </div>

                <div class="RecentlySold__Card">
                  <div class="row">
                        <div v-for="Elemennt,n in RecentlySold.slice(StartNumberRecentlySoldShow,EndNumberRecentlySoldShow)" :key='n' class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="Card">
                                <img :src="Elemennt.ImgCover" alt="">
                                <div class="AvatarName">
                                    <img :src="Elemennt.ImgAvatar" alt="">
                                    <span>{{Elemennt.AvatarName}}</span>
                                </div>
                                <h3>{{Elemennt.TitreCard}}</h3>
                                <h4>Price: {{Elemennt.Price}} TFuel</h4>
                          </div>
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
        RecentlySold:[
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

            AvatarName:'lorem lorem',
            TitreCard:'Lorem lorem',
            Price:'100'
          },
          {
          ImgCover:require('../assets/Img/CardImg.png'),
                        ImgAvatar:require('../assets/Img/Avatar.png'),

            AvatarName:'Antoni Djomabala',
            TitreCard:'Lorem lorem',
            Price:'100'
          },
          {
          ImgCover:require('../assets/Img/CardImg.png'),
                        ImgAvatar:require('../assets/Img/Avatar.png'),

            AvatarName:'lorem lorem',
            TitreCard:'Lorem lorem',
            Price:'100'
          },
          
          
        ],
        StartNumberRecentlySoldShow:0,
        EndNumberRecentlySoldShow:3,


    }
  },
  components: {
  },
  methods:{
    ShowNewRecentlySold(Condition){
      if(Condition == "Next"){
        if(!(this.EndNumberRecentlySoldShow >= this.RecentlySold.length)){
            this.StartNumberRecentlySoldShow +=3
            this.EndNumberRecentlySoldShow +=3
        }
      }
      else{
        if(this.StartNumberRecentlySoldShow != 0){
            this.StartNumberRecentlySoldShow -=3
            this.EndNumberRecentlySoldShow -=3
        }
      }
    },

  }

}
</script>




