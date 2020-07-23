<template>
  <div>
    <h3 style="text-align: center" class="keyTieleMsg">资金信息</h3>
    <table class="projectTable2">
      <tr>
        <td style="text-align: left;line-height: 16px;">预计截止当年底累计完成投资(万元)</td>
        <td>
          <el-input v-model="importParams.cumulativeInvestment" placeholder="请输入预计截止当年底累计完成投资"
                    type="number"></el-input>
        </td>
        <td>已落实贷款(万元)</td>
        <td>
          <el-input
            v-model="importParams.implementLoans"
            placeholder="请输入已落实贷款"
            type="number"
          ></el-input>
        </td>
      </tr>

      <tr>
        <td>已引入基金(万元)</td>
        <td>
          <el-input
            v-model="importParams.introducedFunds"
            placeholder="请输入已引入基金"
            type="number"
          ></el-input>
        </td>
      </tr>

      <tr>
        <td style="line-height: 20px">明年计划投资(万元)</td>
        <td>
          <el-input v-model="importParams.fixedInvest" placeholder="请输入计划投资" type="number"></el-input>
        </td>


        <td>计划贷款(万元)</td>
        <td>
          <el-input v-model="importParams.plannedLoan" placeholder="请输入当年计划贷款" type="number"></el-input>
        </td>
      </tr>

      <tr>
        <td>基金需求(万元)</td>
        <td>
          <el-input v-model="importParams.fundDemand" placeholder="请输入当年基金需求" type="number"></el-input>
        </td>
        <td>贷款银行</td>
        <td>
          <el-input v-model="importParams.loanBank" placeholder="请输入贷款银行"></el-input>
        </td>
      </tr>

      <tr>
        <td>企业财务联系人</td>
        <td>
          <el-input v-model="importParams.financing" placeholder="请输入企业财务联系人"></el-input>
        </td>
        <td>财务联系人电话</td>
        <td>
          <el-input v-model="importParams.financingPhone" placeholder="请输入企业财务联系人电话" type="number"></el-input>
        </td>
      </tr>

      <tr>
        <td style="text-align: left;line-height: 20px">是否愿意在新增大额融资银行开设项目结算账户</td>
        <td>
          <el-radio v-model="importParams.settlementAccount" :label=true>是</el-radio>
          <el-radio v-model="importParams.settlementAccount" :label=false>否</el-radio>
        </td>
        <td style="text-align: left;line-height: 20px">贷款银行信用等级代码</td>

        <td>
          <el-select
            v-model="importParams.qualityRating"
            placeholder="请选择贷款银行信用等级代码"
            style="width: 100%">
            <el-option
              v-for="item in insertProSkipData.xydjList"
              :key="item.dicDataCode"
              :label="item.name"
              :value="item.dicDataCode"
            ></el-option>
          </el-select>
        </td>
      </tr>
    </table>

    <h3 class="keyTieleMsg">预计本项目竣工投产后年新增经济效益</h3>
    <table class="projectTable2">
      <tr>
        <td>销售收入(万元)</td>
        <td>
          <el-input
            v-model="importParams.salesRevenue"
            placeholder="请输入销售收入"
            type="number"
          ></el-input>
        </td>
        <td>利润(万元)</td>
        <td>
          <el-input v-model="importParams.profit" placeholder="请输入内容利润" type="number"></el-input>
        </td>

      </tr>
      <tr>
        <td>税金(万元)</td>
        <td>
          <el-input v-model="importParams.taxes" placeholder="请输入税金" type="number"></el-input>
        </td>
        <td>创汇(万元)</td>
        <td>
          <el-input v-model="importParams.foreignEarn" placeholder="请输入创汇" type="number"></el-input>
        </td>
      </tr>

    </table>

    <h3 class="keyTieleMsg">产能信息</h3>
    <table class="projectTable2">
      <tr>

        <td>企业达到产能</td>
        <td>
          <el-input v-model="importParams.companyCapacity" placeholder="请输入企业达到产能"></el-input>
        </td>
        <td>项目新增产能</td>
        <td>
          <el-input v-model="importParams.companyAddCapacity" placeholder="请输入项目新增产能"></el-input>
        </td>
      </tr>
      <tr>
        <td style="text-align: left;line-height: 20px">项目投产后企业用电量(kw.h)</td>
        <td>
          <el-input v-model="importParams.projectElectricComm" placeholder="请输入项目投产后企业用电量"></el-input>
        </td>
        <td>该项目用电量(kw.h)</td>
        <td>
          <el-input
            v-model="importParams.projectElectric"
            placeholder="请输入该项目用电量(kw.h)"
            type="number"
          ></el-input>
        </td>
      </tr>
      <tr>
        <td style="text-align: left;line-height: 20px">项目用电成本比例占比</td>
        <td>
          <el-input
            v-model="importParams.electricCostRatio"
            placeholder="请输入项目用电成本比例占比"
            type="number"
          ></el-input>
        </td>
        <td>节能量(折标煤)</td>
        <td>
          <el-input v-model="importParams.energySaving" placeholder="请输入节能量" type="number"></el-input>
        </td>

      </tr>
    </table>

    <h3 class="keyTieleMsg">其他信息</h3>
    <table class="projectTable2">
      <tr>
        <td>所在园区</td>
        <td>
          <el-input v-model="importParams.itsLocation" placeholder="请输入所在园区"></el-input>
        </td>
        <td>项目技术水平</td>
        <td>
          <el-select
            v-model="importParams.proTechnicalLevel"
            placeholder="请选择项目技术水平"
            style="width: 100%"
          >
            <el-option
              v-for="item in insertProSkipData.projectLevelList"
              :key="item.dicDataCode"
              :label="item.name"
              :value="parseInt(item.dicDataCode)"
            ></el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td>预计新增就业人数</td>
        <td>
          <el-input v-model="importParams.estimateNewEmploy" placeholder="请输入预计新增就业人数"
                    type="number"></el-input>
        </td>
        <td>计划新增用地(亩)</td>
        <td>
          <el-input v-model="importParams.planAddLand" placeholder="请输入计划新增用地" type="number"></el-input>
        </td>
      </tr>
      <tr>
        <td>是否企业大集团项目</td>
        <td>
          <el-radio v-model="importParams.enterpriseGroup" :label="1">是</el-radio>
          <el-radio v-model="importParams.enterpriseGroup" :label="2">否</el-radio>
        </td>
        <td>是否招商引资项目</td>
        <td>
          <el-radio v-model="importParams.attractInvest" :label="1">是</el-radio>
          <el-radio v-model="importParams.attractInvest" :label="2">否</el-radio>
        </td>
      </tr>
      <tr>
        <td style="line-height: 16px">{{insertProSkipData.declareYear}}年工程<br/>形象进度目标</td>
        <td colspan="3">
          <el-input type="textarea" :rows=rows resize="none" v-model="importParams.scheduleTarget"
                    placeholder="请输入工程形象进度目标"></el-input>
        </td>
      </tr>

    </table>



    <!--提交按钮-->
    <div class="styleCreatSavaBtn">
      <el-button type="primary" size="small" @click="saveImportBtn" v-if="buttonControl.add_project_save ===true">保存</el-button>
      <el-button type="info" @click="$router.go(0)" size="small">刷新</el-button>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {important} from "../../../api" //保存重点信息
  export default {
    name: "AddProject_importInfo",
    data(){
      return {
        importParams:{
          // id:null,//基本id
          // projectId:null,//重点id

          cumulativeInvestment:"",//年底累计完成投资
          implementLoans:'',//已落实贷款
          introducedFunds:'',//已引入基金
          fixedInvest:'',//明年计划投资
          plannedLoan:'',//计划贷款
          fundDemand:'',//基金需求
          loanBank:'',//贷款银行
          financing:'',//企业财务联系人
          financingPhone:'',//财务联系人电话
          settlementAccount:'',//是否愿意在新增大额融资银行开设项目结算账户
          qualityRating:'',//贷款银行信用等级代码
          salesRevenue:'',//销售收入
          profit:'',//利润
          taxes:'',//税金
          foreignEarn:'',//创汇
          companyCapacity:'',//企业达到产能
          companyAddCapacity:'',//项目新增产能
          projectElectricComm:'',//项目投产后企业用电量
          projectElectric:'',//该项目用电量
          electricCostRatio:'',//项目用电成本比例占比
          energySaving:'',//节能量
          itsLocation:'',//所在园区
          proTechnicalLevel:'',//项目技术水平
          estimateNewEmploy:'',//预计新增就业人数
          planAddLand:'',//计划新增用地
          enterpriseGroup:'',//是否企业大集团项目
          attractInvest:'',//是否招商引资项目
          scheduleTarget:'',//工程形象进度目标
        },
        rows:'3',

      }
    },
    methods:{
      renderOneProjectDetail(){//修改时render重点信息

        // this.importParams = this.oneProjectInfo.data['keyProFunds']  //重点信息
         let rsImportantInfo = this.oneProjectInfo.data['keyProFunds']  //重点信息

        for(let i in this.importParams){//先过滤一下垃圾值再注入

          for(let j in rsImportantInfo){

            if(i === j){
              this.importParams[i] = rsImportantInfo[j]
            }

          }
        }

      },
      async saveImportBtn(){//保存重点信息

        // 主体信息
        const importantInfo = this.importParams

        //额外信息
        importantInfo.projectId = this.basicId//==基本信息id（额外增加）
        importantInfo.id = this.oneProjectInfo.data['keyProFunds'].projectId//==重点信息id（额外增加）

        const projectType = this.projectType.toString()//==项目类型（额外增加）
        importantInfo.projectType = projectType//把项目类型放进importantInfo对象里


        const rs = await important({importantInfo})
        if(rs.status === '0'){
          this.$message({
            message: "保存成功",
            type: "success"
          });
        }else{
          this.$message.error(rs.message);
        }

      },
    },

    watch:{
      oneProjectInfo:function (){//监听oneProjectInfo变化，来render一个项目的详情信息
        this.renderOneProjectDetail()
      }
    },
    computed:{
      ...mapState(['insertProSkipData','basicId','oneProjectInfo','projectType','companyId','projectType','buttonControl'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../assets/css/public.styl';
</style>

