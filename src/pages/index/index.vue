<template>
  <div class="container">
    <div class="message"  @click="clickHandle">{{msg}}</div>
    <swiper indicator-dots="false" 
  autoplay="false" interval="5000" duration="1000" style="text-align:center">
  <block v-for="(item,index) in imgUrls" :key="index">
    <swiper-item>
      <image  @click="onItemClick(index)" :src="item" class="slide-image" width="355" height="150"/>
    </swiper-item>
  </block>
</swiper>
<clickCounter :initNum="10" @clicknum="handleClicknum">
        <input type="checkbox" /> 禁用

</clickCounter>
  </div>
</template>
<script>
import clickCounter from '@/components/click-counter'

export default {
  data () {
    return {
      msg: 'Hello',
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
      // indicatorDots: false,
      // autoplay: false,
      // interval: 5000,
      // duration: 1000
    }
  },
  components: {clickCounter},
  methods: {
    clickHandle () {
      this.msg = 'Clicked!!!!!!'
    },
    onItemClick: function (event) {
      console.log('index' + '-----' + event)
    },
    handleClicknum (data) {
      console.log(data.num)
    }
  }
}
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>