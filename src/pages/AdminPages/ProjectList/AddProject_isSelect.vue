<template>
    <div>
      申报年度：<input type="text" v-model="name"></input>
      所属市州：<input type="text"></input>
      所属区县：<input type="text"></input>
      申报状态：<input type="text"></input>
      项目类型:
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="1"></el-checkbox>
        <el-checkbox label="2"></el-checkbox>
      </el-checkbox-group>

      <h1>name:{{$store.state.name}}</h1>
      <h1>name:{{name}}</h1>
      <h1>num:{{num}}</h1>


    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      name: "AddProject_isSelect",
      data () {
        return {
          checkList: ['1'],
        };
      },
      methods:{


      },
      computed:{
        ...mapState(['name','num'])
      }

    }
</script>

<style scoped>

</style>
