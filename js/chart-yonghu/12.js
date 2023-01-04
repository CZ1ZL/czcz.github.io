 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('main12'),'essos');

 // 指定图表的配置项和数据
 var option = {
   title: {
     text: '2021-2022年购票用户城市分布',
     left:'center',
     textStyle: {
 fontSize: 20,
},
   },
   tooltip: {},
   legend: {
     data: ['一线城市','二线城市','三线城市','四线城市'],
     top: '30' ,
   },
   xAxis: {
     show: false
    
   },
   yAxis:  [{
     data: ['2022年', '2021年'],
     axisTick: {
 show: false
}
   },
 ],
 
 

   series: [
   {
       name: '一线城市',
       type: 'bar',
       stack: 'Ad',
       data: [15,17],
       label: {
 show: true,
 formatter: '{c}%'
}
       
     },
     {
       name: '二线城市',
       type: 'bar',
       stack: 'Ad',
       data: [44,44],
       label: {
 show: true,
 formatter: '{c}%'
}
       
     },
     {
       name: '三线城市',
       type: 'bar',
       stack: 'Ad',
       data: [20,18],
       label: {
 show: true,
 formatter: '{c}%'
}
       
     },
     {
       name: '四线城市',
       type: 'bar',
       stack: 'Ad',
       data: [22,21],
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