 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('main4'),'essos');

 // 指定图表的配置项和数据
 var option = {
   title: {
     text: '2020-2022年平均票价/元',
     left:'center',
     textStyle: {
 fontSize: 20,
}
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
 type: 'value',
 show: false
}
],
   series: [
     {
       
       type: 'line',
       data: [37.0,40.3,42.1],
       smooth: true,
       label: {
 show: true
 
}
     }
     
   ]
 };

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);
 window.onresize = function() {
myChart.resize();
};