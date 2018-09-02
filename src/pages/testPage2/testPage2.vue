<template>
<div>
  <button  @click="hanleDecrement">-</button>
   <div>{{count}}</div>
    <button @click="hanleIncrement">+</button>
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
     hanleDecrement () {
       globalStore.commit('jianCount')
     },
     hanleIncrement () {
       globalStore.commit('jiaCount')
     }
   }
 
}
</script>

<style scoped>
 
</style>