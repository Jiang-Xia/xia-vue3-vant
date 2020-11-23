<template>
  <div class="layout-container">
    <transition name="transition-slider" :key="key">
      <router-view />
    </transition>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item name="index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="example" icon="points">Example</van-tabbar-item>
      <van-tabbar-item name="other" icon="apps-o">其他</van-tabbar-item>
      <van-tabbar-item name="my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: ''
    }
  },
  watch: {
    $route: {
      handler: function(n) {
        this.active = n.name
      }
    }
  },
  computed:{
    key(){
      return this.$route.name
    }
  },
  created() {
    this.active = this.$route.name
  },
  methods: {
    onChange(name) {
      this.$router.push({ name: name })
    }
  }
}
</script>
<style lang="scss" scope>
.layout-container{
    height: 100%;
    padding: 50px 0;
}
</style>
