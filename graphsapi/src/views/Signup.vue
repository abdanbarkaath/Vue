<template>
  <div id="back">
    <div class="signup">
      <form id="forms">
        <div id="sign-back">
          <img id="pen" src="https://img.icons8.com/ios/70/000000/edit.png" />
          <h2>Sign Up</h2>
          <p style="font-size:12px">Please fill in this form to create an account!</p>
        </div>
        <!-- <hr /> -->
        <div class="form-group">
          <label id="lab"><img src="https://img.icons8.com/pastel-glyph/25/000000/user-male--v1.png"> Signup as</label>
          <input
            type="name"
            @keydown="enable"
            class="form-control"
            v-model="localUsers.name"
            placeholder="Name"
            required
          />
        </div>
        <div class="form-group">
          <label id="lab"><img src="https://img.icons8.com/ios-glyphs/20/000000/email.png"> Email</label>
          <input
            type="email"
            @keydown="enable"
            class="form-control"
            v-model="localUsers.email"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <label id="lab"><img src="https://img.icons8.com/material-sharp/20/000000/number-pad.png"> Phone Number</label>
          <input
            type="number"
            @keydown="enable"
            class="form-control"
            v-model="localUsers.number"
            placeholder="Number"
            required
          />
        </div>
        <div class="form-group">
          <label id="lab"><img src="https://img.icons8.com/material-sharp/20/000000/visible.png"> Password</label>
          <input
            type="password"
            @keydown="enable"
            class="form-control"
            v-model="localUsers.password"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group">
          <label id="lab"> <img src="https://img.icons8.com/material-sharp/20/000000/visible.png"> Repeat Password</label>
          <input
            type="password"
            @keydown="enable"
            class="form-control"
            v-model="localUsers.passwordagain"
            placeholder="Password"
            required
          />
        </div>

        <div class="form-group">
          <button id="sign-up" class="btn btn-primary btn-lg" :disabled="x==0" @click.prevent="add">
            <img src="https://img.icons8.com/ios/20/000000/edit.png" /> Sign Up
          </button>
        </div>
        <div class="hint-text">
          Already have an account?
          <a href @click.prevent="go">Login here</a>
        </div>
      </form>
    </div>

    <!-- <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div> -->
  </div>
</template>

<script>
import Vuerouter from "../router/index";
import axios from "axios";
export default {
  data() {
    return {
      x: 0,
      localUsers: {},
      check: {
        name: /^[A-Za-z.0-9]{3,30}$/,
        number: /^([0-9]{10})$/g,
        email: /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/
      }
    };
  },
  methods: {
    enable() {
      if (
        this.localUsers.name &&
        this.localUsers.email &&
        this.localUsers.number &&
        this.localUsers.password &&
        this.localUsers.passwordagain
      ) {
        console.log(this.x);
        this.x = 1;
      } else {
        this.x = 0;
      }
    },
    go() {
      this.$router.push({ name: "login" });
    },
    add() {
      var i = 1;
      var serialize;
      var users = JSON.parse(localStorage.getItem("users")) || [];
      if (this.check.name.test(this.localUsers.name)) {
        console.log("correct name");
        i = 1;
        if (this.check.email.test(this.localUsers.email)) {
          console.log("correct email");
          i = 1;
          if (this.check.number.test(this.localUsers.number)) {
            console.log("correct number");
            i = 1;
            users.forEach(x => {
              if (
                x.name == this.localUsers.name ||
                x.email == this.localUsers.email
              ) {
                alert("user already exists");
                i = 0;
              } else {
              }
            });
            if (this.localUsers.password !== this.localUsers.passwordagain) {
              alert("Passwords dont match");
              i = 0;
            } else {
              if (i == 1) {
                users.push(this.localUsers);
                serialize = JSON.stringify(users);
                localStorage.setItem("users", serialize);
                this.$router.push({ name: "login" });
              }
            }
          } else {
            alert("wrong number");
            console.log(this.localUsers.number);
          }
        } else {
          alert("wrong email");
        }
      } else {
        alert("wrong user name");
      }
    },
    get() {
      // x = JSON.parse(x);
      var x = localStorage.getItem("users");
      console.log(x + "id");
    }
  },
  created() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8cce7edd41e14cec15c5a85b3ea142c8"
      )
      .then(response => {
        this.val = response.data;
        // console.log(response.data);
      });
  }
};
</script>

<style lang="scss" scoped>
#back {
  background: #3598dc;
  color: black;
  padding: 10px;
  height: 625px;
  #sign-back {
    text-align: left;
    height: 100px;
    margin-bottom: 10px;
    color: white;
    padding: 15px;
    background: red;
    #pen {
      padding-right: 10px;
      float: right;
    }
  }
  #lab {
    float: left;
    margin-bottom: 1px;
  }
  .signup {
    width: 400px;
    margin: 0 auto;
    background: white;
    #forms {
      width: 100%;
      height: 605px;
    }
    .form-group {
      padding: 0 10px 0 10px;
      margin-bottom: 15px;
      font-weight: 550;
    }
    a {
      color: #0275d8;
    }
    #sign-up {
      width: 99%;
      padding: 0px;
      font-size: 20px;
      margin-top: 15px;
      height: 35px;
    }
  }
}
</style>










// <div id="forms">
//       <form >
//         <div class="form-group">
//           <label for="email">Email address:</label>
//           <input type="email" required class="form-control" v-model="localUsers.name" />
//         </div>
//         <div class="form-group">
//           <label for="pwd">Password:</label>
//           <input type="password" required class="form-control" v-model="localUsers.password" />
//         </div>
//         <div class="form-group">
//           <label for="pwd">Number</label>
//           <input type="number" class="form-control" v-model="localUsers.phone" />
//         </div>
//         <button type="submit" class="btn btn-primary" @click="add">Submit</button>
//         <button type="submit" class="btn btn-primary" @click="get">Get Item</button>
//       </form>
//     </div>
