import React, { PropTypes } from 'react';
import echarts from 'echarts';
class Echart extends React.Component {
  componentDidMount(){
    let myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title:{
        text:'我的各项技能展示',
        left:'center'
      },
       color: ['#3398DB'],
       tooltip : {
           trigger: 'axis',
           axisPointer : {            // 坐标轴指示器，坐标轴触发有效
               type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
           }
       },
       grid: {
           left: '3%',
           right: '4%',
           bottom: '3%',
           containLabel: true
       },
       xAxis : [
           {
               type : 'category',
               data : ['HTML', 'CSS', 'JS', 'NODE', 'REACT', 'PS'],
               axisTick: {
                   alignWithLabel: true
               }
           }
       ],
       yAxis : [
           {
               type : 'value',
               name:'百分数（%）'
           }
       ],
       series : [
           {
               name:'技能熟练度',
               type:'bar',
               barWidth: '60%',
               data:[90, 92, 80, 75, 75, 80]
           }
       ]
    })
  }
  render () {

    let styles={
      width:'80%',
      height:'400px',
      margin:'0 auto'
    }
    return(
      <div>
       <div id="main" style={styles}></div>
      </div>
    )
  }
}

export default Echart;
