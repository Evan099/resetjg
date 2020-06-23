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
  </div>
</template>

<script>
    import store from "../../../store";

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
        getValue(){
          const selectValue = this.selectValue

         this.$store.dispatch('name',selectValue)

        }
      }
    }
</script>

<style scoped>

</style>
