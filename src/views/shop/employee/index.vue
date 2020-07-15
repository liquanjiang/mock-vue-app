<template>
  <div class="employee-div">
    <!-- 搜索功能区域 -->
    <div class="search-div">
      <el-row :gutter="24">
        <el-col :span="6">
          员工名称：
          <el-input v-model="employeeName" placeholder="请输入人员名称" size="mini"/>
        </el-col>
        <el-col :span="6">
          员工类别：
          <el-select v-model="employeeType" placeholder="请选择人员类别" size="mini" clearable>
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          入职年份：
          <el-date-picker
            v-model="saleTime"
            type="year"
            size="mini"
            value-format="yyyy"
            placeholder="选择年">
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" size="mini" @click="query(true)">查询</el-button>
          <el-button type="primary" size="mini" @click="addUser">新增</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- 表格功能区域 -->
    <div class="table-div">
      <el-table :data="tableData" border stripe size="small" style="width: 100%">
        <el-table-column prop="employeeName" label="员工名称" align="center"></el-table-column>
        <el-table-column label="性别">
          <template slot-scope="scope">
            <span>{{scope.row.sex === 'male' ? '男' : '女'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="year" label="入职年份"></el-table-column>
        <el-table-column label="类别">
          <template slot-scope="scope">
            <span>{{typeArray[scope.row.employeeType]}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="department" label="部门"></el-table-column>
        <el-table-column prop="level" label="级别"></el-table-column>
        <el-table-column prop="salary" label="薪水"></el-table-column>
        <el-table-column prop="address" label="办公地点"></el-table-column>
        <el-table-column label="操作" align="center" width="240">
          <template slot-scope="scope">
            <el-button type="warning" size="mini" @click="edit(scope)">修改</el-button>
            <el-button type="danger" size="mini" @click="deleteUser(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 新增弹窗 -->
    <el-dialog
      title="新增员工"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose">
      <div class="add-div">
        <el-row :gutter="24" style="margin:20px 0">
          <el-col :span="8">
            员工名称：
            <el-input v-model="addEmployeeObject.employeeName" placeholder="请输入人员名称" size="mini"/>
          </el-col>
          <el-col :span="8">
            员工性别：
            <el-select v-model="addEmployeeObject.sex" placeholder="请选择人员性别" size="mini" clearable>
              <el-option
                v-for="item in sexOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            员工类别：
            <el-select v-model="addEmployeeObject.employeeType" placeholder="请选择人员类别" size="mini" clearable>
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>

        <el-row :gutter="24" style="margin:20px 0">
          <el-col :span="8">
            员工级别：
            <el-input v-model="addEmployeeObject.level" placeholder="请输入员工级别" size="mini"/>
          </el-col>
          <el-col :span="8">
            入职年份：
            <el-date-picker v-model="addEmployeeObject.year" type="year" size="mini" value-format="yyyy"
                            placeholder="选择年"></el-date-picker>
          </el-col>
          <el-col :span="8">
            员工薪水：
            <el-input v-model="addEmployeeObject.salary" placeholder="请输入员工薪水" size="mini"/>
          </el-col>
        </el-row>

        <el-row :gutter="24" style="margin:20px 0">
          <el-col :span="8">
            员工部门：
            <el-input v-model="addEmployeeObject.department" placeholder="请输入员工部门" size="mini"/>
          </el-col>
          <el-col :span="8">
            办公地点：
            <el-input v-model="addEmployeeObject.address" placeholder="请输入办公地点" size="mini"/>
          </el-col>
        </el-row>
        <div style="margin:30px 0;text-align:center">
          <el-button size='mini' @click="handleClose" style="margin-right:40px;">取消</el-button>
          <el-button size='mini' type='primary' @click="add">确定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./_.js"/>
<style scoped src="./_.css"/>
