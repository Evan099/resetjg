<template>
    <div>

      <div>
        <div class="creatProject-title">
          <span>创建新项目</span>
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
                  <el-select v-model="town" placeholder="请选择"  style="width: 100%">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </td>
                <td>所属区县:</td>
                <td>
                  <el-select v-model="county" placeholder="请选择" style="width: 100%">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
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
          }
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

        }

      },
      computed:{
        ...mapState(['companyId','insertProSkipData'])

      },
      watch:{
        companyId:function (newVal,oldVal) {
          return this.getTownCountyName(newVal)
        }
      },
      mounted() {
        this.$store.dispatch('getInsertProSkip')
      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/css/public.styl';

</style>
