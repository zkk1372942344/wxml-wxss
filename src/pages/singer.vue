<template>
  <div>
      <ul class="list">
          <li v-for="item in artists" @click="$router.push('/songs/'+item.id+'/'+item.name)">
              <img :src="item.picUrl" alt="">
              <span>{{item.name}}</span>
          </li>
      </ul>
      <!-- 返回顶部组件 -->
      <toTop></toTop>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
        artists:[]
    }
  },
  created(){
      this.$loading.show("正在加载歌手列表");
      this.$ajax("http://musicapi.leanapp.cn/artist/list?cat=1001").then((res)=>{
          this.artists=JSON.parse(res).artists//请求歌手列表数据
          this.$loading.hide();
      })
  },
  methods: {}
}
</script>

<style>
    *{
        margin:0;
        padding:0
    }
    li{
        list-style:none
    }
    .list li{
        height:90px;
        line-height:90px;
        background:#f6f6f6;
        margin-top:2px;
        cursor:pointer
        
    }
    .list span{
        display:inline-block;
        vertical-align:middle;
        padding-left:50px
    }
    .list img{
        width: 80px;
        height: 80px;
        background:#666;
        border-radius:5px;
        display:inline-block;
        vertical-align:middle;
        margin-left:5px
    }
</style>
