<template>
  <div>
    <button  @click="$store.commit('projectWriteStatusChange','0')"  class="styleBtn" :class="{on:projectWriteStatus === '0'}">项目基本信息</button>
    <button  @click="$store.commit('projectWriteStatusChange','2')" v-show="projectType.indexOf('2')> -1 " class="styleBtn" :class="{on:projectWriteStatus === '2'}">重点工业技术改造项目信息
    </button>
    <button  @click="$store.commit('projectWriteStatusChange','1')" v-show="projectType.indexOf('1')> -1 " class="styleBtn" :class="{on:projectWriteStatus === '1'}">竣工产值预测项目信息
    </button>
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

      computed:{
        ...mapState(['userInfo','projectWriteStatus']),
        projectType:{
          get(){
            return this.$store.state.projectType
          },
          set(value){
            this.$store.commit('projectTypeChange',value)
          }
        },
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .styleBtn {
    width: auto;
    padding: 6px 20px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #6992BD;
    background: #D0E1F5;
  }
  .on {
    color: white;
    background: #84A3C1;
  }
</style>
