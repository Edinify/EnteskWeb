import { React, useState, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import circle from "../../images/circle.png";
import leaf from "../../images/leaf.png";
import brush from "../../images/brush.png";
import { Link, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import { FaBars, FaStream } from "react-icons/fa";
import GetDimension from "../functions/getDimension";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { BASKET_ACTION_TYPE } from "../../reducer/actionType";

const NavBar = ({ setZindex, setopenSide, openSide, Create }) => {
  const { setdiv } = Create;
  const dispatch = useDispatch();
  const history = useHistory();
  let admin = false;
  const { screenSize } = GetDimension();
  const [y, setY] = useState(window.scrollY);
  const [count, setCount] = useState(false);
  const [scroll, setScroll] = useState();
  const { innerWidth: width } = window;
  const location = useLocation();

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    dispatch({ type: BASKET_ACTION_TYPE.GET_BASKET_DATA, payload: storedBasket });
  }, [dispatch]);

  const {basket} = useSelector((state) => state.basket);

  console.log(basket,"basket")


  // logo icon animation
  const sideAnimation = useSpring({
    to: [
      {
        right:
          screenSize.dynamicWidth < 1199
            ? openSide
              ? "0%"
              : "-50%"
            : openSide
            ? "-20%"
            : "-50%",
      },
    ],
    from: { right: openSide ? "-50%" : "-50%" },
  });

  //  nav menu animation
  const sideanimation = useSpring({
    to: [
      {
        left:
          location.pathname === "/"
            ? window.scrollY === 0
              ? "-12%"
              : "1%"
            : "1%",
      },
    ],
    from: { left: "-5%" },
    config: {
      duration: 500,
    },
  });

  // three section icon animation
  const enteskStyle = useSpring({
    to: [
      {
        top:
          window.scrollY > 200 && location.pathname === "/" ? "0px" : "100px",
      },
    ],
    from: { top: location.pathname === "/" ? "0px" : "100px" },
    config: {
      duration: location.pathname === "/" ? 600 : 600,
    },
  });

  // burger icon animation
  const burgerAnimation = useSpring({
    to: [
      {
        right:
          window.scrollY > 200 && location.pathname === "/" ? "0px" : "-100px",
      },
    ],
    from: { right: location.pathname === "/" ? "0px" : "-100px" },
    config: {
      duration: location.pathname === "/" ? 500 : 500,
    },
  });

  // burger menu animation
  const navMenuAnimation = useSpring({
    to: [
      {
        bottom:
          window.scrollY > 200 && location.pathname === "/" ? "100px" : "0px",
      },
    ],
    from: { bottom: location.pathname === "/" ? "100px" : "0px" },
    config: {
      duration: location.pathname === "/" ? 600 : 600,
    },
  });

  // log out----
  const logOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handlerScroll = () => {
    window.scrollTo(0, 0);
  };

  const handlerSideOpen = function () {
    setZindex(-5);
    setopenSide(true);
  };

  const handlerSideClose = function () {
    setZindex(0);
    setopenSide(false);
  };

  useEffect(() => {
    setopenSide(false);
  }, [location, setopenSide]);

  // //
  useEffect(() => {
    if (width <= 2300 && width >= 1800) {
      setScroll(700);
    } else if (width <= 1800 && width >= 1400) {
      setScroll(500);
    } else if (width <= 1400 && width >= 1199) {
      setScroll(500);
    } else if (width <= 1199 && width >= 768) {
      setScroll(400);
    } else if (width <= 768 && width >= 400) {
      setScroll(200);
    } else if (width <= 400 && width >= 320) {
      setScroll(200);
    }
  }, [width]);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY && scroll > y) {
        setCount(false);

        // console.log("scrolling up");
      } else if (y < window.scrollY && scroll < y) {
        setCount(true);

        // console.log("scrolling down");
      }
      setY(window.scrollY);
    },
    [y, scroll]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation, count, y]);

  let style;

  // const studentname = name;

  if (location.pathname === "/gallery") {
    style = {
      display: "none",
    };
  }

  let profile;
  if (
    JSON.parse(localStorage.getItem("profile")) &&
    JSON.parse(localStorage.getItem("profile")).token
  ) {
    admin = true;
    profile = JSON.parse(localStorage.getItem("profile"));
  }

  // notification

  const [NotificationBoolean, setNotification] = useState(false);
  const notificationState = useSelector(
    (state) => state.studentReducer.birthDay
  );
  let state = useSelector((state) => state.timetableReducer.finishedClass);
  return (
    <>
      <article className="stick-class" style={style}>
        <Link to="/">
          <animated.svg
            style={sideanimation}
            onClick={handlerScroll}
            className="logo-image"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 808.91 808.91"
          >
            <defs>
              <style>{`.cls-1{fill:#55cbf9;}.cls-2{fill:#fbb116;}`}</style>
            </defs>
            <path
              id="Path_1"
              data-name="Path 1"
              className="cls-1"
              d="M500,892.45c-224.07,0-406.16-183.14-404.44-407.61,1.68-220,181.3-399.6,401.28-401.28C721.31,81.83,904.45,263.93,904.45,488h0a61.16,61.16,0,0,1-61.16,61.16H501.47c-33.17,0-61.41-25.78-62.59-58.93a61.16,61.16,0,0,1,58.89-63.35c.74,0,1.49,0,2.23,0H683.91c48.76,0,78.06-54.37,51-94.94a282.1,282.1,0,0,0-237.45-126c-155.5,1.37-281.66,130.47-279.57,286C220,645.31,345.17,769.58,499,770.13c29.6.1,55.74,20.42,61.11,49.53A61.19,61.19,0,0,1,500,892.45Z"
              transform="translate(-95.55 -83.55)"
            />
            <path
              id="Path_2"
              data-name="Path 2"
              className="cls-2"
              d="M904.45,488h0c0-204.26-152.2-373.61-349.14-400.66-195.57,27-347.64,195.16-349.2,397.5-1.51,196.93,138.48,362,324.15,399.59a61.21,61.21,0,0,0,29.83-64.77c-5.36-29.11-31.51-49.42-61.11-49.53-153.81-.55-279-124.82-281.08-278.28-2.09-155.5,124.06-284.59,279.57-286a282.72,282.72,0,0,1,57.89,5.48A281.67,281.67,0,0,1,845.47,331.89c27,40.58-2.25,94.94-51,94.94H610.55A61.17,61.17,0,0,0,549.39,488c0,.74,0,1.49,0,2.23,1.18,33.14,29.42,58.93,62.59,58.93H843.28A61.17,61.17,0,0,0,904.45,488Z"
              transform="translate(-95.55 -83.55)"
            />
          </animated.svg>
        </Link>

        <div className="nav-main-menu">
          {admin ? (
            <>
              {profile.superAdmin.role !== 1 ? (
                <div className="nav-menu admin-nav">
                  <ul className="ul-nav">
                    <li>Welcome {profile.superAdmin.name}</li>
                    <li>
                      <Link
                        onClick={() => {
                          logOut();
                        }}
                        to={{ pathname: "/login" }}
                      >
                        logOut
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="nav-menu admin-nav">
                  <ul className="ul-nav">
                    <li>Welcome {profile.superAdmin.name}</li>
                    <li>
                      <Link to="/adminTimetable">main Panel</Link>
                    </li>
                    <li>
                      <Link to="/Create">Create</Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          logOut();
                        }}
                        to={{ pathname: "/login" }}
                      >
                        logOut
                      </Link>
                    </li>
                    <li
                      onClick={() =>
                        NotificationBoolean
                          ? setNotification(false)
                          : setNotification(true)
                      }
                    >
                      {NotificationBoolean && (
                        <div>
                          <p
                            onClick={() => {
                              history.push("/Create");
                              setdiv(2);
                            }}
                          >
                            {" "}
                            <b>{state.length}</b> finished student class{" "}
                          </p>
                          <p
                            onClick={() => {
                              history.push("/Create");
                              setdiv(2);
                            }}
                          >
                            {" "}
                            <b>{notificationState.length}</b> student birth Day{" "}
                          </p>
                        </div>
                      )}

                      <span>
                        {state.length > 0 && notificationState.length > 0
                          ? notificationState.length + state.length
                          : state.length > 0
                          ? state.length
                          : notificationState.length > 0
                          ? notificationState.length
                          : 0}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                      </svg>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
              <animated.div className="entesk" style={enteskStyle}>
                <Link
                  to={{
                    pathname: "/environment",
                    aboutId: {
                      id: "fromNav-environment",
                    },
                  }}
                >
                  <img src={leaf} alt="img" className=""></img>
                </Link>

                <Link
                  to={{
                    pathname: "/technology",
                    aboutId: {
                      id: "fromNav-environment",
                    },
                  }}
                >
                  <img src={circle} alt="img" className="centerimg"></img>
                </Link>

                <Link
                  to={{
                    pathname: "/skill",
                    aboutId: {
                      id: "fromNav-skill",
                    },
                  }}
                >
                  <img src={brush} alt="img"></img>
                </Link>
              </animated.div>

              <animated.div className="desktopBurger" style={burgerAnimation}>
                <button className="main-burger" onClick={handlerSideOpen}>
                  <FaBars />
                </button>
              </animated.div>

              {/* top navication */}
              <animated.div style={navMenuAnimation} className="nav-menu">
                <ul className="ul-nav">
                  <li>
                    <Link
                      to={{
                        pathname: "/",
                        aboutProps: {
                          name: "fromNavication",
                        },
                      }}
                      style={
                        location.pathname === "/"
                          ? { borderBottom: "1px solid white" }
                          : { border: "unset" }
                      }
                    >
                      ana səhifə
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.metatesk.co/"> metatesk </a>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/educate",
                        aboutProps: {
                          name: "fromNavication",
                        },
                      }}
                      style={
                        location.pathname === "/educate"
                          ? { borderBottom: "1px solid white" }
                          : { borderBottom: "unset" }
                      }
                    >
                      tədris
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/About",
                        aboutProps: {
                          name: "",
                        },
                      }}
                      style={
                        location.pathname === "/About"
                          ? { borderBottom: "1px solid white" }
                          : { borderBottom: "unset" }
                      }
                    >
                      haqqımızda
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={{
                        pathname: "/",
                        aboutProps: {
                          name: "toAbout",
                        },
                      }}
                    >
                      əlaqə
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      to={{
                        pathname: "/məhsullar",
                        aboutProps: {
                          name: "",
                        },
                      }}
                    >
                      məhsullar
                    </Link>
                  </li> */}
                  <li
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <div className="basket-icon">
                    {/* <Link  to={{
                        pathname: "/basket",
                        aboutProps: {
                          name: "",
                        },
                      }} > <FaBasketShopping />
                      <span className="basket-count">
                        {basket?.length ? basket?.length : ""}
                      </span>
                      </Link>  */}
                    </div>
                  </li>
                </ul>
              </animated.div>

              {/* right side navication */}
              <animated.div style={sideAnimation} className="sidebar">
                <button className="side-burger" onClick={handlerSideClose}>
                  <FaStream />
                </button>

                <ul>
                  <li>
                    <Link
                      to={{
                        pathname: "/",
                        aboutProps: {
                          name: "fromNavication",
                        },
                      }}
                      style={
                        location.pathname === "/"
                          ? { borderBottom: "1px solid white" }
                          : { borderBottom: "unset" }
                      }
                    >
                      ana səhifə
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.metatesk.co/"> metatesk </a>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/educate",
                        aboutProps: {
                          name: "fromNavication",
                        },
                      }}
                    >
                      tədris
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/About",
                        aboutProps: {
                          name: "",
                        },
                      }}
                    >
                      haqqımızda
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/",
                        aboutProps: {
                          name: "toAbout",
                        },
                      }}
                    >
                      əlaqə
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to={{
                        pathname: "/məhsullar",
                        aboutProps: {
                          name: "",
                        },
                      }}
                    >
                      məhsullar
                    </Link>
                  </li> */}
                </ul>
              </animated.div>
            </>
          )}

          <MediaQuery maxDeviceWidth={1199}>
            <button className="main-burger" onClick={handlerSideOpen}>
              <FaBars />
            </button>
          </MediaQuery>
        </div>
      </article>

      <MediaQuery maxDeviceWidth={1199}>
        <animated.div style={sideAnimation} className="sidebar">
          <button className="side-burger" onClick={handlerSideClose}>
            <FaStream />
          </button>

          {admin ? (
            <>
              {profile.superAdmin.role !== 1 ? (
                <div className="nav-menu admin-nav">
                  <ul className="ul-nav">
                    <li>
                      <Link
                        onClick={() => {
                          logOut();
                        }}
                        to={{ pathname: "/login" }}
                      >
                        logOut
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="nav-menu admin-nav">
                  <ul className="ul-nav">
                    <li>Welcome {profile.superAdmin.name}</li>
                    <li>
                      <Link to="/adminTimetable">main Panel</Link>
                    </li>
                    <li>
                      <Link to="/Create">Create</Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          logOut();
                        }}
                        to={{ pathname: "/login" }}
                      >
                        logOut
                      </Link>
                    </li>
                    <li
                      onClick={() =>
                        NotificationBoolean
                          ? setNotification(false)
                          : setNotification(true)
                      }
                    >
                      <span>
                        {state.length > 0 && notificationState.length > 0
                          ? notificationState.length + state.length
                          : state.length > 0
                          ? state.length
                          : notificationState.length > 0
                          ? notificationState.length
                          : 0}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                      </svg>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <ul>
              <li>
                <Link
                  to={{
                    pathname: "/",
                    aboutProps: {
                      name: "fromNavication",
                    },
                  }}
                >
                  ana səhifə
                </Link>
              </li>
              <li>
                <a href="https://www.metatesk.co/"> metatesk </a>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/educate",
                    aboutProps: {
                      name: "fromNavication",
                    },
                  }}
                >
                  tədris
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/About",
                    aboutProps: {
                      name: "",
                    },
                  }}
                >
                  haqqımızda
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/",
                    aboutProps: {
                      name: "toAbout",
                    },
                  }}
                >
                  əlaqə
                </Link>
              </li>
              {/* <li>
                <Link
                  to={{
                    pathname: "/məhsullar",
                    aboutProps: {
                      name: "",
                    },
                  }}
                >
                  məhsullar
                </Link>
              </li> */}
            </ul>
          )}
        </animated.div>
      </MediaQuery>
    </>
  );
};

export default NavBar;
