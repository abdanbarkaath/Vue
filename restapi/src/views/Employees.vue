<template>
  <div>
    <div class="row" style="position: sticky;top: 100;">
      <div class="col-lg-9 col-sm-9"></div>
      <div class="col-lg-3 col-sm-3">
        <button id="toggle" class="btn btn-outline-warning" @click="gridView()">
          <img src="https://img.icons8.com/dotty/25/000000/activity-grid-2.png" />
        </button>
        <button id="toggle" class="btn btn-outline-warning" @click="listView()">
          <img src="https://img.icons8.com/dotty/25/000000/ingredients-list.png" />
        </button>
        <button
          id="toggle"
          type="button"
          class="btn btn-outline-warning"
          data-toggle="modal"
          data-target="#modal-add"
        >
          <img src="https://img.icons8.com/material-sharp/25/000000/add.png" />
        </button>
      </div>
    </div>

<!-- gridView -->
    <div v-if="display == 'grid'">
      <div class="row">
        <div class="col-lg-4 col-sm-6" v-for="(employee, index) in employees" :key="employee.id">
          <div class="card" style="width: 95%">
            <div class="card-body" style="text-align:left;font-weight:600;">
              <!-- <img class="card-img-top" id="img-1" v-bind:src="employee.image" alt="Card image cap" /> -->
              <p id="card-p">Name : {{employee.name}}</p>
              <p id="card-p">UserName : {{employee.username}}</p>
              <p id="card-p">Email : {{employee.email}}</p>
              <p id="card-p">Phone : {{employee.phone}}</p>
              <a
                class="btn btn-outline-info"
                data-placement="top" title="Update User"
                data-toggle="modal"
                data-target="#modal-add" v-on:click="run(employee)">
                <img src="https://img.icons8.com/pastel-glyph/14/000000/edit.png" alt />
              </a>
              <a class="btn btn-outline-info" data-toggle="tooltip" data-placement="top" title="Delete User" v-on:click="del(employee.id,index)">
                <img src="https://img.icons8.com/metro/14/000000/delete-sign.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  <!-- tableview -->
    <div id="check" v-if="display == 'list'">
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <table>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <tr v-for="(employee,index) in employees" :key="employee.id">
              <td>{{employee.name}}</td>
              <td>{{employee.username}}</td>
              <td>{{employee.email}}</td>
              <td>{{employee.phone}}</td>
              <td></td>
              <td>
                <button class="btn btn-outline-info" data-placement="top" title="Update User" data-toggle="modal" data-target="#modal-add"  v-on:click="run(employee)">
                  <img src="https://img.icons8.com/pastel-glyph/14/000000/edit.png" />
                </button>
              </td>
              <td></td>
              <td>
                <button class="btn btn-outline-info" data-toggle="tooltip" data-placement="top" title="Delete User" v-on:click="del(employee.id,index)">
                  <img src="https://img.icons8.com/metro/14/000000/delete-sign.png" />
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <!-- Add User -->
    <div
      id="modal-add"
      class="modal fade update"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm">
        <div class="modal-content" >
          <h1 v-if="!employee.name">Add User</h1>
          <h1 v-else>Update User</h1>
          <form>
            <label>Name :</label>
            <input type="text" v-model="employee.name" placeholder="Name"  />
            <br />
            <label>Username :</label>
            <input type="text" v-model="employee.username" placeholder="UserName" />
            <br />
            <label>Email :</label>
            <input type="text" v-model="employee.email" placeholder="Email" />
            <br />
            <label>Phone no :</label>
            <input type="text" v-model="employee.phone" placeholder="Phone no" />
            <br />
            <button v-if="!employee.name" type="button" class="btn btn-primary" v-on:click="postData()">
              <span>Add User</span>
            </button>
            <button v-if="employee.name" type="button" class="btn btn-primary" v-on:click="update(employee.id)">
              <span>Update User</span>
            </button>
            <button type="button" class="btn btn-primary" data-dismiss='modal' v-on:click="resetData()">
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: "grid",
      employees: null,
      employee: {
        name: null,
        username: null,
        email: null,
        phone: null
      }
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    resetData(){
      this.employee = {name: null,
        username: null,
        email: null,
        phone: null};
    },
    run(employee) {
      this.employee = employee;
    },
    listView() {
      this.display = "list";
    },
    gridView() {
      this.display = "grid";
    },

    loadData() {
      var vm = this;
      axios
        .get("http://localhost:3000/users")
        .then(response => {
          console.log(response.data[0]);
          this.employees = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    postData() {
      axios
        .post("http://localhost:3000/users", this.employee)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    update(i){
      axios
        .put("http://localhost:3000/users/"+i, this.employee)
        .then(function(response) {
          console.log(response);
          this.loadData();
          console.log(this.employee);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    del(emp,i) {
      axios
        .delete("http://localhost:3000/users/" + emp)
        .then(response => {
          console.log(this.employees);
          this.employees.splice(i, 1);
          console.log(this.employees);
        })
        .catch(error => {
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
  padding: 8px;
  margin-left: 5px;
}
</style>