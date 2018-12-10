<template>
    <div>
      <div class="headBox">
        <div id="head"> 
          <div class="back" @click="$router.go(-1)">&lt;</div>
          {{title}}
        </div>
      </div>
        <router-view :title.sync="title"></router-view>
    </div>
</template>

<script>
export default {
  data(){
    return{
      title:"华语男歌手"
    }
  },
  created(){
    this.title="华语男歌手";
  },
  watch:{
    $route(to,from){
      if(to.path=="/"){
        this.title="华语男歌手";
      }
    }
  }
}
</script>

<style>

</style>
