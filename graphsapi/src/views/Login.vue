<template>
  <div id="back">
    <div class="login">
      <form id="forms">
        <div id="login-back">
          <img id="lock" src="https://img.icons8.com/ios/70/000000/lock.png" />
          <h2>Login</h2>
          <p>login to go to the dashboard</p>
        </div>
        <div class="form-group">
          <label id="lab"><img src="https://img.icons8.com/pastel-glyph/25/000000/user-male--v1.png"> Name</label>
          <input
            type="name"
            class="form-control"
            @keypress="enable"
            v-model="localUsers.name"
            placeholder="Name"
            required
          />
        </div>
        <div class="form-group">
          <label id="lab"><img src="https://img.icons8.com/material-sharp/20/000000/visible.png"> Password</label>
          <input
            type="password"
            class="form-control"
            @keypress="enable"
            v-model="localUsers.password"
            placeholder="Password"
            required
          />
        </div>

        <div class="form-group">
          <button
            id="login"
            type="submit"
            class="btn btn-primary btn-lg"
            :disabled="x==0"
            @click.prevent="check"
          > <img src="https://img.icons8.com/ios/20/000000/lock.png" /> Login</button>
        </div>
        <div class="hint-text">
          Want to create an account?
          <a href @click.prevent="go">Sign up here</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import VueRouter from "../router/index";
export default {
  data() {
    return {
      localUsers: {},
      x: 0
    };
  },
  methods: {
    enable() {
      if (this.localUsers.name && this.localUsers.password) {
        this.x = 1;
      } else {
        this.x = 0;
      }
    },
    go() {
      this.$router.push({ name: "signup" });
    },
    check() {
      var i = 0;
      var values = JSON.parse(localStorage.getItem("users"));
      // console.log(values);
      values.forEach(x => {
        if (
          x.name == this.localUsers.name &&
          x.password == this.localUsers.password
        ) {
          console.log("loged in");
          this.$router.push({ name: "dashboard" });
          i = 1;
        }
      });
      if (i == 0) {
        alert("wrong name or password");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#back {
  background: #3598dc;
  height: 625px;
  color: black;
  padding: 50px;
}

.login {
  width: 400px;
  margin: 0 auto;
  background: white;
  #forms {
    width: 100%;
    #login-back {
      background: #4bc48e;
      #lock {
        padding-right: 20px;
        float: right;
        padding-top: 25px;
      }
      h2 {
        text-align: left;
        padding-top: 35px;
        padding-left: 10px;
      }
      p {
        text-align: left;
        padding-left: 10px;
        padding-bottom: 20px;
        font-size: 12px;
      }
    }
    #login {
      width: 99%;
      padding: 0px;
      font-size: 20px;
      margin-top: 5px;
      height: 35px;
      background: #4bc467;
    }
  }
  .form-group {
    font-weight: 550;
    padding: 10px;
    #lab{
      float: left;
    }
  }
  a {
    color: #0275d8;
  }
}
</style>