<template>
  <div>
        <el-table :data="kdlbtableData.rows" @selection-change="handleSelectionChange" height="300" style="margin-top: 20px">
            <el-table-column type="index"></el-table-column>
            <el-table-column type="selection"></el-table-column>
            <el-table-column prop="mname" label="状态|全部Y">
                <template slot-scope="scope">
                    <span>{{scope.row.openFlag==="1"?"停用":"有效"}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="mname" label="编号" sortable></el-table-column>
            <el-table-column prop="mname" label="名称"></el-table-column>
            <el-table-column prop="mname" label="备注"></el-table-column>
            <el-table-column prop="mname" label="详情"></el-table-column>
            <el-table-column prop="mname" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click.prevent="handleClick(scope.row)" size="small">
                        <span>{{scope.row.openFlag==="1"?"停用":"有效"}}</span>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页符 -->
        <div class="block clearfix">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
            :current-page="kdlbtableData.page" prev-text='上一页' next-text='下一页'
            :page-sizes="[10, 20, 30, 40]"  :page-size="10" layout=" prev, pager, next, total, jumper, sizes"
            :total="kdlbtableData.total">
            </el-pagination>
        </div>
        <!-- 按钮 -->
        <div style="margin-top: 20px" class="text-left">
            <el-button @click.prevent="start()" class="md-btn">启用</el-button>
            <el-button @click.prevent="pause()">停用</el-button>
            <el-button @click.prevent="deleteSelet()">删除</el-button>
            <el-button @click.prevent="goback()">返回</el-button>
        </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            isShow:false,
            multipleSelection: [],
            // currentPage:3,
            kdlbtableData:{
                "page": 1,
                "total": 66,
                "rows": [{
                    "id": 21,
                    "mname": "测试门店2（勿动）",
                    "mcode": "022",
                    "remark": "",
                    "startdate": "2015-11-30",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }, {
                    "id": 22,
                    "mname": "博利热菜",
                    "mcode": "023",
                    "remark": "",
                    "startdate": "2017-11-25",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }, {
                    "id": 22,
                    "mname": "博利热菜",
                    "mcode": "023",
                    "remark": "",
                    "startdate": "2017-11-25",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }, {
                    "id": 22,
                    "mname": "博利热菜",
                    "mcode": "023",
                    "remark": "",
                    "startdate": "2017-11-25",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }, {
                    "id": 22,
                    "mname": "博利热菜",
                    "mcode": "023",
                    "remark": "",
                    "startdate": "2017-11-25",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }, {
                    "id": 22,
                    "mname": "博利热菜",
                    "mcode": "023",
                    "remark": "",
                    "startdate": "2017-11-25",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }, {
                    "id": 22,
                    "mname": "博利热菜",
                    "mcode": "023",
                    "remark": "",
                    "startdate": "2017-11-25",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }, {
                    "id": 22,
                    "mname": "博利热菜",
                    "mcode": "023",
                    "remark": "",
                    "startdate": "2017-11-25",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }, {
                    "id": 22,
                    "mname": "博利热菜",
                    "mcode": "023",
                    "remark": "",
                    "startdate": "2017-11-25",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }, {
                    "id": 22,
                    "mname": "博利热菜",
                    "mcode": "023",
                    "remark": "",
                    "startdate": "2017-11-25",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }, {
                    "id": 22,
                    "mname": "博利热菜",
                    "mcode": "023",
                    "remark": "",
                    "startdate": "2017-11-25",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }, {
                    "id": 22,
                    "mname": "博利热菜",
                    "mcode": "023",
                    "remark": "",
                    "startdate": "2017-11-25",
                    "starttime": "",
                    "oid": null,
                    "organ_code": null,
                    "openFlag": 1
                }]
            }
        }
    },
    methods:{
        // 选择项改变触发的事件
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        // 查看详情
        handleClick(row) {
            this.isShow=!this.isShow;         
            console.log(row);
        },
        // 分页部分
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        // 编辑部分
        start() {

        },
        pause() {

        },
        deleteSelet() {

        },
        goback() {

        }
    }
}
    
</script>
<style scoped> 
/* 分页 */
.el-pagination {
  float: right;
}
</style>
