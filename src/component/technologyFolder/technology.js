import {  animated } from "react-spring";
import { Link } from "react-router-dom";
import leaf from "../../images/leaf.png";
import brush from "../../images/brush.png";
import circle from "../../images/circle.png";
import SectionOne from "./sectionOne";
import SectionTwo from "../homeFolder/sectionTwo";
import SectionThree from "./sectionThree";
import FooterSection from "../homeFolder/footerSection";
import allData from "../../course.js";
import TechnologyFunctions from "../functions/technologyFunctions";
// import { useSelector } from 'react-redux'

const TecnologyBanner = (props) => {
  let location = props.location.aboutProps;
  const locationId = props.location.aboutId;

  let name;
  let data;
  let Course = allData.Course;
  let blog = allData.blog;
  if (
    location &&
    location.name !== "fromEnvironment" &&
    location.name !== "fromSkill"
  ) {
    const Course = allData.Course;
    Course.map((subject, index) => {
      if (subject.name === location.name) {
        data = subject;
        name = subject.name;
        // console.log(subject.name)
      }

      return data;
    });
  } else {
    const Course = allData.Technology;
    Course.map((subject, index) => {
      return( (data = subject) , (name = subject.name))
    });
  }

  const { container, leafimg, gearimg, brushimg, executeScroll, myRef } =
    TechnologyFunctions(location, locationId, name);

  return (
    <>
      <article className="technology-section">
        <animated.div className="technology-img2" style={gearimg}>
          <Link
            to={{
              pathname: "/",
              aboutProps: {
                name: "fromTechnology",
              },
            }}
          >
            <img className="gear-img" src={circle} alt="img"></img>
          </Link>
        </animated.div>

        <animated.div className="technology-banner" style={container}>
          <h1>{name}</h1>
          <animated.div className="technology-img1" style={leafimg}>
            <Link
              to={{
                pathname: "/Environment",
                aboutProps: {
                  name: "fromTechnology",
                },
              }}
            >
              <img src={leaf} alt="entesk"></img>
            </Link>
          </animated.div>

          <animated.div className="technology-img3" style={brushimg}>
            <Link
              to={{
                pathname: "/skill",
                aboutProps: {
                  name: "fromTechnology",
                },
              }}
            >
              <img src={brush} alt="entesk"></img>
            </Link>
          </animated.div>
        </animated.div>
      </article>
      <SectionOne data={data} executeScroll={executeScroll} />
      <SectionTwo data={Course} />
      <SectionThree data={data} myRef={myRef} blog={blog} />
      <FooterSection data={Course} />
    </>
  );
};

export default TecnologyBanner;
