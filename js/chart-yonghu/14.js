 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('main14'),'essos');

 // 指定图表的配置项和数据
 var option = {
   title: {
     text: '2020-2022年平均购票张数',
     left:'center',
     textStyle: {
 fontSize: 20,
},
   },
   tooltip: {},
 
   xAxis: {
     data: ['2020年', '2021年', '2022年'],
     axisTick: {
 show: false
}
   },
   yAxis: [
{
 show: false
},
],
   series: [
     {
       type: 'bar',
       data: [1.9,1.9,1.9],
       label: {
 show: true,
}
     },

     
     
   ]
 };

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);
 window.onresize = function() {
myChart.resize();
};