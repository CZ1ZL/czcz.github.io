// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main6'),'essos');

// 指定图表的配置项和数据
var option = {
  title: {
    text: '2020-2022年上映影片数',
    left:'center',
    textStyle: {
fontSize: 20,
},
  },
  tooltip: {},
  legend: {
    data: ['国产片','进口片'],
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
show: false
}
],
  series: [
    {
      name: '国产片',
      type: 'bar',
      stack: 'Ad',
      data: [325,607,326],
      label: {
  show: true,
  position: 'top',
  formatter: '总{c}'
},
      
    },
    {
      name: '进口片',
      type: 'bar',
      stack: 'Ad',
      data: [30,60,30],
      
    }
    
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = function() {
myChart.resize();
};