// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main7'),'essos');

// 指定图表的配置项和数据
var option = {
title: [


{
text: '2020-2022年国产进口影片对比',
left: 'center',
textStyle: {
fontSize: 20,
},
},
{
subtext: '2020年',
left: '16.67%',
top: '60%',
textAlign: 'center'
},
{
subtext: '2021年',
left: '50%',
top: '60%',
textAlign: 'center'
},
{
subtext: '2022年',
left: '83.33%',
top: '60%',
textAlign: 'center'
}

],
legend: {
    data: ['国产片          外环：票房占比','进口片          内环：数量占比'],
    top: '50' ,
    orient: 'vertical'
  },
series: [
{
type: 'pie',
radius: [33, '50%'],
center: ['50%', '50%'],
data: [
  { value: 84, name: '国产片          外环：票房占比' },
  { value: 16, name: '进口片          内环：数量占比' },
],
label: {
   formatter: '{c}%',
  position: 'inside',
},
left: 0,
right: '66.6667%',
top: -75,
bottom: 0
},
{
type: 'pie',
radius: [33, '50%'],
center: ['50%', '50%'],
data: [
  { value: 84, name: '国产片          外环：票房占比' },
  { value: 16, name: '进口片          内环：数量占比'},
],
label: {
   formatter: '{c}%',
  position: 'inside',
},
left: '33.3333%',
right: '33.3333%',
top: -75,
bottom: 0
},
{




type: 'pie',
radius: [33, '50%'],
center: ['50%', '50%'],
data: [
  { value: 85, name: '国产片          外环：票房占比' },
  { value: 15, name: '进口片          内环：数量占比'},
],
label: {
   formatter: '{c}%',
  position: 'inside',
},
left: '66.6667%',
right: 0,
top: -75 ,
bottom: 0
},
{

type: 'pie',
radius: [10, '30%'],
center: ['50%', '50%'],
data: [
  { value: 83, name: '国产片          外环：票房占比' },
  { value: 17, name: '进口片          内环：数量占比'},
],
label: {
   formatter: '{c}%',
  position: 'inside',
},
left: '66.6667%',
right: 0,
top: -75 ,
bottom: 0
},
{
type: 'pie',
radius: [10, '30%'],
center: ['50%', '50%'],
data: [
  { value: 88, name: '国产片          外环：票房占比' },
  { value: 12, name: '进口片          内环：数量占比'},
],
label: {
   formatter: '{c}%',
  position: 'inside',
},
left: '33.3333%',
right: '33.3333%',
top: -75,
bottom: 0
},
{
type: 'pie',
radius: [10, '30%'],
center: ['50%', '50%'],
data: [
  { value: 81, name: '国产片          外环：票房占比' },
  { value: 19, name: '进口片          内环：数量占比' },
],
label: {
   formatter: '{c}%',
  position: 'inside',
},
left: 0,
right: '66.6667%',
top: -75,
bottom: 0
}
]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = function() {
myChart.resize();
};