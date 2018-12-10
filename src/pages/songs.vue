<template>
  <div>
        <ol class="list">
            <li v-for="item in songList">
                <img :src="item.al.picUrl" alt="">
                <span>{{item.al.name}}</span>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
  name: '',
  created(){
      this.$emit("update:title",this.$route.params.name+"的单曲")
      this.$loading.show();
      this.$ajax("http://musicapi.leanapp.cn/artists?id="+this.$route.params.id).then((res)=>{
          this.songList=JSON.parse(res).hotSongs;
          this.$loading.hide();
      })
  },
  data () {
    return {
        songList:[]
    }
  },

  methods: {}
}
</script>

<style rel='stylesheet/stylus'>

</style>
