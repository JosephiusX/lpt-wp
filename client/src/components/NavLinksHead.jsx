// C:\Users\josep\OneDrive\Desktop\lpt-cra\server\client\src\components\NavLinksHead.jsx
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo-white.svg";

const NavLinksHead = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return null;
      case false:
        return (
          <div className="cta">
            <a href="/auth/google" className="btn btn--white btn--animated cta__request">
              Request Event
            </a>
          </div>
        );
      default:
        return (
          <div className="cta">
            <a href="/api/logout" className="btn btn--white btn--animated cta__logout">
                Logout
            </a>
          </div>
        );
    }
  };

  return (
    <nav className="">
      <Link to={auth ? "/prices" : "/"} className="logo logo__box">
        <img src={Logo} alt="" className="logo__icon" />
      </Link>
      {renderContent()}
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavLinksHead);