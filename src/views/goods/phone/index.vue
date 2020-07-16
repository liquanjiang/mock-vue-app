<template>
  <div class="phone-div">
    <!-- 手机统计表格 -->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="统计表格" name="first">
        <div class="table-div">
          <h3>中国手机市场统计</h3>
          <el-table :data="tableData" border stripe size="small" style="width: 100%">
            <el-table-column prop="Name" label="手机品牌" align="center"></el-table-column>
            <el-table-column prop='system' label="操作系统"></el-table-column>
            <el-table-column prop="number" label="手机型号"></el-table-column>
            <el-table-column prop="year" label="上市年份"></el-table-column>
            <el-table-column prop="company" label="所属公司"></el-table-column>
            <el-table-column prop="level" label="市场占有率"></el-table-column>
            <el-table-column prop="total" label="总销量（万部）"></el-table-column>
            <el-table-column prop="address" label="总部地点"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="统计图表-饼图" name="second">
        <div class="echarts-div">
          <h3>中国手机市场统计图</h3>
          <div id="pieChart">
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="统计图表-柱图" name="third">
        <div class="echarts-div">
          <h3>中国手机市场统计图</h3>
          <div id="barChart">
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script src="./_.js"/>
<style scoped src="./_.css"/>
