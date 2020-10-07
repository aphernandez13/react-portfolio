import React from "react";

function About() {
  return (
    <div>
      <div
        className="hero text-center"
        style={{
            height: "50vh",
          backgroundImage: `url(${process.env.PUBLIC_URL + "/coding.jpg"})`,
        }}
      >
        <h1>Official Portfolio</h1>
        <h2>They're the Good Boys and Girls</h2>
      </div>
      <div className="container" style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col col-md-12" >
            <h1>Hey There!</h1>
          </div>
        </div>
        <div className="row"> 
          <div className="col col-md-6">
            <p>
              Hi my name is Alfredo Pedroza and I am new to coding! Ive always been
              interested in working with computers and phones. I use to jailbreak my Iphones
              back in high school and it was amazing! A little bit about me is that I have
              2 kids and one amazing girlfriend and we just bought a beautiful home here 
              in east Mesa. I was born in Mexico and then moved here when i was 4 years old then 
              once I graduated high school i moved to Texas. I recently moved back to here to Arizona
              about 3 years ago and i could not be any happier! I am excited to see what type of career
              I get once I graduate from coding bootcamp.
            </p>
          </div>
        </div>





        
      </div>
    </div>
  );
}

export default About