 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('main11'),'essos');

 // 指定图表的配置项和数据
 var option = {
   title: {
     text: '2022年购票用户分布',
     left:'center',
     textStyle: {
 fontSize: 20,
},
   },
   tooltip: {},
   legend: {
     data: ['男性(44%)','女性(56%)'],
     top: '30' ,
   },
   xAxis: {
     data: ['青少年', '20-24岁', '25-29岁','30-34岁','35-39岁','40岁以上'],
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
       name: '男性(44%)',
       type: 'bar',
       data: [2,9,13,9,6,6],
       label: {
 show: true,
 formatter: '{c}%'
}
     },
     {
       name: '女性(56%)',
       type: 'bar',
       data: [3,12,15,11,7,8],
       label: {
 show: true,
 formatter: '{c}%'
}
     },
     
     
   ]
 };

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);
 window.onresize = function() {
myChart.resize();
};