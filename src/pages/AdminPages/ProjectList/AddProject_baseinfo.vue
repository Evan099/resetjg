<template>
  <div>
    <el-select v-model="selectValue" placeholder="请选择" @change="getValue">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <button type="button" @click="addOne">1s后+1</button>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
    export default {
      name: "AddProject_baseinfo",
      data(){
          return{
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            selectValue: ''
          }
      },
      methods:{
        ...mapMutations(['changeSelect','selectValue']),
        getValue(){
          const selectValue = this.selectValue

         // this.$store.state.name = selectValue//不能直接去修改state中的值

          // this.$store.commit('changeSelect',selectValue)//第一种方式

          this.changeSelect(selectValue)//第二种方式

        },
        addOne(){//异步操作
          this.$store.dispatch('addOne',5)
        }
      }
    }
</script>

<style scoped>

</style>
