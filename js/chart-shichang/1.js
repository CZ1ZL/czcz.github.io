// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'),'essos');

// 指定图表的配置项和数据
var option = {
  title: {
    text: '2020-2022年全国电影总票房',
    left:'center',
    textStyle: {
fontSize: 20,
},
  },
  tooltip: {},
  legend: {
    data: ['年票房(亿元)','年同比变化'],
    top: '50' ,
  },
  xAxis: {
    data: ['2020年', '2021年', '2022年'],
   
axisTick: {
show: false
}
  },
  yAxis: [
{
type: 'value',
name: '年票房(亿元)',
min: 0,
max: 1000,
show: false
},
{
type: 'value',
name: '年同比变化',
min: -200,
max: 200,

show: false
}
],
  series: [
    {
      name: '年票房(亿元)',
      type: 'bar',
      data: [204,473,301],
      label: {
show: true
}
    },
    {
      name: '年同比变化',
      type: 'line',
      yAxisIndex: 1,
      data: [-68.2,131.5,-36.4],
      label: {
show: true,
formatter: '{c}%'
}
    }
    
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = function() {
myChart.resize();
};