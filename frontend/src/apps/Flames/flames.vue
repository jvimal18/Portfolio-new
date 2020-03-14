<template>
  <div id="main">
    <div id="quotes">
      <h2>
        Invent
        <span class="highlight">Relationship</span> In You!!!
      </h2>
      <p>“People are lonely because they build walls instead of bridges.”</p>
      <p class="author">— Joseph F. Newton Men</p>
    </div>

    <div class="form" id="form">
      <h1 class="highlight">Details</h1>
      <input type="text" id="male" placeholder="Name" />
      <input type="text" id="female" placeholder="Name" />
      <div class="button zoom" id="submit" @click="checkResult">Invent</div>
      <div id="result" class="zoom" v-if="result">{{result}}</div>
      <div id="Photocredits">
        <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@kellysikkema?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Kelly Sikkema"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Background Credits: Kelly Sikkema</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: ""
    };
  },
  methods: {
    checkResult() {
      let vm = this
      const male = this.$el.querySelector("#male").value;
      const female = this.$el.querySelector("#female").value;

      console.log(male, female)
      if (!male) {
        alert("Please enter your name ");
      } else if (!female) {
        alert("Please enter your name ");
      } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            vm.result = this.responseText
          }
        };
        xhttp.open(
          "GET",
          `/flames?male=${male}&female=${female}`,
          true
        );
        xhttp.send();
      }
    }
  },
};
</script>

<style lang="css" scoped>
#flamesApp {
  height: calc(100vh - 300px);
}
.highlight {
  color: tomato;
}

.button {
  width: 25%;
  min-width: 6rem;
  margin: auto;
  margin-top: 20px;
  text-align: center;
  color: aliceblue;
  opacity: 1;
  border-color: tomato;
  background-color: tomato;
  border-radius: 100px;
}

#Photocredits {
  color:white;
  position: absolute;
  bottom:0;
  left: 50%;
  transform: translateX(-50%);
}

#main {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 100px 3em;
  opacity: 0.75;
  position: relative;
  background: url("../../assets/imgs/flames-bg2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#quotes,
#form {
  margin: 2rem;
}

#quotes {
  font-size: 20px;
  min-width: 250px;
}

#quotes h2 {
  color: white;
  line-height: 6rem;
  font-size: 4rem;
  text-align: center;
  margin: 2rem;
}

section div#quotes p {
  color: white;
  font-size: 20px;
}


input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid tomato;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
}

.button:hover {
  background-color: #ccc;
  color: black;
  cursor: pointer;
}

.zoom:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  #main {
    justify-content: center;
  }
}
</style>