import React from "react";
import { connect } from 'react-redux';
import { userInit } from "store/userReducer";

class LoginView extends React.Component{

  constructor(){
    super();
    this.state = {
      email : "",
      password : ""
    }
  }

  emailChanged(e){
    this.setState({
      email : e.target.value
    })  }
  passwordChanged(e){
    this.setState({
      password : e.target.value
    })
  }

  onUserClick(){
    console.log(this.state)
    const user = {
      name : "Emirhan Pervanlar",
      email : "pervanalremirhan@gmail.com",
      age : 23,
      gender : "male"
    }

    this.props.loginUserData(user);

  }

  render(){
    const onViewChange = this.props.onViewChange;
    if(this.props.userData.name){
      return <div className="home_form">LOGIN OLDU</div>
    }else{
      return(
        <div className="home_form">
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <input type="text" className="form-control mb-2" value={this.state.email} onChange={this.emailChanged.bind(this)} id="inlineFormInput" placeholder="Email"/>
              </div>
              <div className="col-auto">
                <input type="password" className="form-control mb-2" value={this.state.password}  onChange={this.passwordChanged.bind(this)} id="inlineFormInput" placeholder="Şifre"/>
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-primary mb-2" onClick={this.onUserClick.bind(this)}>Giriş</button>
              </div>
            </div>
          </form>
          <a href="" onClick={e=>{
            e.preventDefault();
            onViewChange(3);
          }}>Şifremi unuttum ?</a>
          <hr/>
          <div className="home_form_bottom">
            <p>Henüz üye olmadınız mı ?</p>
            <p>Çok şey kaçırıyorsun. Hadi <strong><a href="#" onClick={e=>{
              e.preventDefault();
              onViewChange(2);
            }} className="home_form_register">Hemen Üye Ol</a></strong> !</p>
          </div>
        </div>
      )
    }

  }
}

const mapStateToProps = (state) =>{
  return{
    userData : state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    loginUserData : (user) => dispatch(userInit(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginView)
// export default LoginView;
