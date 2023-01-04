 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('main16'),'essos');

 // 指定图表的配置项和数据
 var option = {
// Make gradient line here

title: [
{
 left: 'center',
 text: '2020-2022年工作日用户观影时段分布',
 textStyle: {
 fontSize: 20,
},
},
{
 top: '50%',
 left: 'center',
 text: '2020-2022年节假日用户观影时段分布',
 textStyle: {
 fontSize: 20,
},
 
}
],
legend: {
     data: ['2020年','2021年','2022年',],
     top: '265' ,
     left:150,
     
orient: 'vertical' ,
   },
tooltip: {
trigger: 'axis'
},
xAxis: [

{axisTick: {
 show: false
},
data: ['0', '1', '2','3', '4', '5','6', '7', '8','9', '10', '11','12', '13', '14','15', '16', '17','18', '19', '20','21', '22', '23'],
},
{axisTick: {
 show: false
},
data: ['0', '1', '2','3', '4', '5','6', '7', '8','9', '10', '11','12', '13', '14','15', '16', '17','18', '19', '20','21', '22', '23'],

 gridIndex: 1
}
],
yAxis: [
{max: 20,
 axisLabel: {
   formatter: '{value} %'
 }
},
{max: 20,
 axisLabel: {
   formatter: '{value} %'
 },
 gridIndex: 1
},

],
grid: [
{
 bottom: '60%'
},
{
 top: '60%'
}
],
series: [
{
 name: '2020年',
 type: 'line',
 showSymbol: false,
 data: ['1.2', '0', '0','0', '0', '0','0', '0', '0','1', '2.5', '2','2.5', '5', '7.5','6.8', '5.5', '5','8.5', '20', '15','7.6', '4.7', '2.2'],
 smooth: true,
},
{
 name: '2021年',
 type: 'line',
 showSymbol: false,
 data: ['1', '0', '0','0', '0', '0','0', '0', '0','1.5', '2.7', '2.1','2.7', '5.5', '8','7', '6', '5','8.5', '17.5', '15','8', '5', '2'],
 smooth: true,
},
{
 name: '2022年',
 type: 'line',
 showSymbol: false,
 data: ['1', '0', '0','0', '0', '0','0', '0', '0','1.5', '2.7', '2.1','2.7', '6', '9','7.5', '6.5', '5','8.5', '17.5', '15','7', '4', '1'],
 smooth: true,
},
{name: '2022年',
 type: 'line',
 showSymbol: false,
data: ['1.2', '0', '0','0', '0', '0','0', '0', '0','1', '2.5', '2','2.5', '5', '12','6.8', '5.5', '5','8.5', '11', '8.5','6', '3', '1'],
 smooth: true,
 xAxisIndex: 1,
 yAxisIndex: 1
},
{
  name: '2021年',
 type: 'line',
 showSymbol: false,
data: ['1.2', '0', '0','0', '0', '0','0', '0', '0','1.5', '3', '2.5','3', '4.8', '10.5','6.5', '5.3', '5.2','8.7', '11', '8.5','6.3', '3.3', '1.2'],
 smooth: true,
 xAxisIndex: 1,
 yAxisIndex: 1
},
{
  name: '2020年',
 type: 'line',
 showSymbol: false,
data: ['1.2', '0', '0','0', '0', '0','0', '0', '0','1', '2.2', '2','3', '4.8', '11','6.5', '5.6', '5.5','8.7', '12', '9','6.3', '3.3', '1.2'],
 smooth: true,
 xAxisIndex: 1,
 yAxisIndex: 1
}
]
};

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);
 window.onresize = function() {
myChart.resize();
};