import React from 'react';
import {Link} from 'react-router';


class Header extends React.Component{

  constructor(){
    super();

  }


  render(){
    return (
      <header>
        <nav className="container navbar navbar-expand-lg justify-content-between">
          <a className="navbar-brand" href="#">Filmyorumlari.org</a>

          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" activeClassName="active" className="nav-link">Anasayfa</Link>
              </li>
              <li className="nav-item">
                <Link to="/hakkimizda" activeClassName="active" className="nav-link">Hakkımızda</Link>
              </li>
              <li className="nav-item">
                <Link to="/iletisim" activeClassName="active" className="nav-link">İletişim</Link>
              </li>
            </ul>
          </div>

        </nav>
      </header>
    )
  }
}



export default Header;
