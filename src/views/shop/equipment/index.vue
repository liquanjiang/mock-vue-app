<template>
  <div class="equipment-div">
    <!-- 搜索功能区域 -->
    <div class="search-div">
      <el-row :gutter="24">
        <el-col :span="6">
          设备名称：
          <el-input v-model="deviceName" placeholder="请输入设备名称" size="mini"/>
        </el-col>
        <el-col :span="6">
          设备类型：
          <el-select v-model="deviceType" placeholder="请选择设备类型" size="mini" clearable>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          上市年份：
          <el-input v-model="saleTime" placeholder="请输入设备名称" size="mini" clearable />
        </el-col>
        <el-col :span="6">
          <el-button type="primary" size="mini" @click="query">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- 表格功能区域 -->
    <div class="table-div">
      <el-table :data="tableData" border stripe size="small" style="width: 100%">
        <el-table-column prop="deviceName" label="设备名称" align="center"></el-table-column>
        <el-table-column prop="deviceType" label="设备名称"></el-table-column>
        <el-table-column prop="photoNumber" label="摄像头数量"></el-table-column>
        <el-table-column prop="cpu" label="芯片"></el-table-column>
        <el-table-column prop="battery" label="电池容量(mAh)"></el-table-column>
        <el-table-column prop="pixel" label="拍照像素"></el-table-column>
        <el-table-column prop="storage" label="存储空间"></el-table-column>
        <el-table-column label="是否支持5G">
          <template slot-scope="scope">
            <span>{{scope.row.fifth ? '是' : '否'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="零售价格(￥)"></el-table-column>
        <el-table-column prop="saleTime" label="上市时间" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script src="./_.js"/>
<style scoped src="./_.css"/>
