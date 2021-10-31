<template>
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
</template>

<script>


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


    }
  },
  components: {

  },
  methods:{

  }

}
</script>




