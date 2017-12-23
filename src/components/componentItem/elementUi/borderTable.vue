<template>
    <div class="aw-content aw-content-borderTable">
        <el-table :data="tableData" style="width: 100%" border stripe>
        <el-table-column prop="id"  label="ID"  width="80"></el-table-column>
        <el-table-column prop="userName" label="NAME" width="180"></el-table-column>
        <el-table-column prop="age" label="AGE" width="80"> </el-table-column>
        <el-table-column prop="ability" label="ABILITY"> </el-table-column>
        <el-table-column prop="value" label="VALUE" align="right"> </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: "borderTable",
  data() {
    return {
      tableData: [
        {
          id: 1,
          userName: "AWEN",
          age: "30",
          ability: "HTML5,PHP",
          value: "80%"
        },
        {
          id: 2,
          userName: "AWEN",
          age: "28",
          ability: "Web,PHP",
          value: "70%"
        },
        {
          id: 3,
          userName: "AWEN",
          age: "30",
          ability: "PHP,MySql",
          value: "60%"
        },
        {
          id: 4,
          userName: "AWEN",
          age: "35",
          ability: "Web,DB",
          value: "80%"
        },
        {
          id: 3,
          userName: "AWEN",
          age: "30",
          ability: "PHP,MySql",
          value: "60%"
        },
        {
          id: 4,
          userName: "AWEN",
          age: "35",
          ability: "Web,DB",
          value: "80%"
        },
        {
          id: 3,
          userName: "AWEN",
          age: "30",
          ability: "PHP,MySql",
          value: "60%"
        }
      ]
    };
  }
};
</script>
<style scoped>

</style>

