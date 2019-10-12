<template>
  <div>
    <!-- <p>where is taj mahal located</p> -->
    <ul>
      <li @click="run" v-for="ques in questions" :key="ques.id">
        <p>{{ques.name}}</p>
        <p v-bind:class="{red:isred}">1.{{ques.opt1}}</p>
        <p v-bind:class="{green:isgreen}">2.{{ques.opt2}}</p>
        <p v-bind:class="{red:isred}">3.{{ques.opt3}}</p>
        <p v-bind:class="{red:isred}">4.{{ques.opt4}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          name: "where is taj mahal located",
          opt1: "Delhi",
          opt2: "Agra",
          opt3: "Hyderabad",
          opt4: "Chennai"
        }
      ],
      isgreen: false,
      isred: false
    };
  },
  methods: {
    run(e) { 
      if (e.target.textContent == "2.Agra") {
        this.isgreen = true;
      } else {
        this.isred = true;
      }
      console.log(e.target.textContent);
    }
  }
};
</script>

<style>
.red {
  color: red;
}
.green {
  color: green;
}
</style>