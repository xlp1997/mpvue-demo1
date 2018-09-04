<template>
   <div>{{count}}

            <a href="/pages/testPage2/main">进入计数器页面</a>

   </div>

</template>
<script>
import globalStore from '../../stores/global-store'

export default {
  data () {
    return {
    }
  },
  computed: {// 计算属性（直接在data赋值没用）
    count () {
      return globalStore.state.count
    }
  },
  methods: {

  },
  mounted () {
    this.$fly.request({
      method: 'post', // post/get 请求方式
      url: '/mms/country/queryValidZoneListForMallHome',
      body: { page: 1 }
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
</style>