<template>
  <div class="aw-content aw-content-dashBoard">
    <div class="item-tittle clear">
        <item-tittle tittle="首页"></item-tittle>
    </div>

    <div class="progress">
        <el-row :gutter="20">

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <el-progress type="circle" :percentage="67" :width="80"></el-progress>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string"> 
                        <span>New Visits</span>
                        <span><h2>57,820</h2></span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="5" :md="4" :lg="4">
                        <div>
                            <i class="el-icon-loading"></i>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <div> <el-progress type="circle" :percentage="81" :width="80"></el-progress></div>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string"> 
                        <span>Purchases</span>
                        <span><h2>$1,680</h2></span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="5" :md="4" :lg="4">
                        <div>
                            <i class="el-icon-loading"></i>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <div> <el-progress type="circle" :percentage="30" :width="80"></el-progress></div>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string"> 
                        <span>Active Users</span>
                        <span><h2>157,820</h2></span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="5" :md="4" :lg="4">
                        <div>
                            <i class="el-icon-loading"></i>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>


            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <div> <el-progress type="circle" :percentage="88" :width="80"></el-progress></div>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string"> 
                        <span>Returned</span>
                        <span><h2>32,645</h2></span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="5" :md="4" :lg="4">
                        <div>
                            <i class="el-icon-loading"></i>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>

    <div class="chart">
      <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24" :lg="12">
              <el-card class="box-chart">
                  <pie-chart></pie-chart>
              </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="12">
              <el-card class="box-chart">
                  <line-chart></line-chart>
              </el-card>
          </el-col>
      </el-row>
    </div>

    <div class="list">
      <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24" :lg="8">
              <el-card class="box-list">
                  To Do List<hr>
                  <todo-list></todo-list>
              </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="10">
              <el-card class="box-list">
                    BORDERED TABLE
                  <hr>
                  <border-table></border-table>
              </el-card>
          </el-col>

          <el-col :xs="24" :sm="24" :md="24" :lg="6">
              <el-card class="box-list">
                    Message List
                  <hr>
                  <message-list></message-list>
              </el-card>
          </el-col>
          
      </el-row>
    </div>
  </div>
</template>

<script src="./index.js">
</script>

<style src="./index.css">
</style>

