// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main17'),'essos');

// 指定图表的配置项和数据
var option = option = {
title: {
left: 'center',
text: '2020-2022年档期票房（亿）',
textStyle: {
fontSize: 20,
},},

legend: {
    data: ['2020年','2021年','2022年',],
     top: '20' ,
    right:20,
    
orient: 'vertical' ,
  },
xAxis: {
show: false
},
yAxis: {
axisTick: {
show: false
},
type: 'category',
data: ['跨年档', '圣诞档', '贺岁档', '国庆档', '中秋档', '七夕档', '端午档', '六一档', '暑期档', '520档','五一档','清明档','情人节档','春节档','元旦档' ]
},
series: [
{
name: '2020年',
type: 'bar',
data: [5.4, 4.4, 42.4, 39.7, 7.4, 5.3,0.2,0.2,36.2,0.3,0.1,0.1,0.1,0.1,2.9],
 label: {
    show: true,
position: "right"
}
},
{
name: '2021年',
type: 'bar',
data: [5.4, 3, 31.1, 43.9, 5.0, 2,4.7,1.4,73.8,2.3,16.7,8.2,14.7,78.4,13],
label: {
    show: true,
position: "right"
}
},
{
name: '2022年',
type: 'bar',
data: [2.5, 2.2, 16.4, 15, 3.8, 3.8,1.8,0.6,91.4,0.6,3,1.2,5.3,60.4,10.2],
label: {
    show: true,
position: "right"
}
}
]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = function() {
myChart.resize();
};