// C:\Users\josep\OneDrive\Desktop\lpt-cra\server\client\src\components\NavLinksFoot.jsx
import React from "react";
import { connect } from "react-redux";
import Logo from "../assets/img/logo-white.svg";
import { Link } from 'react-router-dom';

const NavLinksFoot = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return null;
      case false:
        return (
          <div className="cta">
            <a href="/auth/google" className="btn btn--white btn--animated cta cta__request-footer">
              Request Event
            </a>
          </div>
        );
      default:
        return (
          <div className="cta">
            <a href="/api/logout" className="btn btn--white btn--animated cta cta__logout-footer">
              Logout
            </a>
          </div>
        );
    }
  };

  return (
    <nav className="logo">
      <Link to={auth ? "/prices" : "/"} className="logo logo__box-footer">
        <img src={Logo} alt="" className="logo__icon-footer" />
      </Link>
      {renderContent()}
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavLinksFoot);