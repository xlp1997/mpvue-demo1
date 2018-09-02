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
 
   }
}
</script>

<style scoped>
 
</style>