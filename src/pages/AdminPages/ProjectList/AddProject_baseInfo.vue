<template>
  <div>
    <div class="basicInfo">
      <table class="projectTable2">
        <tr>
          <td>企业名称</td>
          <td>
            <el-select
              v-model="baseParams.companyId"
              filterable
              remote
              reserve-keyword
              clearable
              placeholder="请选择企业"
              style="width: 100%"
              :remote-method="getTargetCompany"
              @change="$store.commit('companyIdChange',baseParams.companyId)"
            >
              <el-option
                v-for="item in listCompanyBd.data.company"
                :key="item.id"
                :label="item.companyName"
                :value="item.id"
              ></el-option>
            </el-select>
          </td>
          <td>项目名称</td>
          <td>
            <el-input
              v-model="baseParams.projectName"
              placeholder="请输入项目名称(60字以内)"
              maxlength="60"
              style="width: 100%"
            ></el-input>
          </td>
        </tr>

        <tr v-if="userInfo.userType ==='GL' ">
          <td>可选项目*</td>
          <td>
            <el-select
              v-model="choseProjectId"
              placeholder="请选择项目"
              style="width: 100%"
              @change="loadProjectInfoList()"
              clearable
            >
              <el-option
                v-for="item in companyAllProjectList"
                :key="item.id"
                :label="item.projectName"
                :value="item.id"
              ></el-option>
            </el-select>
          </td>
        </tr>

        <tr>
          <td>项目主要建设内容</td>
          <td colspan="4">
            <el-input
              type="textarea"
              :autosize="textareaObj"
              placeholder="请输入建设内容"
              v-model="baseParams.projectContent"
              resize="none"
            ></el-input>
          </td>
        </tr>

        <tr>
          <td>总投资(万元)</td>
          <td>
            <el-input
              v-model="baseParams.totalInvest"
              placeholder="请输入总投资额"
              type="number"
            ></el-input>
          </td>
          <td>固定资产投资(万元)</td>
          <td>
            <el-input
              v-model="baseParams.fixedInvest"
              placeholder="请输入固定资产投资额"
              type="number"
            ></el-input>
          </td>
        </tr>

        <tr v-if="projectTypeArr.indexOf('1')> -1">
          <td>计划贷款(万元)</td>
          <td>
            <el-input v-model="baseParams.plannedLoanAll" placeholder="请输入计划贷款" type="number"></el-input>
          </td>
          <td>基金需求(万元)</td>
          <td>
            <el-input v-model="baseParams.fundDemandAll" placeholder="请输入基金需求" type="number"></el-input>
          </td>
        </tr>

        <tr>
          <td>项目开工时间</td>
          <td>
            <el-date-picker
              v-model="baseParams.projectStartTime"
              type="date"
              placeholder="选择项目开工时间"
              style="width: 100%"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </td>
          <td>项目竣工时间</td>
          <td>
            <el-date-picker
              v-model="baseParams.projectEndTime"
              type="date"
              placeholder="选择项目竣工时间"
              style="width: 100%"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </td>
        </tr>

        <tr>
          <td>项目类别</td>
          <td>
            <el-select
              v-model="baseParams.projectCategory"
              placeholder="请选择项目类别"
              style="width: 100%"
            >
              <el-option
                v-for="item in initData.proCategoryList"
                :key="item.value"
                :label="item.name"
                :value="parseInt(item.dicDataCode)"
              ></el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td>企业性质</td>
          <td>
            <el-select
              v-model="baseParams.companyNature"
              placeholder="请选择企业性质"
              style="width: 100%"
            >
              <el-option
                v-for="item in initData.companyNatureList"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </td>
          <td>项目性质</td>
          <td>
            <el-select
              v-model="baseParams.projectNature"
              placeholder="请选择项目性质"
              style="width: 100%"
            >
              <el-option
                v-for="item in initData.proNatureList"
                :key="item.value"
                :label="item.name"
                :value="parseInt(item.dicDataCode)"
              ></el-option>
            </el-select>
          </td>

        </tr>

        <tr>
          <td>所属行业</td>
          <td>
            <el-select
              v-model="baseParams.industry"
              placeholder="请选择所属行业"
              style="width: 100%"
            >
              <el-option
                v-for="item in initData.industryList "
                :key="item.value"
                :label="item.label"
                :value="item.vid"
              ></el-option>
            </el-select>
          </td>
          <td>传统行业</td>
          <td>
            <el-select
              v-model="baseParams.traditionalIndustries"
              filterable
              placeholder="请选择传统行业"
              style="width: 100%"
            >
              <el-option
                v-for="item in initData.traditionIndustryDTOList"
                :key="item.value"
                :label="item.name"
                :value="parseInt(item.dicDataCode)"
              ></el-option>
            </el-select>
          </td>
        </tr>

        <tr>
          <td>'5+1'产业</td>
          <td>
            <el-select
              v-model="baseParams.industryCode"
              placeholder="请选择'5+1'产业"
              @change="fiveplusone()"
              style="width: 100%"
            >
              <el-option
                v-for="item in initData.industrialFieldList"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </td>
          <td>'16+1'重点领域</td>
          <td>
            <el-select
              v-model="baseParams.keyField"
              placeholder="请选择'16+1'重点领域"
              style="width: 100%"
            >
              <el-option
                v-for="item in initData.data"
                :key="item.code"
                :label="item.name"
                :value="parseInt(item.code)"
              ></el-option>
            </el-select>
          </td>
        </tr>

        <tr>
          <td>联系人</td>
          <td>
            <el-input v-model="baseParams.linkman" maxlength="10" placeholder="请输入联系人"></el-input>
          </td>
          <td>联系人电话</td>
          <td>
            <el-input v-model="baseParams.linkmanMobile" maxlength="11" placeholder="请输入联系人电话"></el-input>
          </td>
        </tr>
        <tr>
          <td>存在的困难和问题</td>
          <td colspan="3">
            <el-input
              type="textarea"
              :autosize="textareaObj"
              placeholder="请输入存在的困难和问题"
              v-model="baseParams.difficultyAndProblem"
              resize="none"
            ></el-input>
          </td>
        </tr>

      </table>

      <!--提交按钮-->
      <div style="width: 15%;margin: auto;margin-top: 30px" v-show="projectWriteStatus === 0 ">
        <!-- <el-button type="primary" size="small" @click="shangbaoBtn">上报项目</el-button> -->
        <el-button type="primary" size="small" @click="caogaoBtn('basicInfo')"
                   >保存
        </el-button>
      </div>

    </div>

  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import {reqCreatProSerchCompany} from "../../../api"
    export default {
      name: "AddProject_baseInfo",
      data(){
          return{
            baseParams:{
              companyId:null,
              projectName:null,
              projectContent:null,
              industry:null,
              totalInvest:null,
              fixedInvest:null,
              plannedLoanAll:null,
              fundDemandAll:null,
              projectStartTime:null,
              projectEndTime:null,
              projectCategory:null,
              companyNature:null,
              projectNature:null,
              traditionalIndustries:null,
              industryCode:null,//5+1
              keyField:null,//16+1
              linkman:null,
              linkmanMobile:null,
              difficultyAndProblem:null,
              xx:null,
              xx:null,


            },
            textareaObj: {minRows: 4},
            value:[],
            listCompanyBd:[]
          }
      },
      methods:{
        ...mapMutations(['changeSelect','selectValue']),
        // getValue(){
        //   const selectValue = this.selectValue
        //  // this.$store.state.name = selectValue//不能直接去修改state中的值
        //   this.$store.commit('changeSelect',selectValue)//第一种方式
        //   // this.changeSelect(selectValue)//第二种方式
        // },
        // addOne(){//异步操作
        //   this.$store.dispatch('addOne',5)
        // }




        async getListCompanyBd(){//初始化公司
          const rs = await reqCreatProSerchCompany({})
          this.listCompanyBd = rs
        },
        async getTargetCompany(query){//获取目标公司
          if(query !== ""){
            const name = query;
            const rs = await reqCreatProSerchCompany({name});
            this.listCompanyBd = rs
          }else{//搜索框没搜索到内容清空后重新请求公司数据
            const rs = await reqCreatProSerchCompany({});
            if (rs.status === '0') {
              this.listCompanyBd = rs;
            } else {
              this.$message.error(rs.message)
            }
          }

        },
      },
      computed:{
        ...mapState(['initData','userInfo','projectTypeArr','projectWriteStatus'])
      },
      mounted() {
        this.getListCompanyBd()
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/css/public.styl';
</style>
