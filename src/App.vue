<template>
  <router-view v-slot="{Component}">
    <!--    [Vue3中实现路由跳转的过渡动画(一)_vue3 路由切换动画_韩振方的博客-CSDN博客](https://blog.csdn.net/fang_my/article/details/125578420?spm=1001.2014.3001.5502)-->
    <!--    in-out：新元素先进行过渡，完成之后 当前元素过渡离开。-->
    <!--    out-in：当前元素先进行过渡，完成之后 新元素过渡进入。-->
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: .5s ease;
}
</style>