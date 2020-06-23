<template>
  <div>
    <el-col :span="12">
      <el-menu
        :default-active="menuActive"

        class="adminMenu"

        @select="handSelect"
        unique-opened="true"
        background-color="#565C65"
        text-color="white"
        :unique-opened="true"
      >

        <el-submenu index="1">

          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">重点项目</span>
          </template>

          <el-menu-item-group style="margin-top: -14px">
            <el-menu-item index="11">新增项目</el-menu-item>
          </el-menu-item-group>


        </el-submenu>



      </el-menu>
    </el-col>
  </div>
</template>

<script>
    export default {
      name: "AdminLeft",
      data(){
        return{
          menuActive:'11'//默认展开页面
        }
      },
      methods: {

        handSelect(key, keyPath){

          this.resetSetItem('watchStorage', key);

        },

      },
      mounted() {
        const menuActive = sessionStorage.getItem('watchStorage')
        this.menuActive = menuActive
      }
    }
</script>

<style scoped lang="stylus" scoped rel="stylesheet/stylus">
  .adminMenu{
    width 250px !important
  }
</style>
