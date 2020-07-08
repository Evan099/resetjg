<template>
    <div>

      <div>
        <div class="creatProject-title">
          <span>创建新项目</span>companyId:{{companyId}}
        </div>
      </div>

      <div class="creatProject-main">
        <div style="width: 97%">
          <div class="creatProject-chose">
            <table class="projectTable">
              <tr>
                <td>申报年度:</td>
                <td><el-input v-model="insertProSkipData.declareYear" disabled></el-input></td>
                <td>所属市州:</td>
                <td>
                  <el-select v-model="town" placeholder="请选择" :disabled="companyId !== null && companyId !== '' "   style="width: 100%">
                    <el-option
                      v-for="item in enterpriseConditionData.area"
                      :key="item.id"
                      :label="item.label"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </td>
                <td>所属区县:</td>
                <td>
                  <el-select v-model="county" placeholder="请选择" :disabled="companyId !== null && companyId !== '' "  style="width: 100%">
                    <el-option
                      v-for="item in enterpriseConditionCountyOneDate.county"
                      :key="item.id"
                      :label="item.label"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </td>
              </tr>
              <tr>
                <td>申报状态:</td>
                <td><el-input v-model="insertProSkipData.projectStatusName" disabled></el-input></td>
                <td>项目类型:</td>
                <td>
                  <el-checkbox-group v-model="projectTypeArr" @change="$store.commit('projectTypeArrChange',projectTypeArr)"   style="text-align: left;">
                    <el-checkbox label="1">重点</el-checkbox>
                    <el-checkbox label="2">竣工</el-checkbox>
                  </el-checkbox-group>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqSerchArea} from "../../../api"
    export default {
      name: "AddProject_choseCondition",
      data () {
        return {
          projectTypeArr: [],//vuex 项目类型
          town:null,
          county:null,

          choseCondition:{
            areaName:null,
            areaCode:null
          },
        };
      },
      methods:{

        async getTownCountyName(newVal){//通过企业id来load并回显所属市州和所属区县名称
          const companyId = newVal
          const rs = await reqSerchArea({companyId})

          let arr = []
          arr = rs.data.areaName.split('-')
          this.town = arr[1]
          this.county = arr[2]



        },
        getCounty(newVal){//监听市州town值变化来获取区县//现在的需求在该界面不需要这个功能

          if(this.companyId == ''){//如果没有选中企业名称，上面的市州值变化，则重新调取获取区县的接口
            this.county = null
          }

          const code = newVal
          this.$store.dispatch('getPriseConditionCountyData',code)
        }

      },
      computed:{
        ...mapState(['companyId','insertProSkipData','enterpriseConditionData','enterpriseConditionCountyOneDate'])

      },
      watch:{
        companyId:function (newVal,oldVal) {
          return this.getTownCountyName(newVal)
        },
        town:function (newVal,oldVal) {//监听市州town值变化来获取区县//现在的需求在该界面不需要这个功能
          return this.getCounty(newVal)
        }

      },
      mounted() {
        this.$store.dispatch('getInsertProSkip')
        this.$store.dispatch('getPriseConditionData')
      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/css/public.styl';

</style>
