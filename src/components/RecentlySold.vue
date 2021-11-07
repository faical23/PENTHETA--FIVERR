<template>
    <div class="RecentlySold">
      <div class="container-fluid">
            <div class="TitreAndButtnSwitch">
                <h2>Recently sold</h2>
                <div class="BtnSwitch">
                    <button @click="GetBack()"><svg   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg></button>
                    <button  @click="GetNext()"><svg   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg></button>
                    <!-- <button  @click='ShowNewRecentlySold("Back")' :style="this.StartNumberRecentlySoldShow <= 0 ? 'background-color:transparent !important;border:1px solid #18E5E7' :''"><svg  :style="this.StartNumberRecentlySoldShow <= 0 ? 'fill:#18E5E7' :''" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg></button> -->
                    <!-- <button  @click='ShowNewRecentlySold("Next")' :style="this.EndNumberRecentlySoldShow >= this.RecentlySold.length ? 'background-color:transparent !important;border:1px solid #18E5E7' :''" ><svg  :style="this.EndNumberRecentlySoldShow >= this.RecentlySold.length? 'fill:#18E5E7' :''"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg></button> -->
                </div>
            </div>
            <div class="RacebltySold__Content">
                <div class="RacebltySold__Content_Single" v-for="Racently,n in RecentlySold.slice(StartNumberRecentlySoldShow,EndNumberRecentlySoldShow)" :key="n">
                        <div class="Centent" style="width:500px;padding:0px 20px;">
                              <img :src="Racently.imgUrl" alt="">
                        </div>
                        <div class="Content"  style="width:500px;padding:0px 20px;line-height: 30px;">
                              <span style="color:white;font-size: 20px;font-family: 'Montserrat-Bold';" >{{Racently.name}}</span>
                        </div>
                        <div class="Content"  style="width:500px;padding:0px 20px;line-height: 30px;">
                              <span style="color:white;font-size: 20px;font-family: 'Montserrat-Bold';" >{{Racently.creator}}</span>
                        </div>
                        <div class="Content"  style="width:500px;padding:0px 20px;line-height: 30px;">
                              <span style="color:white;font-size: 20px;font-family: 'Montserrat-Bold';" >100 TFuel</span>
                        </div>
                        <div class="Content"  style="width:500px;padding:0px 20px;line-height: 30px;">
                              <span style="color:white;font-size: 20px;font-family: 'Montserrat-Bold';" >{{Racently.Date}} 07/11/2021</span>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import API_URL from "../../Config";

export default {
  name: 'Home',
  data() {      
    return{
        RecentlySold:[
         
        ],
        StartNumberRecentlySoldShow:0,
        EndNumberRecentlySoldShow:10,
        GetFirstRacently:10,


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
    GetNext(){
        this.GetFirstRacently +=10
        this.StartNumberRecentlySoldShow +=10;
        this.EndNumberRecentlySoldShow +=10
        this.GetRecentySoldData(this.GetFirstRacently)
    },
    GetBack(){
        this.GetFirstRacently -=10
        this.StartNumberRecentlySoldShow -=10;
        this.EndNumberRecentlySoldShow -=10
        this.GetRecentySoldData(this.GetFirstRacently)
      console.log("back")
    },
    GetRecentySoldData(Number){
            axios
              .get(`${API_URL}nft/sold/recent/${Number}`)
              .then(response => {
                this.RecentlySold = response.data
                // console.log(response)
              })
    }

  },
  mounted() {
    this.GetRecentySoldData(this.GetFirstRacently)
  }

}
</script>




