import React from "react";
import MultipleBurgers from "../assets/backGforBurWeb.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultipleBurgers})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tincidunt ornare molestie. Quisque gravida ac ligula id egestas. Cras
          euismod, ex in blandit scelerisque, purus justo sollicitudin mauris,
          in ornare sem nibh in urna. Ut tristique elit urna, sed vestibulum ex
          feugiat ut. Sed sed porta augue. Suspendisse in maximus erat. Nullam
          lorem mi, tristique ac sollicitudin vel, vestibulum vitae tortor. Nam
          sit amet rhoncus ante, id cursus mauris. Nam tellus felis, semper
          vitae ipsum at, lacinia venenatis neque.
        </p>

        <p>
          Sed faucibus convallis dapibus. Vestibulum ac auctor nulla, a auctor
          enim. Morbi eget pharetra enim. Nulla vestibulum nunc vitae nibh
          aliquam finibus in mollis felis. Integer sit amet rhoncus diam.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin ex elit, lobortis placerat mollis vitae,
          bibendum eget velit. In hac habitasse platea dictumst. Aliquam erat
          volutpat. Morbi consectetur sapien id lectus auctor, a aliquam justo
          tincidunt.
        </p>
      </div>
    </div>
  );
}

export default About;
