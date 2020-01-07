<template>
  <b-nav class="main-nav" tabs align="left">
    <div @mouseover="onOver" @mouseleave="onLeave">
      <b-dropdown
        id="dropdown-1"
        text="Dropdown Button"
        ref="dropdown"
        class="m-md-2 btn"
      >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
    </div>
    <div @mouseover="onOver" @mouseleave="onLeave">
      <b-dropdown
        id="dropdown-2"
        text="Dropdown Button"
        ref="dropdown"
        class="m-md-2 btn"
      >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
    </div>
    <div @mouseover="onOver" @mouseleave="onLeave">
      <b-dropdown
        id="dropdown-3"
        text="Dropdown Button"
        ref="dropdown"
        class="m-md-2 btn"
      >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
    </div>
    <div @mouseover="onOver" @mouseleave="onLeave">
      <b-dropdown
        id="dropdown-4"
        text="Dropdown Button"
        ref="dropdown"
        class="m-md-2 btn"
      >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
    </div>
  </b-nav>
</template>

<script>
export default {
  methods: {
    mouse() {
      console.log("hello");
    },
    onOver() {
      this.$refs.dropdown.visible = true;
      console.log(this.$refs.dropdown.id);
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  background: white;
  color: black;
  border: none;
}
.main-nav {
  background: white;
  padding-left: 30px;
}
span {
  color: white;
}
span:focus,
span:hover {
  color: black;
}

.item {
  background: black;
  color: white;
}
.item:hover {
  a {
    color: black;
  }
  background: white;
  color: black;
}
</style>
