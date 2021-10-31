<template>
  <div class="footer">
      <div class="Footer_Content">
        <div class="LogoAndDescription">
            <ul>
                <li><router-link to="/"><img src="../assets/Img/Logo.png" alt=""></router-link> </li>
                <li><p>A marketplace that sells various types of work by professional designers and is paid with NFT tokens.</p></li>
            </ul>
        </div>
        <div class="AboutUs">
            <ul>
                <li><h6>About us</h6></li>
                <li><router-link to="/"> About Us</router-link></li>
                <li><router-link to="/"> Our Services</router-link></li>
                <li><router-link to="/"> How It Works</router-link></li>
                <li><router-link to="/"> Become a Partner</router-link></li>
            </ul>
        </div>
        <div class="Comunity">
            <ul>
                <li><h6>Community</h6></li>
                <li><router-link to="/"> Token</router-link></li>
                <li><router-link to="/"> Discussion</router-link></li>
                <li><router-link to="/"> Voting</router-link></li>
                <li><router-link to="/"> Blog</router-link></li>
                <li><router-link to="/"> Help Center</router-link></li>
            </ul>

        </div>
        <div class="SocielMedia">
            <ul>
                <li><h6>Social Media</h6></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
        </div>
      </div>
      <div class="Footer_Copyright">
          <p>@2020 OpenTheta. All rights reserved.</p>
      </div>

  </div>
</template>

<script>

export default {
  name: "features",
  data() {
    return {
    };
  },

  methods: {

  },
  mounted() {
  }
};
</script>
<style scoped>
.footer{
    background-image:url('../assets/Img/FooterBackground.png');
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
}
</style>


