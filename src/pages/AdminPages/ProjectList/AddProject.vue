<template>
    <div class="creatProject" style="padding:0 20px 20px 20px">
      <add-project_chose-condition></add-project_chose-condition>
      <add-project_view-mod style="margin: 20px 0"></add-project_view-mod>
      <add-project_base-info v-show="projectWriteStatus === '0' "></add-project_base-info>
      <add-project_import-info v-show="projectWriteStatus === '2' && projectType.indexOf('2')> -1"></add-project_import-info>
      <add-project_completed v-show="projectWriteStatus === '1' && projectType.indexOf('1')> -1 "></add-project_completed>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {homeMenu} from '../../../api'
    import AddProject_viewMod from "./AddProject_viewMod";
    import AddProject_baseInfo from "./AddProject_baseInfo";
    import AddProject_importInfo from "./AddProject_importInfo";
    import AddProject_completed from "./AddProject_completed";
    import AddProject_choseCondition from "./AddProject_choseCondition";
    export default {
      name: "AddProject",
      components: {
        AddProject_choseCondition,
        AddProject_completed,
        AddProject_baseInfo, AddProject_importInfo , AddProject_viewMod},
      data(){
        return{

        }
      },
      methods:{
        changeTabMod(){//监听projectType变化，如果取消勾选，则跳转到基本信息填写模块界面,避免出现空白界面

          if(this.projectWriteStatus === '2' && this.projectType.indexOf('2')> -1){

          }else if(this.projectWriteStatus === '1' && this.projectType.indexOf('1')> -1){

          }else{
            this.$store.commit('projectWriteStatusChange','0')//跳转到基本界面
          }
        }
      },
      watch:{
        projectType:function () {//监听projectType变化，如果取消勾选，则跳转到基本信息填写模块界面
          this.changeTabMod()
        }
      },
      computed:{
        ...mapState(['projectWriteStatus','projectType'])
      },
      async mounted() {
        //按钮权限总级控制
        const resultMenuList = await homeMenu({})
        sessionStorage.setItem("buttonList", JSON.stringify(resultMenuList.data.buttonList))  //存取按钮权限list
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/css/public.styl';
</style>
