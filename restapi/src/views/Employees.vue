<template>
  <div>
    <div class="row">
      <div class="col-lg-9 col-sm-9"></div>
      <div class="col-lg-3 col-sm-3">
        <button id="toggle" class="btn btn-outline-warning" @click="gridView()">
          <img src="https://img.icons8.com/dotty/25/000000/activity-grid-2.png" />
        </button>
        <button id="toggle" class="btn btn-outline-warning" @click="listView()">
          <img src="https://img.icons8.com/dotty/25/000000/ingredients-list.png" />
        </button>
      </div>
    </div>
    <div v-if="display == 'grid'">
      <div class="row">
        <div class="col-lg-4 col-sm-6" v-for="(employee,index) in employees" :key="employee.id">
          <div class="card" style="width: 95%">
            <div class="card-body">
              <img class="card-img-top" id="img-1" v-bind:src="employee.image" alt="Card image cap" />
              <h5 class="card-title">{{employee.name}}</h5>
              <p class="card-text">₹{{employee.price}}</p>
              <a class="btn btn-outline-warning" @click="addToCart(temployee,i)">
                <p>add to cart</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="check" v-if="display == 'list'">
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <table>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <tr v-for="(employee,index) in employees" :key="employee.id">
              <td>{{employee.name}}</td>
              <td>{{employee.username}}</td>
              <td>{{employee.email}}</td>
              <td>{{employee.phone}}</td>
              <td>{{employee.website}}</td>
              <td></td>
              <td>
                <button class="btn btn-outline-info"> 
                  <img src="https://img.icons8.com/pastel-glyph/14/000000/edit.png" />
                </button>
              </td>
              <td></td>
              <td>
                <button class="btn btn-outline-info">
                  <img src="https://img.icons8.com/metro/14/000000/delete-sign.png" />
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <form action="">
      <label for="">Name</label>
      <input type="text" v-model="name">
      <button v-on:click.prevent="post">add name</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: "grid",
      employees: null,
      name:null
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    listView() {
      this.display = "list";
    },
    gridView() {
      this.display = "grid";
    },
    loadData() {
      var vm = this;
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          this.employees = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    post(){
      axios.post("https://jsonplaceholder.typicode.com/users", {
      name: "abdan"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }
};
</script>

<style>
#check {
  overflow: scroll;
}
#toggle {
  width: 40px;
  margin-left: 5px;
}

</style>