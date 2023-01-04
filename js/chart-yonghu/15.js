 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('main15'),'essos');

 // 指定图表的配置项和数据
 var option = {
   title: {
     text: '2020-2022年结伴观影用户分布',
     left:'center',
     textStyle: {
 fontSize: 20,
},
   },
   tooltip: {},
   legend: {
     data: ['单人观影','双人观影','多人观影'],
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
       name: '单人观影',
       type: 'bar',
       stack: 'Ad',
       data: [28,29,29],
       label: {
 show: true,
 formatter: '{c}%',

}
       
     },
     {
       name: '双人观影',
       type: 'bar',
       stack: 'Ad',
       data: [60,58,57],
       label: {
 show: true,
 formatter: '{c}%',

}
       
     },
     {
       name: '多人观影',
       type: 'bar',
       stack: 'Ad',
       data: [12,13,13],
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