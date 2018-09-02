<template>
  <div class="click-counter">
    <div class="counter-num">次数：{{num}}</div>
    <button class="counter-btn" @click="handleClick">点我呀！</button>
    <button class="counter-reset-btn" @click="handleResetClick">清零</button>
    <slot></slot><!-- 使用插槽,子组件挖了个坑,父组件去填（填入的是界面） -->
  </div>
</template>

<script>

export default {
  props: {// 父组件传过来的值的集合（父传子）
    initNum: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      num: this.initNum
    }
  },

  methods: {
    handleClick () {
      this.num += 1
      this.$emit('clicknum', {// 父组件可以监听到这个方法(子传父)
        num: this.num
      })
    },
    handleResetClick () {
      this.num = 0
    }
  }
}
</script>

<style>
.click-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  background-color: #ffffff;
  padding: 10px;
}

.counter-num,
.counter-btn,
.counter-reset-btn {
  flex: 1;
  margin: 3px;
}
</style>

