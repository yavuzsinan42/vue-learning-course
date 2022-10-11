<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                
                <hr>
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in">
                <router-view></router-view>
                </transition>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>

    </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
    components: {
        'app-header': Header
    }
}
</script>

<style>
    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 0.5s; 
    }
    .slide-leave{
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absoluted;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px)
        }
        to {
            transform: translateY(0px)
        }
    }
</style>
