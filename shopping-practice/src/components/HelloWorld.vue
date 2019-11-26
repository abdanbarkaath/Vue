<template>
<div>
  <nav class="navbar navbar-expand sticky-top topnav">
      <a class="navbar-brand" routerLink="mobiles">
        <img src="https://img.icons8.com/dusk/40/000000/combo-chart.png" />
        <span>GraphApi</span>
      </a>
      <div class="navbar-collapse collapse">
        <ul class="navbar-nav pt-1">
          <li>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control ml-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>
          <li class="nav-item"></li>
        </ul>
      </div>
      <div class="dropdown" id="drp-down">
        <a
          class="btn btn btn-outline-success dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Options</a>
        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenuLink"
          id="items"
          style="min-width:100px"
        >
          <a class="dropdown-item" style="width:80px">
            <router-link to="/weather" style="width:80px">Weather</router-link>
          </a>
        </div>
      </div>
    </nav>
    <div class="sidenav">
      <a href>
        <img src="https://img.icons8.com/officel/40/000000/home.png" />
      </a>
      <router-link to="/weather">
        <img src="https://img.icons8.com/dusk/40/000000/cloud.png" />
      </router-link>
      <a href>
        <img src="https://img.icons8.com/dusk/40/000000/innovation.png" />
      </a>
      <a href>
        <img src="https://img.icons8.com/dusk/40/000000/contacts.png" />
      </a>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#items {
  width: 80px;
}
.extend {
  width: 35rem;
  height: 500px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 70px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #7952b3; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}
/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 1px;
  text-decoration: none;
  margin-top: 40px;
  font-size: 15px;
  font-weight: 550;
  color: white;
  display: block;
}
/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}
#main {
  margin-left: 70px;
  background: #f0f1f7;
}
@media screen and (max-width: 496px) {
  .extend {
    width: 18rem;
  }
  .sidenav {
    width: 70px;
  }
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
  #main {
    margin-left: 70px;
  }
}
@media screen and (max-width: 966px) {
  .sidenav {
    width: 100px;
  }
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
  #main {
    margin-left: 70px;
  }
}
// NAVBAR ========================================
.topnav {
  span {
    color: #7952b3;
  }
  position: sticky;
  background: black;
  color: white;
  padding-right: 40px;
  padding-left: 25px;
  margin-left: 70px;
  background: white;
}
span {
  color: black;
}
#cart {
  padding-left: 5px;
  display: inline;
}

</style>