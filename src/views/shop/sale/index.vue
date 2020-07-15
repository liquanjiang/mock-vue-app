<template>
  <div class="equipment-div">
    <!-- 搜索功能区域 -->
    <div class="search-div">
      <el-row :gutter="24">
        <el-col :span="6">
          日期：
          <el-date-picker
            v-model="date"
            size='mini'
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"/>
        </el-col>
        <el-col :span="6">
          是否达标：
          <el-select v-model="isTrue" placeholder="请选择" size="mini" clearable>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          选择门店：
          <el-select v-model="storeCode" placeholder="请选择" size="mini" clearable>
            <el-option
              v-for="item in stores"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>        </el-col>
        <el-col :span="6">
          <el-button type="primary" size="mini" @click="query">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- 表格功能区域 -->
    <div class="table-div">
      <el-table :data="tableData" border stripe size="small" style="width: 100%">
        <el-table-column prop="shopDate" label="日期" align="center"></el-table-column>
        <el-table-column prop="shopAddress" label="门店位置" width="240"></el-table-column>
        <el-table-column prop="shopCode" label="门店编号"></el-table-column>
        <el-table-column prop="phone" label="手机销售额"></el-table-column>
        <el-table-column prop="computer" label="电脑销售额"></el-table-column>
        <el-table-column prop="pad" label="平板销售额"></el-table-column>
        <el-table-column prop="fitting" label="配件销售额"></el-table-column>
        <el-table-column label="是否达标">
          <template slot-scope="scope">
            <span>{{scope.row.fifth ? '是' : '否'}}</span>
          </template>
        </el-table-column>
        <el-table-column label="总销售额">
          <template slot-scope="scope">
            <span>{{getTotal(scope)}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="saleTime" label="备注" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script src="./_.js"/>
<style scoped src="./_.css"/>
