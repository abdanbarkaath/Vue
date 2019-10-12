<template>
  <div>
      <ul>
          <li v-for="(employee,i) in employees" :key="employee.id">
              {{employees[i].name}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            employees:null
        }
    },
    mounted(){
        this.loadData();
    },
    methods:{
        loadData(){
            var vm = this;
            axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            vm.employees = response.data
          })
        .catch((error)=>{
            console.log(error);
        })
        }
    }

}
</script>

<style>

</style>