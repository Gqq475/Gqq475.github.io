import React from 'react'
import SearchBtn from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

class Search extends React.Component {
  handelOpen(){
    this.refs.navbar.handleToggle();
  }

  handelInput(e){
    let x = e.target.value;
    this.props.change(x);
  
  }
  render () {

    let styles={
      root:{
        padding:'50px 10px',
        backgroundColor:'#00BCD4'
      },
      title:{
        color:'#fff',
        fontSize:'48px',
        fontWeight:'400',
        textAlign:'center'
      },
      span:{
        backgroundColor:'#000',
        position:'relative'
      },
      searchBtn:{
        color:'#fff',
        position:'absolute',
        bottom:'-5px',
        right:'10px'
      },
      search:{
        marginTop:'20px',
        textAlign:'center',
      },
      text:{
        width:'60%',
        maxWidth:'400px',
        fontSize:'20px'
      },
      underlineStyle:{
        borderColor:'#fff'
      },
      hintStyle:{
        color:'rgba(255,255,255,0.8)',
        fontSize:'20px'
      },
      inputStyle:{
        color:'#fff'
      }
    }
    return(
      <div style={styles.root}>
        <h1 style={styles.title}>ALL</h1>
        <div style={styles.search} className="clearfix">
          <span style={styles.span}><SearchBtn style={styles.searchBtn}/></span>
          <TextField
            hintText="搜索"
            underlineFocusStyle={styles.underlineStyle}
            hintStyle={styles.hintStyle}
            inputStyle={styles.inputStyle}
            style={styles.text}
            onChange={this.handelInput.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Search;
