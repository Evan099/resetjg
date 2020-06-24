<template>
  <div>
    <el-button size="mini" @click="$store.commit('projectWriteStatusChange',0)">基本信息</el-button>
    <el-button size="mini" v-if="projectTypeArr.indexOf('1')> -1 " @click="$store.commit('projectWriteStatusChange',1)">重点信息</el-button>
    <el-button size="mini" v-if="projectTypeArr.indexOf('2')> -1 " @click="$store.commit('projectWriteStatusChange',2)">竣工信息</el-button>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
    export default {
      name: "AddProject_viewMod",
      data(){
        return{

        }
      },
      methods:{

      },
      computed:{
        ...mapState(['projectTypeArr','userInfo'])
      }
    }
</script>

<style scoped>

</style>
