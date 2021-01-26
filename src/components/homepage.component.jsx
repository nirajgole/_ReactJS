import React from "react";
import "./homepage.styles.scss";
function Homepage() {
  const myArray = [
    { title: "Hats", subtitle: "Shop Now" },
    { title: "Jackets", subtitle: "Shop Now" },
    { title: "Sneakers", subtitle: "Shop Now" },
    { title: "Women", subtitle: "Shop Now" },
    { title: "Men", subtitle: "Shop Now" },
  ];
  return (
    <div className="homepage">
      <div className="directory-menu">
        {myArray.map((obj) => (
          <div className="menu-item">
            <div className="content">
              <h1 className="title">{obj.title}</h1>
              <span className="subtitle">{obj.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
