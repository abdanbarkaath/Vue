<template>
    <b-nav class="main-nav" tabs align="left">
      <b-dropdown id="dropdown-1" text="Clothing" class="m-md-2 btn" variant="outline" >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item >Active action</b-dropdown-item>
        <b-dropdown-item >Disabled action</b-dropdown-item>
      </b-dropdown>
      <b-dropdown  id="dropdown-1" text="Electronics" class="m-md-2 btn"  variant="outline">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item >Active action</b-dropdown-item>
        <b-dropdown-item >Disabled action</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-1" text="Home applainces" class="m-md-2 btn"  variant="outline">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item >Active action</b-dropdown-item>
        <b-dropdown-item >Disabled action</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-1" text="Game Zone" class="m-md-2 btn"  variant="outline">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item >Active action</b-dropdown-item>
        <b-dropdown-item >Disabled action</b-dropdown-item>
      </b-dropdown>
    </b-nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

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