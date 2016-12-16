<template>
  <div id="app">
    <div id="main">
      <lh-top-bar></lh-top-bar>
      <lh-header></lh-header>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <div id="footer">
      <lh-footer></lh-footer>
    </div>
    <lh-side-bar></lh-side-bar>
  </div>
</template>

<style>
  #app {
    height: 100%;
  }
  #main {
    padding-bottom: 190px;
    overflow: hidden;
    min-height: 100%;
  }
  #footer {
    margin-top: -205px;
  }
</style>
