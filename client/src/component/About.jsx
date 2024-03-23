import "./css/About.css";
import img1 from "../assets/images/Anuj.png";
import img2 from "../assets/images/Jitendra.png";
import img3 from "../assets/images/Harshit.png";
import aboutImg from "../assets/images/Vector Gif/About.gif";
import aboutImg1 from "../assets/images/Vector Gif/R.gif";
import aboutImg2 from "../assets/images/Vector Gif/tenor.gif";
import aboutHeroImg from "../assets/images/Others/aboutImg.png";
import '@fortawesome/fontawesome-free/css/all.css';
export default function About() {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
  return (
    <div>

      {/* About Hero Section */}
      <div className="About-Sec-Container">
        <div className="About-Hero">
          <div className="left-page">
            <h1>About Us</h1>
            <p className="fs-4">
              Kaiyuan is like a friendly community where people working on
              projects can come together. If you’re stuck or need advice, you
              can ask for help. And if you know something, you can share your
              knowledge with others. It’s all about supporting each other and
              building a helpful community. 🌟
              <br /> <br />
              Welcome to our open-source platform, where innovation knows no
              bounds and collaboration is key. Dive into our repository of
              code, where creativity flourishes and solutions come to life.
              Join our vibrant community of developers, enthusiasts, and
              visionaries, as we build the future together, one line at a time
            </p>
          </div>
          <div className="right-page" data-engine="three.js r149">
            <div className="container noselect">
              <div className="canvas">
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>
                <div id="card">
                  <img src={aboutHeroImg} id="propmpt" alt="aboutVectorImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Website Record Section */}
      <div className="Website-Record-Sec">
        <div className="container-page">
          <h2 className="Heading-Page">Website Record</h2>
          <div className="container-bx">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">No of Projects</p>
                  <p>Hover Me</p>
                  <h3 className="title">570+</h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <div className="about-gif">
                    <img src={aboutImg} alt="about-image" />
                  </div>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">No. of Pull Request</p>
                  <p>Hover Me</p>
                  <h3>
                    <b>850+</b>
                  </h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <div className="about-gif">
                    <img src={aboutImg1} alt="about-image" />
                  </div>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Pull Request</p>
                  <p>Hover Me</p>
                  <h3 className="title">850+</h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">Hello</p>
                  <div className="about-gif">
                    <img src={aboutImg2} alt="about-image" />
                  </div>
                  <p>Like me</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">No. of User</p>
                  <p>Hover Me</p>
                  <h3 className="title">870+</h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">Happy User</p>
                  <div className="about-gif">
                    <img src={aboutImg2} alt="about-image" />
                  </div>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contributor Section */}
      <div class="py-5 team3 bg-light">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h2 class="mb-3">Our Contributor</h2>
        {/* <h6 class="subtitle font-weight-normal">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6> */}
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="row">
          <div class="col-md-12">
            <img src={img1} alt="wrapkit" class="img-fluid" />
          </div>
          <div class="col-md-12">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Anuj Verma</h5>
              <h6 class="subtitle">B.tech(CS-AIML)</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="row">
          <div class="col-md-12 pro-pic">
            <img src={img2} alt="wrapkit" class="img-fluid" />
          </div>
          <div class="col-md-12">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Jitendra Kumar</h5>
              <h6 class="subtitle">B.tech(CS-AIML)</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="row">
          <div class="col-md-12 pro-pic">
            <img src={img3} alt="wrapkit" class="img-fluid" />
          </div>
          <div class="col-md-12">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Harshit Singh</h5>
              <h6 class="subtitle">B.tech(CS-AIML)</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* FAQ */}
      <div className="faq-section">
        <div className="container">
          <h2 className="Heading-Page">Frequent Asked Questions</h2>
          {/* <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fs-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#One"
                  aria-expanded="false"
                  aria-controls="One"
                >
                  Will a beginner, with absolutely no knowledge of github, gain
                  anything fruitful?
                </button>
              </h2>
              <div id="One" className="accordion-collapse collapse show">
                <div className="accordion-body fs-3">
                  Yeah, definitely. The organization is meant to assist the
                  beginners grow in the field of development. We’ll have distinct
                  projects appropriate both for beginners as well as the accolades
                  and thereby we’ll make sure that each and every participant gets
                  to learn something new from the projects he or she is
                  contributing for.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Two"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Are there any charges for registration?
                </button>
              </h2>
              <div id="Two" className="accordion-collapse collapse">
                <div className="accordion-body fs-5">
                  <p>
                    No, there are no fees associated with participation. It is
                    completely free of charge.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Three"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Is there a specific age requirement for participation?
                </button>
              </h2>
              <div id="Three" className="accordion-collapse collapse">
                <div className="accordion-body fs-5">
                  <p>
                    No, there are no age restrictions for joining GSSoC. All age
                    groups are welcome to participate.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Four"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What are the project requirements?
                </button>
              </h2>
              <div id="Four" className="accordion-collapse collapse">
                <div className="accordion-body fs-5">
                  Projects are not bound by specific conditions. Mentors can
                  propose ideas in their areas of expertise without restriction.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Five"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  As a beginner, where should we begin to contribute effectively
                  to projects?
                </button>
              </h2>
              <div id="Five" className="accordion-collapse collapse">
                <div className="accordion-body fs-5">
                  You can kickstart your journey by accessing the resources
                  available on our official website. We offer links to GitHub and
                  other development tools to ensure that everyone can contribute
                  effectively to the projects.
                </div>
              </div>
            </div>
          </div> */}
      <section>
        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Will a beginner, with absolutely no knowledge of github, gain
                  anything fruitful?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body fs-5">
              Yeah, definitely. The organization is meant to assist the
                  beginners grow in the field of development. We’ll have distinct
                  projects appropriate both for beginners as well as the accolades
                  and thereby we’ll make sure that each and every participant gets
                  to learn something new from the projects he or she is
                  contributing for.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Are there any charges for registration?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body fs-5">
                No, there are no fees associated with participation. It is completely free of charge.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Is there a specific age requirement for participation?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body fs-5">
                No, there are no age restrictions for joining GSSoC. All age groups are welcome to participate.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                What are the project requirements?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body fs-5">
                Projects are not bound by specific conditions. Mentors can propose ideas in their areas of expertise without restriction.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseive">
                As a beginner, where should we begin to contribute effectively to projects?
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body fs-5">
                You can kickstart your journey by accessing the resources available on our official website. We offer links to GitHub and other development tools to ensure that everyone can contribute effectively to the projects.
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
      {/* Info */}
      {/* <div className="info">
          <p className='fs-4'>&quot;Open source is a shared vision of building a community of similar -minded individuals. Together, we collaborate, innovate, and shape the future of technology with transparency and inclusivity at its core  write in more effective way&quot;</p>
        </div> */}

    </div>
  );
}
