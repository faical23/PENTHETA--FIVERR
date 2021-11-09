<template>
  <div class="ExploreArt">
    <div class="TitreAndFilter">
      <h2>More Works by Luke Henderson</h2>
      <div class="Filter"  @click="OpenCardFilter ? OpenCardFilter = false : OpenCardFilter= true">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
          </svg>
          Filter & Sort
        </button>
      </div>
      <div class="PopupFilter"  v-if="OpenCardFilter">
            <div class="Projet">
                <h6>Projets</h6>
                  <ul>
                    <li v-for="Projet,n in AllProjet" :key="n">
                      <input type="checkbox" >
                      <span>{{Projet.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="creator">
                <h6>Creators</h6>
                <ul>
                    <li v-for="CreatorProjet,n in AllCreator" :key="n">
                      <input type="checkbox" >
                      <span>{{CreatorProjet}}</span>
                    </li>
                </ul>
            </div>
            <div class="Price">
                <h6>Price</h6>
                <button>Ascending</button>
                <button>Descending</button>
                <input type="number" placeholder="Min" v-model="MinPrice">
                <input type="number" placeholder="Max" v-model="MaxPrice">

            </div>
      </div>
    </div>
    <div class="ExploreArt__Card">
      <div v-for="(Explore, n) in MoreWorkByLuke" :key="n">
        <div class="Card">
          <img :src="Explore.ImgCover" alt="" class="NFTImg"  />
          <div class="AvatarName">
            <img :src="Explore.ImgAvatar" alt="" />
            <span>{{ Explore.AvatarName }}</span>
          </div>
          <h3>{{ Explore.TitreCard }}</h3>
          <div class="BuyAndPrice">
            <button @click="BuyFunction()">Buy</button>
            <div class="Price">
              <h6>Price:</h6>
              <h4>{{ Explore.Price }} TFuel</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import API_URL from "../../Config";

export default {
  name: "Home",
  data() {
    return {
      MoreWorkByLuke: [
        {
          ImgCover: require("../assets/Img/CardImg.png"),
          ImgAvatar: require("../assets/Img/Avatar.png"),
          AvatarName: "Luke Henderson",
          TitreCard: "Hakuna Mutuala",
          Price: "100",
        },
        {
          ImgCover: require("../assets/Img/CardImg.png"),
          ImgAvatar: require("../assets/Img/Avatar.png"),
          AvatarName: "Luke Henderson",

          TitreCard: "Cheery Bluury",
          Price: "100",
        },
        {
          ImgCover: require("../assets/Img/CardImg.png"),
          ImgAvatar: require("../assets/Img/Avatar.png"),
          AvatarName: "Luke Henderson",

          TitreCard: "Ron and Bon",
          Price: "100",
        },
        {
          ImgCover: require("../assets/Img/CardImg.png"),
          ImgAvatar: require("../assets/Img/Avatar.png"),
          AvatarName: "Luke Henderson",

          TitreCard: "Ron and Bon",
          Price: "100",
        },
      ],
      MinPrice:'',
      MaxPrice:'',
      AllProjet:[],
      AllCreator:[],
      OpenCardFilter :false

    };
  },
  components: {},
  methods: {
    BuyFunction() {
      console.log("Buy");
    },
        GetAlProjet(){
        axios.get(`${API_URL}projects`).then((response) => {
              this.AllProjet = response.data
        });
    },
    GetAllCreators(){
        axios.get(`${API_URL}projects`).then((response) => {
              let CreatorsHave=[]
              for(let i = 0 ; i <response.data.length ; i++){
                !(CreatorsHave.includes(response.data[i].creator)) ? 
                CreatorsHave.push(response.data[i].creator)
                : ''
              }
              this.AllCreator = CreatorsHave
        });
    },
  },
  mounted() {
    this.GetAlProjet()
    this.GetAllCreators()
  }
};
</script>



