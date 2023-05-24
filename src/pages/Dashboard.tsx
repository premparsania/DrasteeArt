import React from "react";
import { Footer, ImgSlider, MainCardEven, MainCardOdd } from "../components";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main className="overflow-hidden">
      <ImgSlider />
      <MainCardOdd Img="/images/Border/B-1.PNG" link="/Border" />
      <MainCardEven Img="/images/columm/C-1.PNG" link="/Columm" />
      <MainCardOdd Img="/images/Corner Design/CD-1.PNG" link="CornerDesign" />
      <MainCardEven Img="/images/Free Hand Design/FH-1.PNG" link="/Gilta" />
      <MainCardOdd Img="/images/Gilta/G-1.PNG" link="/HandDesign" />
      <Footer />
    </main>
  );
}

export default Dashboard;
