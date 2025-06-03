import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Environment from "./component/environmentFolder/environment";
import Technology from "./component/technologyFolder/technology";
import NavBar from "./component/NavFolder/Navigation";
import HomeBanner from "./component/homeFolder/homeBanner";
import Skill from "./component/skillFolder/skill";
import Products from "./component/products/product";
import Blog from "./component/blog/blog";
import About from "./component/About/about";
import EnvironmentCourse from "./component/environmentFolder/Course/Course";
import TexnologyCourse from "./component/technologyFolder/Course/Course";
import SkillCours from "./component/skillFolder/Course/Course";
import LoginAdmin from "./component/adminfolder/login/admin";
import Teacher from "./component/adminfolder/teacherFolder/Teacher";
import Admintimetable from "./component/adminfolder/admin/mainPanel/admintimetable";
import Blogs from "./component/adminfolder/blogfolder/blogs";
import { useDispatch } from "react-redux";
import { getUser } from "./reducer/blogReducer/action";
import Create from "./component/adminfolder/admin/create/create";
import Metatesk from "./component/metatesk/Metatesk";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetails from "./pages/ProductsPage/Details/ProductDetails";
import Category from "./pages/ProductsPage/Category/Category";
import SEO from "./component/Seo";

function App() {
  const [div, setdiv] = useState(10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [zIndex, setZindex] = useState(0);
  const [openSide, setopenSide] = useState(false);

  const handlerSideClose = function () {
    setZindex(0);
    setopenSide(false);
  };

  return (
    <Router>
      <div className="App">
        <SEO/>
        <>
          <NavBar
            component={HomeBanner}
            setZindex={setZindex}
            setopenSide={setopenSide}
            openSide={openSide}
            Create={{ div, setdiv }}
          />
          <Switch>
            <Route path="/environment" component={Environment} />
            <Route path="/technology" component={Technology} />
            <Route path="/skill" component={Skill} />
            <Route
              path="/CourseEnviroment/:name"
              component={EnvironmentCourse}
            />
            <Route path="/CourseTecnology/:name" component={TexnologyCourse} />
            <Route path="/CourseSkill/:name" component={SkillCours} />

            <Route path="/educate">
              <Products handlerSideClose={handlerSideClose} />
            </Route>

            <Route path="/blog/:name">
              <Blog handlerSideClose={handlerSideClose} />
            </Route>
            <Route exact path="/About">
              <About handlerSideClose={handlerSideClose} />
            </Route>
            <Route path="/məhsullar" exact>
            <ProductsPage handlerSideClose={handlerSideClose} />
          </Route>
          <Route path="/məhsullar/:id" component={ProductDetails} />
            <Route path="/category">
              <Category handlerSideClose={handlerSideClose} />
            </Route>
            {/* <Route path="/basket">
              <BasketPage handlerSideClose={handlerSideClose} />
            </Route> */}

            <Route path="/login">
              <LoginAdmin />
            </Route>
            <Route path="/adminTimetable">
              <Admintimetable />
            </Route>
            <Route path="/teacher">
              <Teacher />
            </Route>
            <Route path="/Create">
              <Create Create={{ div, setdiv }} />
            </Route>
            {/* <Route path="/metatesk">
              <Metatesk />
            </Route> */}
            <Route path="/adminBlogs">
              <Blogs />
            </Route>
            <Route path="/Createblog/:id">
              <>
                <h1> hgh</h1>
              </>
            </Route>

            <HomeBanner
              path="/"
              handlerSideClose={handlerSideClose}
              zIndex={zIndex}
            />
          </Switch>
        </>
      </div>
    </Router>
  );
}

export default App;
