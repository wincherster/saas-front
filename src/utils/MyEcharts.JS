var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/chart/gauge");
require('echarts/lib/component/title');

export default {
    /**
     * 
     * @param {string} domID 
     * @param {number} data 
     * @param {number} extendAngle 
     */
    initHealthDetectionEcharts(domID, data, extendAngle) {
        var domContainer = document.getElementById(domID);
        if (!domContainer) {
            console.error('需要把echart图表绘制在一个容器中，而这个容器并不存在');
            return;
        }

        if ((typeof (data) === "number") && (data !== Infinity) && (data !== -Infinity) && !isNaN(data)) {
            if (data < 0 || data > 1) {
                console.error('百分比取值范围：[0, 1]');
                return;
            }
        } else {
            console.error('百分比必须是一个[0, 1]之间的数值类型');
            return;
        }

        // 扩展角度取值范围：[0, 90]
        if (/^\d+$/.test(extendAngle)) {

            // 当传入的是一个字符串的数字形式的时候，需要进行强制类型转换
            extendAngle = parseInt(extendAngle);

            if (extendAngle < 0 || extendAngle > 90) {
                console.error('扩展角度取值范围：[0, 90]');
                return;
            }
        } else {
            extendAngle = 0;//如果没有传递扩展角度或者传入的是一个非数字，就默认为0
        }


        var cPer = data.toFixed(2) * 100; // 计算百分比
        var cAng = (180 + 2 * extendAngle) / 100 * cPer; // 计算需要旋转的角度
        // console.log('旋转角度：', cAng, cPer);

        // 红->蓝 颜色渐变
        var redToBlue = {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 0, color: '#F7685E'
            }, {
                offset: 1, color: '#8DD1F3'
            }],
            globalCoord: false
        };

        // 蓝->红
        var blueToRed = {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 0, color: '#8DD1F3'
            }, {
                offset: 1, color: '#F7685E'
            }],
            globalCoord: false
        };

        // 白->灰
        var whiteToGray = {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 0, color: '#FFFFFF'
            }, {
                offset: 1, color: '#FBFCFD'
            }],
            globalCoord: false
        };


        // 进度表盘// 整个表盘分成1段，该段有100个刻度
        var gauge = {
            type: 'gauge',
            min: 0,
            max: 100,
            splitNumber: 1, // 仪表盘刻度的分割段数
            radius: '105px',
            startAngle: 180 + extendAngle,
            endAngle: -extendAngle + 0.1,
            pointer: {              // 是否显示指针
                show: false
            },
            axisLine: {// 坐标轴线
                show: false,// 这个设置不管用
                lineStyle: {
                    width: 0,
                    color: [[1, '#FFFFFF']]
                },
            },
            axisTick: {             // 坐标轴上的小刻度线//刻度样式
                length: 18,
                lineStyle: {
                    color: 'rgba(0,0,0,.2)',
                    width: 1,
                },
                splitNumber: 100 // 分隔线之间分割的刻度数//分成100个刻度
            },
            axisLabel: {
                show: false
            },
            splitLine: {            // 分隔线
                lineStyle: {
                    color: '#E8EFF4',
                    width: 0,
                },
                show: false
            },

            title: {
                show: false
            },
            detail: {
                show: false
            },
            cursor: 'default',
            silent: true,
            animation: false
        }
        gauge.z = 4;// 轨道层级为4

        // 基本饼图
        function BasePie() {
            this.type = 'pie',
                this.hoverAnimation = false,//是否开启 hover 在扇区上的放大动画效果

                this.startAngle = 180 + extendAngle,//开始角度

                this.cursor = 'default',
                this.label = {//饼图图形上的文本标签
                    normal: {
                        show: false
                    }
                },
                this.labelLine = {//标签的视觉引导线样式
                    normal: {
                        show: false
                    }
                },
                this.animationDuration = 5000,//初始动画的时长
                this.silent = true,//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
                this.animationDurationUpdate = 0
        }

        function Pie1() {// 主饼图，层级最高，为5
            BasePie.apply(this);
        }
        var pie1 = new Pie1();
        pie1.radius = ['87px', '105px'];
        pie1.color = [redToBlue, "transparent"]; //红蓝渐变色
        pie1.data = [
            {
                value: cAng,
                name: cPer,
                label: {
                    normal: {
                        show: false
                    },
                },
                itemStyle: {//图形样式
                    normal: {
                        opacity: 0.6
                    }
                }
            },
            { value: 360 - cAng }
        ];
        pie1.z = 5;

        function Pie2() {// 灰色渐变饼图，层级为2
            BasePie.apply(this);
        }
        var pie2 = new Pie2();
        pie2.radius = [0, '69px'];
        pie2.color = [whiteToGray, "transparent"]; //白灰渐变色
        pie2.data = [
            { value: cAng },
            { value: 360 - cAng },
        ]
        pie2.z = 2;

        function Pie3() {// 线性渐变饼图，层级为3
            BasePie.apply(this);
        }
        var pie3 = new Pie3();
        pie3.radius = ['69px', '70px'];
        pie3.color = [blueToRed, "transparent"]; //蓝红渐变色
        pie3.data = [
            { value: cAng },
            { value: 360 - cAng },
        ]
        pie3.z = 3;


        function Pie4() {// 线性轨道，层级最低
            BasePie.apply(this);
        }
        var pie4 = new Pie4();
        pie4.radius = ['69px', '70px'];
        pie4.color = ['#D1DCE5', "transparent"]; //蓝红渐变色
        pie4.data = [
            { value: 180 + 2 * extendAngle },
            { value: 360 - (180 + 2 * extendAngle) },
        ]
        pie4.animation = false;
        pie4.z = 1;


        var option = {
            title: {
                show: true,
                text: cPer + '%',
                textStyle: {
                    fontFamily: ['PingFangSC-Regular', '微软雅黑'],
                    fontSize: 25.41,
                    color: '#34495E',
                    lineHeight: 25.41,
                    fontWeight: 500
                },
                left: 'center',
                top: '70px'
            },
            backgroundColor: '#FFFFFF',
            series: [gauge, pie4, pie2, pie3, pie1]
        };

        var myChart = echarts.init(domContainer);
        myChart.setOption(option);

        window.addEventListener('resize', function () {
            myChart.resize();
        })
    }
}