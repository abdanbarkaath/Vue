<template>
  <div id="back">
    <div class="login">
      <form id="forms">
        <div id="login-back">
          <img id="lock" src="https://img.icons8.com/ios/70/000000/lock.png" />
          <div id="login-dash">
            <h2>Login</h2>
            <p>login to go to the dashboard</p>
          </div>
        </div>
        <div class="form-group">
          <label id="lab">
            <img src="https://img.icons8.com/pastel-glyph/25/000000/user-male--v1.png" /> Name
          </label>
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
          <label id="lab">
            <img src="https://img.icons8.com/material-sharp/20/000000/visible.png" /> Password
          </label>
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
          >
            <img src="https://img.icons8.com/ios/20/000000/lock.png" /> Login
          </button>
        </div>
        <hr />
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
          this.$toastr("add", {
            title:  this.localUsers.name+" has Logged in",
            msg: "",
            clickClose: true,
            timeout: 3000,
            position: "toast-top-center",
            type: "success"
          });
          this.$router.push({ name: "dashboard" });
          i = 1;
        }
      });
      if (i == 0) {
        this.$toastr("add", {
          title: "Check username and password",
          msg: "",
          clickClose: true,
          timeout: 3000,
          position: "toast-top-center",
          type: "error"
        });
        // alert("wrong name or password");
      }
    }
  },
  created() {
    //  this.$toasted.show('Hello, I am from ItSolutionStuff.com')
    // this.$toastr("add", {
    //   title: "Logging in",
    //   msg: "",
    //   clickClose: true,
    //   timeout: 3000,
    //   position: "toast-top-center",
    //   type: "success"
    // });
    // console.log("hello");
  }
};
</script>

<style lang="scss" scoped>
#back {
  // background: #3598dc;
  background-image: url("data:image/jpeg;base64,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");
  background-repeat: no-repeat;
  background-size: cover;
  height: 625px;
  color: white;
  padding: 50px;
}

.login {
  width: 400px;
  margin: 0 auto;
  background: white;
  #forms {
    width: 100%;
    height: 500px;
    #login-back {
      background: #4bc48e;
      padding-top: 25px;
      padding-bottom: 10px;
      padding-left: 25px;
      padding-right: 30px;
      margin-bottom: 20px;
      #lock {
        padding-right: 40px;
        float: right;
        // padding-top: 25px;
      }
      h2 {
        text-align: left;
        padding-top: 10px;
        // padding-left: 10px;
        font-size: 25px;
      }
      p {
        text-align: left;
        // padding-left: 10px;
        // padding-bottom: 20px;
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
    padding-left: 25px;
    padding-right: 25px;
    #lab {
      float: left;
      color: black;
    }
  }
  a {
    color: #0275d8;
  }
  .hint-text {
    color: black;
    padding-top: 10px;
    float: right;
    padding-right: 25px;
    font-size: 13px;
  }
}
</style>