import React from "react";
import danny from './img/danny_badass.jpeg';
import pizza from './img/pizza-slice.png';


function Home() {

    return (

    <div id="about">
        <div class="container"> 
          <div class="row">
            <div class="col-xs-12 col-md-6"> <img src={danny} class="img-responsive" alt=""/> </div>
            <div class="col-xs-12 col-md-6">
              <div class="about-text">
                <h2>About Us</h2>
                <h3>Badass Desinger with <em>Attitude</em></h3>
                <h3>Why Choose Us?</h3>
                <div class="list-style">
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      <li>We crush the competition</li>
                      <li>I will make your company look so good you will be eating Pizza for days</li>
                      <li>You see that bowTie? BadAss!</li>
                    </ul>
                  </div>
                 <img src={pizza} className="img-responsive pizza-logo" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>

    );

}

export default Home