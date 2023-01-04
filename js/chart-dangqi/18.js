 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('main18'),'essos');

 // 指定图表的配置项和数据
 var option = option = {
title: {
left: 'center',
 text: '2020-2022年月度票房(亿)',
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
data: ['十二月', '十一月', '十月', '九月', '八月', '七月', '六月', '五月', '四月', '三月','二月','一月' ]
},
series: [
{
 name: '2020年',
 type: 'bar',
 data: [37.7, 18.8, 63.6, 24.3,34.0, 2.2,0.1,0.1,0.1,0.1,0.1,22.4,],
  label: {
     show: true,
 position: "right"
}
},
{
 name: '2021年',
 type: 'bar',
 data: [27.1, 18.7, 75.8, 20.3, 20.5, 32.3,21.0,48.6,25,25,122.7,33.4],
 label: {
     show: true,
 position: "right"
}
},
{
 name: '2022年',
 type: 'bar',
 data: [15.6, 5.7, 21.4, 12.8, 37.1, 35.1,19.2,7.2,5.7,9.1,103.6,27.1],
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