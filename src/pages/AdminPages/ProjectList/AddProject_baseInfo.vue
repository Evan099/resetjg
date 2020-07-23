<template>
  <div>
    <div class="basicInfo">
      <table class="projectTable2">
        <tr v-if="userInfo.userType === 'GL' && tipMsg" style="color: red">
          <td></td>
          <td>
            {{tipMsg}}
            <span style="color: #ccc;cursor: pointer" @click="tipMsg=false">x</span>
          </td>
        </tr>
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
              :remote-method="getTargetCompanyInfo"
              @change="$store.commit('companyIdChange',baseParams.companyId),getCompanyAllProjectFn()"
            >
              <el-option
                v-for="item in listCompany.data.company"
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
              placeholder="请输入项目名称(60字以内)（必填项）"
              maxlength="60"
              style="width: 100%"
            ></el-input>
          </td>
        </tr>

        <tr v-if="userInfo.userType ==='GL' ">
          <td>可选项目*</td>
          <td>
            <el-select
              v-model="basicId"
              placeholder="请选择项目"
              style="width: 100%"
              @change="$store.commit('basicIdChange',basicId),renderOneProjectDetail()"
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
              :rows = rows
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
              placeholder="请输入总投资额（必填项）"
              type="number"
            ></el-input>
          </td>
          <td>固定资产投资(万元)</td>
          <td>
            <el-input
              v-model="baseParams.fixedInvest"
              placeholder="请输入固定资产投资额（必填项）"
              type="number"
            ></el-input>
          </td>
        </tr>

        <tr v-if="projectType.indexOf('2')> -1">
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
              placeholder="选择项目开工时间（必填项）"
              style="width: 100%"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </td>
          <td>项目竣工时间</td>
          <td>
            <el-date-picker
              v-model="baseParams.projectEndTime"
              type="date"
              placeholder="选择项目竣工时间（必填项）"
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
              placeholder="请选择项目类别（必填项）"
              style="width: 100%"
            >
              <el-option
                v-for="item in insertProSkipData.proCategoryList"
                :key="item.dicDataCode"
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
              placeholder="请选择企业性质（必填项）"
              style="width: 100%"
            >
              <el-option
                v-for="item in insertProSkipData.companyNatureList"
                :key="item.id"
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
                v-for="item in insertProSkipData.proNatureList"
                :key="item.dicDataCode"
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
                v-for="item in insertProSkipData.industryList "
                :key="item.vid"
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
                v-for="item in insertProSkipData.traditionIndustryDTOList"
                :key="item.dicDataCode"
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
              @change="getSixteenAddOne(baseParams.industryCode)"
              style="width: 100%"
            >
              <el-option
                v-for="item in insertProSkipData.industrialFieldList"
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
                v-for="item in baseParams.industrialFieldD161"
                :key="item.code"
                :label="item.name"
                :value="item.code"
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
              :rows = rows
              placeholder="请输入存在的困难和问题"
              v-model="baseParams.difficultyAndProblem"
              resize="none"
            ></el-input>
          </td>
        </tr>

      </table>

      <!--提交按钮-->
      <div class="styleCreatSavaBtn">
        <el-button type="primary" size="small" @click="saveBasicBtn" v-if="buttonControl.add_project_save ===true">保存</el-button>
        <el-button type="info" @click="$router.go(0)" size="small">刷新</el-button>
      </div>

    </div>

  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import {reqCreatProSerchCompany,reqCreatProSixteen,getCompanyAllProject,getCompanyOneProjectAllInfoList} from "../../../api"
  import {SaveDraft} from "../../../api" //保存基本信息
    export default {
      name: "AddProject_baseInfo",
      data(){
          return{
            basicId:'',//可选项目id

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
            },
            rows:'3',
            listCompany:[],
            companyAllProjectList:[],//公司下所有项目的集合

            tipMsg:'下拉框只显示20家公司!',

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


        async getCompanyList(){//初始化“企业名称”下拉公司列表
          const rs = await reqCreatProSerchCompany({})
          this.listCompany = rs
        },
        async getTargetCompanyInfo(query){//通过模糊搜索查询获取目标公司信息
          if(query !== ""){
            const name = query;
            const rs = await reqCreatProSerchCompany({name});
            this.listCompany = rs
            this.tipMsg = '总共' + rs.data.companyTotal.total + '个公司,显示' + rs.data.companyTotal.alreadyShown + '个公司,未显示' + rs.data.companyTotal.noShown + '个';

          }else{//搜索框没搜索到内容清空后重新请求公司数据
            const rs = await reqCreatProSerchCompany({});
            if (rs.status === '0') {
              this.listCompany = rs;
            } else {
              this.$message.error(rs.message)
            }
          }
        },
        async getCompanyAllProjectFn(){//"企业名称"变化时load出该企业下的所有项目

          const id = this.companyId

          const rs= await getCompanyAllProject({id});

          if(rs.status === "0"){
            this.companyAllProjectList = rs.data
          }else{
            this.$message.error(rs.message);
          }


        },
        async renderOneProjectDetail(){  // 来render一个项目的详情信息

          const id = this.basicId
          const rs = await getCompanyOneProjectAllInfoList({id})

          if(rs.status === "0"){

            const rsOneProjectInfo = rs //单个项目所有信息

            // const rsBasicInfo = rs.data["project"]  //基本信息
            // const rsImportantInfo = rs.data['keyProFunds']  //重点信息
            // const rsCompletionInfo = rs.data['completionOutput']  //竣工信息

            this.$store.commit('oneProjectInfoChange',rsOneProjectInfo)//把所有信息提交到vuex
            this.baseParams = this.oneProjectInfo.data['project']  //基本信息//从vuex获取基本信息


            let projectTypeArray = this.oneProjectInfo.data['project'].projectTypeArray //取到数组形式的项目类型并提交到vuex，供choseCondition界面使用
            this.$store.commit('projectTypeChange',projectTypeArray)


          }else{
            this.$message.error('后台错误');
          }

        },
        async getSixteenAddOne(codeVal){//获取16+1
          const code = codeVal;
          const rs = await reqCreatProSixteen({code})
          this.baseParams.keyField = ""
          this.baseParams.industrialFieldD161 = rs.data//新数据注入
        },
        async saveBasicBtn(){//保存信息

          // 头部信息
          const areaCode = this.insertProSkipData.areaCode
          const declareYear = this.insertProSkipData.declareYear
          const projectStatus = this.insertProSkipData.projectStatus
          const declarePeriodsCode = this.insertProSkipData.declarePeriodsCode
          const newFirstPageB = {areaCode,declareYear,projectStatus,declarePeriodsCode}

          // 主体信息
          const basicInfoSubmit = this.baseParams

          //额外信息
          const projectType = this.projectType.toString()//==项目类型
          basicInfoSubmit.projectType = projectType//把项目类型放进basicInfoSubmit对象里

          if(projectType === ""){//projectType为空不能提交后台
              this.$message.error('请选择项目类型');
              return false
          }

          // 必填项判断
          if(
            this.baseParams['projectName'] === null ||
            this.baseParams['totalInvest'] === null ||
            this.baseParams['fixedInvest'] === null ||
            this.baseParams['projectStartTime'] === null ||
            this.baseParams['projectEndTime'] === null ||
            this.baseParams['projectCategory'] === null ||
            this.baseParams['companyNature'] === null
          ){
            this.$message.error('请检查必填项');
            return false
          }

          const allInfo = {basicInfoSubmit,newFirstPageB}//之所以这样写，是因为后台必须要这样接收
          const rs = await SaveDraft({allInfo})

          if(rs.status === '0'){
            this.$message({
              message: "保存成功",
              type: "success"
            });
          }else{
            this.$message.error('服务器错误');
          }

        }
      },
      computed:{
        ...mapState(['insertProSkipData','userInfo','projectType','projectWriteStatus','companyId','oneProjectInfo','buttonControl']),
      },
      mounted() {
        this.getCompanyList()//初始化公司
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/css/public.styl';
</style>
