import React, { useState } from "react";
import "./login.css";
// import {Outlet} from "react-router-dom"

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.password) return null;
  };
  return (
    <div className="login-modal">
      <div className="login-modal-container">
        <div className="login-modal-header">
          <ul>
            <li
              className={activeTab === "register" ? "login-active" : ""}
              onClick={() => handleTabClick("register")}
            >
              Qeydiyyatdan keç
            </li>
            <li
              className={activeTab === "login" ? "register-active" : ""}
              onClick={() => handleTabClick("login")}
            >
              Daxil ol
            </li>
          </ul>
        </div>
        <div className="login-modal-content">
          {activeTab === "login" && (
            <>
            <form onSubmit={handleSubmit} className="login-basket-form">
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                placeholder="İstifadəçi adı daxil edin"
              />
              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Parol daxil edin"
              />
              <div className="login-submit-btn">
                <button type="submit">Daxil ol</button>
              </div>
             
            </form>
             <div className="login-footer">
                <span>Hesabınız yoxdur?</span>
                <span onClick={()=>setActiveTab("register")} >qeydiyyatdan keç</span>
              </div>
            </>
          )}
          {activeTab === "register" && (
            <>
            <form onSubmit={handleSubmit} className="register-form">
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                placeholder="İstifadəçi adı daxil edin"
              />
              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Parol daxil edin"
              />
              <div className="register-submit-btn">
                <button type="submit">Qeydiyyatdan keç</button>
              </div>
             
            </form>
             <div className="login-footer">
                <span>Hesabınız var?</span>
                <span onClick={()=>setActiveTab("login")} >daxil ol</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
