<template>
    <div class="RecentlySold">
      <div class="container-fluid">
            <div class="TitreAndButtnSwitch">
                <h2>Recently sold</h2>
                <div class="BtnSwitch">
                    <button @click="GetBack()"><svg   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg></button>
                    <button  @click="GetNext()"><svg   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg></button>
                </div>
            </div>
            <div class="ZoneSpiner" v-if="SpinerWork">
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
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
        EndNumberRecentlySoldShow:5,
        GetFirstRacently:5,
        SpinerWork:false,


    }
  },
  components: {
  },
  methods:{
    ShowNewRecentlySold(Condition){
      if(Condition == "Next"){
        if(!(this.EndNumberRecentlySoldShow >= this.RecentlySold.length)){
            this.StartNumberRecentlySoldShow +=5
            this.EndNumberRecentlySoldShow +=5
        }
      }
      else{
        if(this.StartNumberRecentlySoldShow != 0){
            this.StartNumberRecentlySoldShow -=5
            this.EndNumberRecentlySoldShow -=5
        }
      }
    },
    GetNext(){
        this.GetFirstRacently +=5
        this.StartNumberRecentlySoldShow +=5
        this.EndNumberRecentlySoldShow +=5
        this.GetRecentySoldData(this.GetFirstRacently)
    },
    GetBack(){
      if(this.StartNumberRecentlySoldShow !== 0){
          this.GetFirstRacently -=5
          this.StartNumberRecentlySoldShow -=5
          this.EndNumberRecentlySoldShow -=5
          this.GetRecentySoldData(this.GetFirstRacently)
      }

      console.log(this.StartNumberRecentlySoldShow , this.EndNumberRecentlySoldShow )
    },
    GetRecentySoldData(Number){
          this.SpinerWork = true
            axios
              .get(`${API_URL}nft/sold/recent/${Number}`)
              .then(response => {
                this.RecentlySold = response.data
                this.SpinerWork = false;
              })
    }

  },
  mounted() {
    this.GetRecentySoldData(this.GetFirstRacently)
  }

}
</script>




