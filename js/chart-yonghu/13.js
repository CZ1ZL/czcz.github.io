// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main13'),'essos');

// 指定图表的配置项和数据
var option = {
  title: {
    text: '2020-2022年观影频次用户分布',
    left:'center',
    textStyle: {
fontSize: 20,
},
  },
  tooltip: {},
  legend: {
    data: ['1次','2-5次','6-9次','10次及以上'],
    top: '35' ,
  },
  xAxis: {
    show: false
   
  },
  yAxis:  [{
    data: ['2022年', '2021年', '2022年'],
    axisTick: {
show: false
}
  },
],



  series: [
  {
      name: '1次',
      type: 'bar',
      stack: 'Ad',
      data: [60,55,60],
      label: {
show: true,
formatter: '{c}%',

}
      
    },
    {
      name: '2-5次',
      type: 'bar',
      stack: 'Ad',
      data: [36,37,35],
      label: {
show: true,
formatter: '{c}%',

}
      
    },
    {
      name: '6-9次',
      type: 'bar',
      stack: 'Ad',
      data: [3,5,4],
      label: {
show: true,
formatter: '{c}%',

}
      
    },
    {
      name: '10次及以上',
      type: 'bar',
      stack: 'Ad',
      data: [1,3,1],
      label: {
show: true,
formatter: '{c}%',

}
      
    },
    
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = function() {
myChart.resize();
};