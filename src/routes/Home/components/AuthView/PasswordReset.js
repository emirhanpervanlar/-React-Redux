import React from "react";

const PasswordReset = ({onViewChange}) =>(
  <div className="home_form">
    <form>
      <div className="form-row align-items-center">
        <div className="col-auto">
          <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Email"/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">Sıfırla</button>
        </div>
      </div>
    </form>
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
export default PasswordReset;
