<template>
    <div class="aw-content aw-content-navmenu">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" active-text-color="#fff" background-color="rgb(84, 92, 100)" unique-opened router>
            <el-menu-item index="Home">
                    <span class="sb-icon"><i class="el-icon-service"></i></span>
                    <span class="sb-cn">首页</span>
            </el-menu-item>

            <el-submenu index="2">

                <template slot="title">             
                    <span class="sb-icon"><i class="el-icon-menu"></i></span>
                    <span class="sb-cn">项目</span>
                </template>

                <el-menu-item index="DashBoard">one</el-menu-item>
                <el-menu-item index="DashBoard">twe</el-menu-item>
                <el-menu-item index="DashBoard">three</el-menu-item>

            </el-submenu>

            <el-submenu index="3">

                <template slot="title">
                    <span class="sb-icon"><i class="el-icon-menu"></i></span>
                    <span class="sb-cn">项目</span>
                </template>

                <el-menu-item index="DashBoard">one</el-menu-item>

            </el-submenu>

            <el-submenu index="4">

                <template slot="title">
                    <span class="sb-icon"><i class="el-icon-menu"></i></span>
                    <span class="sb-cn">项目</span>
                </template>

                <el-menu-item index="DashBoard">one</el-menu-item>
                <el-menu-item index="DashBoard">twe</el-menu-item>

            </el-submenu>

             <el-submenu index="5">

                <template slot="title">
                    <span class="sb-icon"><i class="el-icon-menu"></i></span>
                    <span class="sb-cn">项目</span>
                </template>

                <el-menu-item index="DashBoard">one</el-menu-item>
                
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>
<style lang="less">
.aw-content-navmenu {
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 66px;
  bottom: 0;
  background: rgb(84, 92, 100);
}

.aw-content-navmenu > ul {
  height: 100%;
  background: rgb(84, 92, 100);
}

.el-menu-item,
.el-submenu__title {
  font-size: 14px;
  color: #ffffff;
}

.material-icons {
  font-size: 12px;
}
</style>

