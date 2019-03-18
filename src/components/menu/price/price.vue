<template>
  <div>
      <iframe :src='"/tzxsaas/hqpages/hqmanagement/sourcedatamanagement/operationdatamanagement/pricesystemmanagement.jsp?_s="+sessionId' class="iframeclass"></iframe>
  </div>
</template>
<script>
  import { mapGetters,mapMutations, mapActions  } from 'vuex'
  export default{
    data() {
      return {}
    },
    computed:{
        ...mapGetters([
            'sessionId',
        ])
    }
  } 
</script>
<style>
  .iframeclass{
    width:100%;
    min-height:550px;
    border:0;
  }
</style>