<template>
    <div>
        <div class="">
            <!-- 标题 -->
            <h3 class="text-left business-header">修改营业资料</h3>
            <div>
                <!-- 店名 -->
                <p class="text-left">店名：</p>
                <!-- tab栏 -->
                <el-tabs type="border-card">
                    <!-- 餐谱 -->
                    <el-tab-pane>
                        <span slot="label">餐谱</span>
                        <el-table :data="cptableData2.rows" @selection-change="handleSelectionChange" height="300" style="margin-top: 20px">
                            <el-table-column prop="mname" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="openFlag" label="状态|全部Y">
                                <template slot-scope="scope">
                                    <span>{{scope.row.openFlag==="1"?"停用":"有效"}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="mcode" label="编号" sortable></el-table-column>
                            <el-table-column prop="mname" label="名称"></el-table-column>
                            <el-table-column prop="remark" label="备注"></el-table-column>
                            <el-table-column label="详情">
                                <template slot-scope="scope">
                                    <el-button class="sassbtn sassbtn-danger" @click="handleClick(scope.row)" size="small">查看详情</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="name" label="操作"></el-table-column>
                        </el-table>
                        <!-- 分页符 -->
                        <div class="block clearfix">
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
                            :current-page="currentPage" prev-text='上一页' next-text='下一页'
                            :page-sizes="[10, 20, 30, 40]"  :page-size="10" layout=" prev, pager, next, total, jumper, sizes"
                            :total="40">
                            </el-pagination>
                        </div>
                        <!-- 按钮 -->
                        <div style="margin-top: 20px" class="text-left">
                            <el-button @click="start()" class="md-btn">启用</el-button>
                            <el-button @click="pause()">停用</el-button>
                            <el-button @click="deleteSelet()">删除</el-button>
                            <el-button @click="goback()">返回</el-button>
                        </div>
                    </el-tab-pane>
                    <!-- 付款方式 -->
                    <el-tab-pane>
                        <span slot="label">付款方式</span>
                        <el-table :data="cptableData" @selection-change="handleSelectionChange">
                            <el-table-column prop="name" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="name" label="状态|全部Y"></el-table-column>
                            <el-table-column prop="name" label="编号" sortable></el-table-column>
                            <el-table-column prop="name" label="名称"></el-table-column>
                            <el-table-column prop="name" label="付款类型"></el-table-column>
                            <el-table-column prop="name" label="是否记收入"></el-table-column>
                            <el-table-column prop="name" label="是否积分"></el-table-column>
                            <el-table-column prop="name" label="是否可开发票"></el-table-column>
                            <el-table-column prop="name" label="是否预收款"></el-table-column>
                            <el-table-column prop="name" label="备注"></el-table-column>
                            <el-table-column prop="name" label="操作"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!-- 营业班次 -->
                    <el-tab-pane>
                        <span slot="label">营业班次</span>
                         <el-table :data="cptableData" @selection-change="handleSelectionChange">
                            <el-table-column prop="name" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="name" label="状态|全部Y"></el-table-column>
                            <el-table-column prop="name" label="编号" sortable></el-table-column>
                            <el-table-column prop="name" label="名称"></el-table-column>
                            <el-table-column prop="name" label="开始属性"></el-table-column>
                            <el-table-column prop="name" label="开始时间"></el-table-column>
                            <el-table-column prop="name" label="结束属性"></el-table-column>
                            <el-table-column prop="name" label="结束时间"></el-table-column>
                            <el-table-column prop="name" label="备注"></el-table-column>
                            <el-table-column prop="name" label="操作"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!-- 桌位 -->
                    <el-tab-pane>
                        <span slot="label">桌位</span>
                         <el-table :data="cptableData" @selection-change="handleSelectionChange">
                            <el-table-column prop="name" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="name" label="状态|全部Y"></el-table-column>
                            <el-table-column prop="name" label="编号" sortable></el-table-column>
                            <el-table-column prop="name" label="名称"></el-table-column>
                            <el-table-column prop="name" label="餐位类型"></el-table-column>
                            <el-table-column prop="name" label="营业区域"></el-table-column>
                            <el-table-column prop="name" label="服务类型"></el-table-column>
                            <el-table-column prop="name" label="是否单桌营业"></el-table-column>
                            <el-table-column label="操作">
                                <template fixed="right" slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!-- 服务费 -->
                    <el-tab-pane>
                        <span slot="label">服务费</span>
                         <el-table :data="cptableData" @selection-change="handleSelectionChange">
                            <el-table-column prop="name" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="name" label="状态|全部Y"></el-table-column>
                            <el-table-column prop="name" label="名称" sortable></el-table-column>
                            <el-table-column prop="name" label="类型"></el-table-column>
                            <el-table-column prop="name" label="固定金额"></el-table-column>
                            <el-table-column prop="name" label="最低消费"></el-table-column>
                            <el-table-column prop="name" label="费用率"></el-table-column>
                            <el-table-column prop="name" label="是否可修改"></el-table-column>
                            <el-table-column prop="name" label="操作"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!-- 异常原因 -->
                    <el-tab-pane>
                        <span slot="label">异常原因</span>
                         <el-table :data="cptableData" @selection-change="handleSelectionChange">
                            <el-table-column prop="name" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="name" label="状态|全部Y"></el-table-column>
                            <el-table-column prop="name" label="异常类型"></el-table-column>
                            <el-table-column prop="name" label="编号" sortable></el-table-column>
                            <el-table-column prop="name" label="名称"></el-table-column>
                            <el-table-column prop="name" label="上级原因"></el-table-column>>
                            <el-table-column prop="name" label="备注"></el-table-column>
                            <el-table-column prop="name" label="操作"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!-- 口味备注 -->
                    <el-tab-pane>
                        <span slot="label">口味备注</span>
                         <el-table :data="cptableData" @selection-change="handleSelectionChange">
                            <el-table-column prop="name" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="name" label="状态|全部Y"></el-table-column>
                            <el-table-column prop="name" label="上级"></el-table-column>
                            <el-table-column prop="name" label="编号" sortable></el-table-column>
                            <el-table-column prop="name" label="名称"></el-table-column>
                            <el-table-column prop="name" label="操作"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!-- 厨打类别 -->
                    <el-tab-pane>
                        <span slot="label">厨打类别</span>
                         <el-table :data="cptableData" @selection-change="handleSelectionChange">
                            <el-table-column prop="name" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="name" label="状态|全部Y"></el-table-column>
                            <el-table-column prop="name" label="编号" sortable></el-table-column>
                            <el-table-column prop="name" label="名称"></el-table-column>
                            <el-table-column prop="name" label="备注"></el-table-column>
                            <el-table-column prop="name" label="详情"></el-table-column>
                            <el-table-column prop="name" label="操作"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!-- 打印机 -->
                    <el-tab-pane>
                        <span slot="label">打印机</span>
                         <el-table :data="cptableData" @selection-change="handleSelectionChange">
                            <el-table-column prop="name" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="name" label="状态"></el-table-column>
                            <el-table-column prop="name" label="名称"></el-table-column>
                            <el-table-column prop="name" label="打印机说明"></el-table-column>
                            <el-table-column prop="name" label="端口"></el-table-column>
                            <el-table-column prop="name" label="地址"></el-table-column>
                            <el-table-column prop="name" label="是否地理打印机"></el-table-column>
                            <el-table-column prop="name" label="操作"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!--折扣方案 -->
                    <el-tab-pane>
                        <span slot="label">折扣方案</span>
                         <el-table :data="cptableData" @selection-change="handleSelectionChange">
                            <el-table-column prop="name" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="name" label="分配状态"></el-table-column>
                            <el-table-column prop="name" label="编号" sortable></el-table-column>
                            <el-table-column prop="name" label="方案名称"></el-table-column>
                            <el-table-column prop="name" label="开始日期"></el-table-column>
                            <el-table-column prop="name" label="结束日期"></el-table-column>
                            <el-table-column prop="name" label="方案执行状态"></el-table-column>
                            <el-table-column prop="name" label="操作"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!-- 时段特价 -->
                    <el-tab-pane>
                        <span slot="label">时段特价</span>
                         <el-table :data="cptableData" @selection-change="handleSelectionChange">
                            <el-table-column prop="name" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="name" label="分配状态"></el-table-column>
                            <el-table-column prop="name" label="编号" sortable></el-table-column>
                            <el-table-column prop="name" label="方案名称"></el-table-column>
                            <el-table-column prop="name" label="开始日期"></el-table-column>
                            <el-table-column prop="name" label="开始时间"></el-table-column>
                            <el-table-column prop="name" label="结束日期"></el-table-column>
                            <el-table-column prop="name" label="结束时间"></el-table-column>
                            <el-table-column prop="name" label="执行状态"></el-table-column>
                            <el-table-column prop="name" label="操作"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!-- 机构参数 -->
                    <el-tab-pane>
                        <span slot="label">机构参数</span>
                         <el-table :data="cptableData" @selection-change="handleSelectionChange">
                            <el-table-column prop="name" label=""></el-table-column>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="name" label="是否已设置"></el-table-column>
                            <el-table-column prop="name" label="机构名称"></el-table-column>
                            <el-table-column prop="name" label="系统类型Y"></el-table-column>
                            <el-table-column prop="name" label="业务名称"></el-table-column>
                            <el-table-column prop="name" label="参数类型"></el-table-column>
                            <el-table-column prop="name" label="是否积分"></el-table-column>
                            <el-table-column prop="name" label="参数名称"></el-table-column>
                            <el-table-column prop="name" label="参数值"></el-table-column>
                            <el-table-column prop="name" label="参数默认值"></el-table-column>
                            <el-table-column prop="name" label="状态|全部"></el-table-column>
                            <el-table-column prop="name" label="参数说明"></el-table-column>
                            <el-table-column prop="name" label="操作"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                multipleSelection: [],
                currentPage:3,
                cptableData:[
                    {name:1},
                    {name:1},
                    {name:1},
                    {name:1},
                    {name:1},
                    {name:1},
                ],
                cptableData2:{
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
                    }]
                }
            }
        },
        methods:{
            // 选择项改变触发的事件
            handleSelectionChange(val) {
                this.multipleSelection = val;
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
<style>
/* 公共样式 */
.md-btn{
    padding: 20px;
}
.text-left {
    text-align: left;
}
h3 {
    margin: 0;
    padding: 0;
}
p {
    margin: 0;
    padding: 0;
}
.clearfix:after {
    content: " ";
    display: block;
    clear: both;
    height: 0;
    font-size: 0;
}
.clearfix {
    zoom: 1;
}
/* 标题 */
.business-header {
    background-color: #eeeeee;
}
/* 分页 */
.el-pagination {
  float: right;
}
</style>
