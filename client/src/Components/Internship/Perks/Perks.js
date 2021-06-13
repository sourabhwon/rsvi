import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Perks.css";
import WFH from "./Images/1.png";
import Social from "./Images/2.png";
import PartTime from "./Images/3.png";
import Marketing from "./Images/4.png";
import LOR from "./Images/5.png";
import Certificate from "./Images/6.png";
import FlexibleHours from "./Images/7.png";

function Perks() {
  return (
    <React.Fragment>
      <body>
        <h1 class="heading ">PERKS</h1>

        <div class="container-fluid">
          <div class="row">
            {/* card1 */}
            <div class="card-main">
              <div class="card">
                <img src={WFH} class="card-img-top " alt="..." />
              </div>

              <div class="card-body">
                <h5 class="card-title text-center fw-bold ">WORK FROM HOME</h5>
                <p>You can work from anywhere in country.</p>
              </div>
            </div>

            {/* card2 */}
            <div class="card-main">
              <div class="card">
                <img src={PartTime} class="card-img-top " alt="..." />
              </div>

              <div class="card-body">
                 <h5 class="card-title text-center fw-bold ">PART-TIME</h5>
                <p> Have prior commitments, classes,or assingments? No problem!</p>
              </div>
            </div>

            {/* card3 */}
            <div class="card-main">
              <div class="card">
                <img src={FlexibleHours} class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title text-center fw-bold ">FLEXIBLE HOURS</h5>
                <p>You will require 3 hours a day but at your convenience.</p>
              </div>
            </div>

            {/* card4 */}
            <div class="card-main">
              <div class="card">
                <img src={Marketing} class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title text-center fw-bold ">
                  DEVELOP MARKETING SKILLS
                </h5>

                <p>
                  Develop crucial skills like poaching and interpersonal
                  communication,and persuasion.
                </p>
              </div>
            </div>

            {/* card5 */}
            <div class="card-main">
              <div class="card">
                <img src={Social} class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title text-center fw-bold ">
                  SOCIAL MEDIA SHOUTOUT
                </h5>

                <p>Get shoutout for your efforts</p>
              </div>
            </div>

            {/* card6 */}
            <div class="card-main">
              <div class="card">
                <img src={LOR} class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title text-center fw-bold ">
                  LETTER OF RECOMMENDATION
                </h5>

                <p>Have a chance to get a LOR from the president of the NGO.</p>
              </div>
            </div>

            {/* card7 */}
            <div class="card-main">
              <div class="card">
                <img src={Certificate} class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title text-center fw-bold ">
                  INTERNSHIP COMPLESION CERTIFICATE
                </h5>

                <p>get your internship complesion certificate.</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </React.Fragment>
  );
}

export default Perks;
