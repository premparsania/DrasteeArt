import React from "react";
import { Footer, ImgSlider, MainCardEven, MainCardOdd } from "../components";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main className="overflow-hidden">
      <div className="mb-10">
      <ImgSlider />
      </div>
      <MainCardOdd Img="/images/Border/B-1.PNG" link="/Border" Title="DECORATIVE BORDER" />
      <MainCardEven Img="/images/columm/C-1.PNG" link="/Columm" Title="DECORATIVE COLUMNS" />
      <MainCardOdd Img="/images/Corner Design/CD-1.PNG" link="/CornerDesign" Title="DECORATIVE CORNER AND BORDERS"/>
      <MainCardEven Img="/images/Free Hand Design/FH-1.PNG" link="/Gilta" Title="DECORATIVE GILTA" />
      <MainCardOdd Img="/images/Gilta/G-1.PNG" link="/HandDesign" Title="DECORATIVE CEILING AND OTHER DESIGNS"/>
      <Footer />
    </main>
  );
}

export default Dashboard;
