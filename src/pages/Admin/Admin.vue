<template>
  <div>
    <div class="admin" id="admin">
      <div class="admin-fl">
        <admin-left></admin-left>
      </div>
      <div class="admin-fr">
        <admin-right></admin-right>
      </div>
    </div>
  </div>
</template>

<script>
    import AdminLeft from "../../components/JiGai/AdminCommon/AdminLeft";
    import AdminRight from "../../components/JiGai/AdminCommon/AdminRight";
    export default {
        name: "Admin",
      components: {AdminRight, AdminLeft}
    }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  *{
    margin 0 auto
    padding 0
  }
  .admin{
    width 100%
    height auto
  }
  .admin-fl{
    width 250px
    height 1080px
    float left
    background #565C65
  }
  .admin-fr{
    width calc(100% - 250px)
    height 100%
    float right
  }
</style>
