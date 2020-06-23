<template>
    <div>
      <add-project_is-select></add-project_is-select>
      <add-project_view-mod></add-project_view-mod>
      <add-project_baseinfo></add-project_baseinfo>
    </div>
</template>

<script>
    import AddProject_isSelect from "./AddProject_isSelect";
    import AddProject_viewMod from "./AddProject_viewMod";
    import AddProject_baseinfo from "./AddProject_baseinfo";
    export default {
      name: "AddProject",
      components: {AddProject_baseinfo, AddProject_viewMod, AddProject_isSelect}
    }
</script>

<style scoped>

</style>
