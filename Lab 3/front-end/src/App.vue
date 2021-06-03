<template>
  <div id="nav">
    <div class="d-flex bd-highlight mb-3 justify-content-center">
      <router-link to="/" class="btn btn-success p-2 bd-highlight"
        >Simple calculator!</router-link
      >
      <router-link to="/complex" class="btn btn-success p-2 bd-highlight ms-2"
        >Calculator For Programmer!</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style>
</style>
