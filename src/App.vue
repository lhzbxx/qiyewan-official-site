<template>
    <div id="app">
        <lh-top-bar></lh-top-bar>
        <lh-header></lh-header>
        <transition name="fade">
            <router-view></router-view>
        </transition>
        <lh-footer></lh-footer>
    </div>
</template>