<template>
    <div>
      <table class="projectTable2">
        <tr>
          <td style="line-height: 20px">{{insertProSkipData.declareYear-1}}年度产值</td>
          <td>
            <el-input
              v-model="completedParams.annualOutputValue"
              placeholder="请输入年度产值"
              type="number"
            ></el-input>
          </td>
          <td>{{insertProSkipData.declareYear}}年预产值</td>
          <td>
            <el-input
              v-model="completedParams.preProduction"
              placeholder="请输入年度预产值"
              type="number"
            ></el-input>
          </td>
        </tr>
        <tr>
          <td style="line-height: 16px">{{insertProSkipData.declareYear}}年一季度<br/>预计新增产值
          </td>
          <td>
            <el-input
              v-model="completedParams.quarterNewOutput"
              placeholder="请输入季度预产值"
              type="number"
            ></el-input>
          </td>
          <td style="line-height: 16px">
            {{insertProSkipData.declareYear}}年上半年<br/>预计新增产值
          </td>
          <td>
            <el-input
              v-model="completedParams.firstHalfYearOutput"
              placeholder="请输入年度预产值"
              type="number"
            ></el-input>
          </td>
        </tr>
      </table>



      <!--提交按钮-->
      <div class="styleCreatSavaBtn">
        <el-button type="primary" size="small" @click="saveCompleteBtn" v-if="buttonControl.add_project_save ===true">保存</el-button>
        <el-button type="info" @click="$router.go(0)" size="small">刷新</el-button>
      </div>

    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {saveComplete} from "../../../api" //保存竣工信息
  export default {
    name: "AddProject_completed",
    data(){
      return{
        completedParams:{
          annualOutputValue:null,//年度产值
          preProduction:null,//年预产值
          quarterNewOutput:null,//季度预产值
          firstHalfYearOutput:null,//预计新增产值
        }
      }
    },
    methods:{
      renderOneProjectDetail(){
        this.completedParams = this.oneProjectInfo.data['completionOutput']  //竣工信息
      },
      async saveCompleteBtn(){//保存信息

        // 主体信息
        const {annualOutputValue,preProduction,quarterNewOutput,firstHalfYearOutput} = this.completedParams


        //额外信息
        const projectId = this.basicId//==基本信息id（额外增加）
        const id = this.oneProjectInfo.data['keyProFunds'].projectId//==重点信息id（额外增加）
        const periods= this.insertProSkipData.declarePeriodsCode//==期数（额外增加）
        const projectType = this.projectType.toString()//==项目类型（额外增加）


        const rs = await saveComplete({annualOutputValue,preProduction,quarterNewOutput,firstHalfYearOutput,projectId,id,periods,projectType})

        if(rs.status === '0'){
          this.$message({
            message: "保存成功",
            type: "success"
          });
        }else{
          this.$message.error(rs.message);
        }

      }
    },
    watch:{
      oneProjectInfo:function () {//监听basicId变化，来render一个项目的详情信息
        return this.renderOneProjectDetail()
      }
    },
    computed:{
      ...mapState(['insertProSkipData','basicId','oneProjectInfo','projectType','buttonControl'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../assets/css/public.styl';
</style>
