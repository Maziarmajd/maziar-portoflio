import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading title={"Testimonial"} subHeading={"Recommendations"} />

      <section className='testimonial-section' id={props.id || ""}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel
              className='owl-carousel'
              id='testimonial-carousel'
              {...options}
            >
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' /> I taught Maziar in
                      North West CYF, in the Software Development Programme.
                      Maziar was a warm, creative, dedicated member of NW4, who
                      worked well in a team setting. A pleasure to work with! I
                      wish you all the best, Maziar{" "}
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src='img/Testimonial/Sally.png'
                      alt='no internet connection'
                    ></img>
                    <h5>Sally McGrath</h5>
                    <p>Director Of Education at CodeYourFuture</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' /> Maziar was an excellent
                      student and a pleasure to teach. He is hardworking, a
                      great team player and always willing to go above and
                      beyond. I taught him for both business admin and
                      accounting and he showed a great keenness for learning. He
                      is committed and determined to achieve. i would highly
                      recommend Maziar to any organisation.{" "}
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src='img/Testimonial/Angela.png'
                      alt='no internet connection'
                    ></img>
                    <h5>Angela Carr</h5>
                    <p>
                      Accountant, Teacher, Trainer and Schools Finance
                      professional
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' /> Maziar is a
                      hard-working, committed and fun person. As a trainee at
                      CodeYourFuture Maziar participated in class, always
                      speaking up when he had a question or wanted to share some
                      piece of knowledge he picked up along the way. His
                      enthusiasm was infectious! Maziar is a supportive, team
                      player and he always takes feedback and applies it as
                      necessary. To me, that's an incredible skill that he
                      consistently demonstrated on the course.{" "}
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src='img/Testimonial/Alicia.png'
                      alt='no internet connection'
                    ></img>
                    <h5>Alicia Easley</h5>
                    <p>CYF NW Programme Manager</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' /> Mazier was in one of
                      the cohorts while I was volunteering with CodeYourFuture.
                      I was always incredibly impressed with his internal drive
                      and tenacity. He was always great at bringing people at
                      CYF together and was a very valuable member of the cohort.
                      I would highly recommend Maziar to anyone looking to hire
                      a Junior dev as the interpersonal skills he has is
                      something you can't always teach. He would be an asset to
                      any company <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src='img/Testimonial/Parul.png'
                      alt='no internet connection'
                    ></img>
                    <h5>Parul Singh</h5>
                    <p>
                      Recruitment Marketing Partner and Neurodiversity Advocate
                      @ xDesign
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className='footer-image'>
        <img src='img/Testimonial/shape-bg.png' alt='Phot0 not responding' />
      </div>
    </div>
  );
}
