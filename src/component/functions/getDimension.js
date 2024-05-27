import react ,{ useState, useEffect } from "react";

const GetDimension = () =>{

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.screen.width,
    dynamicHeight: window.innerHeight
  });

	const setDimension = () => {
    getDimension({
      dynamicWidth: window.screen.width,
      dynamicHeight: window.innerHeight
    })
  }

	useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  // console.log(screenSize)

  return {screenSize}
}

export default GetDimension