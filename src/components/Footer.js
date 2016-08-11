import React from 'react'


class Footer extends React.Component {
  render () {
    let styles={
      root:{
        textAlign:'center',
        color:'#fff',
        backgroundColor:'#212121',
        padding:'30px 10px'
      },
      img:{
        width:'40%',
        marginTop:'20px',
        maxWidth:'200px'
      }
    }
    return(
      <div style={styles.root}>
        <p>更多信息，请添加我的微信</p>
        <p>微信号：<b>qad11110000</b></p>
        <img src="https://github.com/Gqq475/Gqq475.github.io/blob/master/src/images/aboutme.jpg?raw=true"  style={styles.img}/>
      </div>
    )
  }
}

export default Footer;
