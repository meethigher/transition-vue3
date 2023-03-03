<template>
  <div class="home">
    <h1>This is a home page</h1>
    <router-link to="/about">about</router-link>
    <button @click="about">about</button>
    <div class="home-view">
      <router-view v-slot="{Component}">
        <!--    [Vue3中实现路由跳转的过渡动画(一)_vue3 路由切换动画_韩振方的博客-CSDN博客](https://blog.csdn.net/fang_my/article/details/125578420?spm=1001.2014.3001.5502)-->
        <!--    in-out：新元素先进行过渡，完成之后 当前元素过渡离开。-->
        <!--    out-in：当前元素先进行过渡，完成之后 新元素过渡进入。-->
        <transition name="view-fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <router-link to="/view1">view1</router-link>
    <router-link to="/view2">view2</router-link>
    <router-link to="/">home</router-link>
  </div>
</template>
<script>
export default {
  methods: {
    about() {
      this.$router.push("/about");
    }
  }
}
</script>
<style scoped>
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: orange;
}

.home-view {
  position: absolute;
  width: 300px;
  height: 300px;
  bottom: 0;
  right: 0;
}

.view-fade-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.view-fade-enter-to {
  opacity: 1;
}

.view-fade-enter-active {
  transition: 2s ease;
}
</style>
