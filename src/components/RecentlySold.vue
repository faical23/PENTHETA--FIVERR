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
            <div class="RacebltySold__Content">
                <div class="RacebltySold__Content_Single" v-for="Racently,n in RecentlySold.slice(StartNumberRecentlySoldShow,EndNumberRecentlySoldShow)" :key="n">
                  <table >
                    <tr>
                      <th>
                            <img :src="Racently.ImgAvatar" alt="">
                      </th>
                      <th><span>{{Racently.ANameNft}}</span></th>
                      <th><span>{{Racently.ArtistName}}</span></th>
                      <th><span>{{Racently.Price}}</span></th>
                      <th><span>{{Racently.Date}}</span></th>
                    </tr>
                  </table>
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
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
  {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },

            {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
                    {
            ImgAvatar:require('../assets/Img/Avatar.png'),
            ANameNft:'Name of NFT',
            ArtistName:'ArtistName',
            Price:'100',
            Date:'10/05/2021'
          },
          
          
        ],
        StartNumberRecentlySoldShow:0,
        EndNumberRecentlySoldShow:10


    }
  },
  components: {
  },
  methods:{
    ShowNewRecentlySold(Condition){
      if(Condition == "Next"){
        if(!(this.EndNumberRecentlySoldShow >= this.RecentlySold.length)){
            this.StartNumberRecentlySoldShow +=10
            this.EndNumberRecentlySoldShow +=10
        }
      }
      else{
        if(this.StartNumberRecentlySoldShow != 0){
            this.StartNumberRecentlySoldShow -=10
            this.EndNumberRecentlySoldShow -=10
        }
      }
    },

  }

}
</script>




