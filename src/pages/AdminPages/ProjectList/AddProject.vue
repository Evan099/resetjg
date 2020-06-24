<template>
    <div class="creatProject fontSize14" id="creatProject">
      <add-project_chose-condition></add-project_chose-condition>
      <add-project_view-mod style="margin-top: 20px"></add-project_view-mod>
      <add-project_base-info v-show="projectWriteStatus === 0 "></add-project_base-info>
      <add-project_import-info v-show="projectWriteStatus === 1 "></add-project_import-info>
      <add-project_completed v-show="projectWriteStatus === 2 "></add-project_completed>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

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
      computed:{
        ...mapState(['projectWriteStatus'])
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/css/public.styl';
</style>
