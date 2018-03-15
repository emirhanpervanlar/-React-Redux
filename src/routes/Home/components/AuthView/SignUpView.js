import React from "react";

const SignUpView = ({onViewChange}) =>(
  <div className="home_form">
    <form>
      <div className="form-row align-items-center">
        <div className="col-auto">
          <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Email"/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">Kayıt Ol</button>
        </div>
      </div>
    </form>
    <a href="" onClick={e=>{
      e.preventDefault();
      onViewChange(3);
    }}>Şifremi unuttum ?</a>
    <hr/>
    <div className="home_form_bottom">
      <p>Zaten Üyemisiniz ?</p>
      <p>O zaman neden burada vakit kaybediyoruz. Hadi <strong><a href="#" onClick={e=>{
        e.preventDefault();
        onViewChange(1);
      }} className="home_form_register">Giriş Yapalım</a></strong> !</p>
    </div>
  </div>
)
export default SignUpView;
