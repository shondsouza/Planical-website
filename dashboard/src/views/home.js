import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'


import Navbar from '../components/navbar'
import Mark from '../components/mark'
import Card from '../components/card'
import Accordion from '../components/accordion'
import Includes from '../components/includes'
import Excludes from '../components/excludes'
import Review from '../components/review'
import Article from '../components/article'
import FAQ from '../components/faq'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Planical</title>
        <meta property="og:title" content="Planical" />
      </Helmet>
      <Navbar rootClassName="navbarroot-class-name"></Navbar>
      <section className="home-section10">
        <div className="home-hero">
          <div className="home-content1">
            <main className="home-main1">
              <header className="home-header10">
                <h1 className="home-heading10">
                Prioritize Your Mental Health
                </h1>
                <span className="home-caption1">
                Start improving your mental health and well-being today. Planical shows you how.
                </span>
              </header>
              <div className="home-buttons1">
                <div className="home-get-started1 button">
                  <span className="home-text10">Get started</span>
                </div>
                <div className="home-get-started2 button">
                  <span className="home-text11">View features</span>
                </div>
              </div>
            </main>
            <div className="home-highlight">
              <div className="home-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image10 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image11 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image12 avatar"
                />
              </div>
              <label className="home-caption2">
                Loved by 10,000+ people like you.
              </label>
            </div>
          </div>
          <div className="home-image13">
            <img
              alt="image"
              src=".\SectionImages\heroimage.png"
              className="home-image14"
            />
          </div>
          <div className="home-image15">
            <img
              alt="image"
              src="/SectionImages/heroimage.png"
              className="home-image16"
            />
          </div>
        </div>
      </section>
      <section className="home-section11">
        <h2 className="home-text12">
          Our doctors and therapists are here, 24/7.
        </h2>
        <div className="home-features1">
          <header className="feature feature-active home-feature1">
            <h3 className="home-text13">Urgent Care</h3>
            <p className="home-text14">Immediate help for urgent needs.</p>
          </header>
          <header className="feature home-feature2">
            <h3 className="home-text15">Chronic Care</h3>
            <p className="home-text16">Support for long-term wellness.</p>
          </header>
          <header className="feature home-feature3">
            <h3 className="home-text17">Mental Health</h3>
            <p className="home-text18">Therapy and care, anytime.</p>
          </header>
        </div>
        <div className="home-note1">
          <div className="home-content2">
            <main className="home-main2">
              <h2 className="home-heading11">
                Prioritize Your Mental Well-Being with Ease
              </h2>
              <p className="home-paragraph1">
                <span>
                Taking care of your mental health should be simple and accessible. 
                Our platform provides seamless access to professional consultations, personalized care, and the support you need to feel your best.
                Stay on top of your scheduled sessions, explore tailored resources, and take the next step toward emotional well-being with confidence.
                </span>
                <br></br>
                <br></br>
                <span>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae.
                </span>
                <br></br>
              </p>
            </main>
            <div className="home-explore-more">
              <p className="home-text24">Explore more -&gt;</p>
            </div>
          </div>
          <div className="home-image17">
            <img
              alt="image"
              src="/SectionImages/group 1490.png"
              className="home-image18"
            />
          </div>
        </div>
      </section>
      <section className="home-section12">
        <header className="home-header11">
          <h2 className="home-text25">How does this website help mental health?</h2>
          <span className="home-text26">
          The website connects users to mental health care and offers self-care resources and community support.
          </span>
        </header>
        <section className="home-note2">
          <div className="home-image19">
            <img
              alt="image"
              src="/SectionImages/group 1428.png"
              className="home-image20"
            />
          </div>
          <div className="home-content3">
            <div className="home-main3">
              <div className="home-caption3">
                <span className="section-head">Mind Matters</span>
              </div>
              <div className="home-heading12">
                <h2 className="section-heading">
                  We equip you with tools to boost your mental health and well-being.
                </h2>
                <p className="section-description">
                This website offers professional support, self-care resources, and a community to help you improve your mental health and well-being.                
                </p>
              </div>
            </div>
            <div className="home-get-started3 button">
              <span className="home-text27">Get started</span>
            </div>
          </div>
        </section>
        <section className="home-note3">
          <div className="home-image21">
            <img
              alt="image"
              src="/SectionImages/group 1499.png"
              className="home-image22"
            />
          </div>
          <div className="home-content4">
            <main className="home-main4">
              <header className="home-caption4">
                <span className="home-section14 section-head">
                Your Mental Wellness, Our Priority
                </span>
              </header>
              <main className="home-heading14">
                <header className="home-header12">
                  <h2 className="section-heading">
                    Great care, wherever you are
                  </h2>
                  <p className="section-description">
                  Get instant support from our AI-powered mental health assistant, designed to help you manage stress, anxiety, and emotional well-being anytime, anywhere.
                  </p>
                </header>
                <div className="home-checkmarks">
                  <Mark></Mark>
                  <Mark label="Personalized support tailored to your emotions"></Mark>
                  <Mark label="Evidence-based techniques for stress relief"></Mark>
                </div>
              </main>
            </main>
            <div className="home-get-started4 button">
              <span className="home-text28">Get started</span>
            </div>
          </div>
        </section>
      </section>
      <section className="home-section15">
        <header className="home-header13">
          <header className="home-left1">
            <span className="section-head">EXPERT CARE PROVIDERS</span>
            <h2 className="section-heading">
              <span>Meet our network</span>
              <br></br>
              <span>of licensed providers</span>
            </h2>
          </header>
          <div className="home-right1">
            <p className="home-paragraph4 section-description">
              Our carefully vetted network of mental health professionals ensures you receive high-quality, personalized
              care when you need it most. Each provider is fully licensed and committed to your wellbeing..
            </p>
          </div>
        </header>
        <main className="home-cards1">
          <Card
              header="24/7 Phone Support"
              description="Access immediate mental health support through our secure phone line. Licensed professionals available round-the-clock for your needs."
              icon="/Icons/group 1316.png"  // Phone icon
              rootClassName="cardroot-class-name"
          />
          <Card
              header="Global Online Access"
              description="Connect with mental health professionals from anywhere in the world through our secure web platform. Break down geographical barriers to care."
              icon="/Icons/group 1314.png"  // Globe/Internet icon
              rootClassName="cardroot-class-name1"
          />
          <Card
              header="Video Counseling"
              description="Experience face-to-face therapy from the comfort of your home. High-quality video sessions with licensed therapists on your schedule."
              icon="/Icons/group 1317.png"  // Video/Camera icon
              rootClassName="cardroot-class-name2"
          />
        </main>
      </section>
      <section className="home-section17">
        <div className="home-note4">
          <div className="home-image23">
            <img
                alt="image"
                src="/SectionImages/macbook.png"
                className="home-image24"
            />
          </div>
          <div className="home-content5">
            <div className="home-caption5">
              <span className="section-head">QUICK ACCESS GUIDE</span>
            </div>
            <div className="home-heading17">
              <div className="home-header14">
                <h2 className="section-heading">
                  Tips to get care, answers and advice faster
                </h2>
              </div>
              <Accordion rootClassName="accordionroot-class-name"></Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section19">
        <div className="home-cube1">
          <div className="home-top1 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main className="home-banner">
          <div className="home-header15">
            <h2 className="section-heading">
              Planical makes online doctor visits easier
            </h2>
            <p className="home-description1 section-description">
              Get instant mental health support through AI chat and connect with professionals anytime, anywhere.
            </p>
          </div>
          <div className="home-buttons2">
            <div className="home-get-started5 button">
              <span className="home-text32">Get started</span>
            </div>
            <div className="home-book-demo button">
              <span className="home-text33">Book a demo</span>
            </div>
          </div>
        </main>
      </section>
      <section className="home-section20">
        <div className="home-cube2">
          <div className="home-top2 side"></div>
          <div className="home-front2 side"></div>
          <div className="home-left3 side"></div>
        </div>
      </section>
      <section className="home-section22">
        <header className="home-header20">
          <header className="home-left5">
            <span className="section-head">SUPPORTING YOUR JOURNEY</span>
            <h2 className="home-heading24 section-heading">
              What users say about us
            </h2>
          </header>
          <div className="home-right3">
            <p className="home-paragraph6 section-description">
              Our platform provides a safe space where you can find support, understanding, and professional guidance on your path to mental wellness. Join thousands of others who have taken their first step towards better mental health..
            </p>
          </div>
        </header>
        <main className="home-cards2">
          <div className="home-container2">
            <Review rootClassName="reviewroot-class-name"></Review>
            <Review
                quote="I am a scientist, and science says mental health is important. Thanks to this platform, I can now tolerate Jethalal’s antics peacefully!"
                author="Krishnan Iyer "
                position="Scientist"
                avatarSrc="https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/30/896e647cfff76adbc5bcf1d22252cfa88b54c.jpg"
                rootClassName="reviewroot-class-name"
            />
          </div>
          <div className="home-container3">
            <Review
              quote="Discipline and mental health go hand in hand! This platform helps me stay calm even when Tapu Sena is up to mischief."
              author="Aatmaram Bhide"
              position="Teacher & Secretary of Gokuldham Society"
              avatarSrc="https://i.zoomtventertainment.com/story/Taarak_Mehta_Ka_Ooltah_Chashmah_February_20_Preview_0.jpg"
              rootClassName="reviewroot-class-name"
            />
            <Review
                quote="Jetha calls me ‘fire brigade,’ but even I get stressed sometimes! This platform has restored my mental balance—now even my boss’s scoldings feel light!"
                author="Taarak Mehta"
                position="Writer & Employee"
                avatarSrc="https://i.ytimg.com/vi/kNQlVGZ0fdE/sddefault.jpg"
                rootClassName="reviewroot-class-name"
            />
          </div>
          <div className="home-container4">
            <Review
                quote="He Maa, Mataji! This platform is amazing! Just like Garba refreshes me, it has refreshed my mind! Even Tapu’s papa is calmer now, right?"
                author="Daya Gada"
                position="Homemaker"
                avatarSrc="https://images.indianexpress.com/2022/05/disha-vakani-taarak-1200.jpg"
                rootClassName="reviewroot-class-name"
            />
            <Review
                quote="I’m still unmarried, but at least my stress is gone! This platform is the best cure for my tension. Whether I get married or not, at least I have mental peace"
                author="Popatlal Pandey"
                position="Senior Crime Reporter, Toofan Express"
                avatarSrc="https://static.toiimg.com/thumb/msid-111680912,width-400,resizemode-4/111680912.jpg"
                rootClassName="reviewroot-class-name"
            />
          </div>
        </main>
        <div className="home-view-more">
          <p className="home-text49">View more</p>
        </div>
      </section>
      <section className="home-section24">
        <header className="home-header21">
          <span className="section-head">Articles about us</span>
          <h2 className="home-heading25 section-heading">
            We’re the app on everyone’s lips
          </h2>
        </header>
        <main className="home-cards3">
          <Article rootClassName="articleroot-class-name"></Article>
          <Article
            header="techeu"
            specialHeader="eu"
            rootClassName="articleroot-class-name"
          ></Article>
          <Article
            header="sifted/"
            rootClassName="articleroot-class-name"
          ></Article>
        </main>
      </section>
      <section className="home-section26">
        <header className="home-header22">
          <span className="section-head">FAQ</span>
          <h2 className="home-heading26 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home-accordion">
          <FAQ rootClassName="fa-qroot-class-name"></FAQ>
        </main>
      </section>
      <section className="home-section28">
        <main className="home-content6">
          <header className="home-header23">
            <h2 className="home-heading27 section-heading">
              Stop searching online for medications and use Planical app!
            </h2>
            <div className="home-buttons3">
              <div className="home-ios button">
                <img
                  alt="image"
                  src="/Icons/apple.png"
                  className="home-icon1"
                />
                <span className="home-text50">Download for iOS</span>
              </div>
              <div className="home-android button">
                <img
                  alt="image"
                  src="/Icons/android.png"
                  className="home-icon2"
                />
                <span className="home-text51">Download for Android</span>
              </div>
            </div>
          </header>
          <img
            alt="image"
            src="/SectionImages/group 1505.png"
            className="home-image25"
          />
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content7">
          <main className="home-main-content">
            <div className="home-content8">
              <header className="home-main5">
                <div className="home-header24">
                  <img
                    alt="image"
                    src="/Branding/planical7012-ttpb.svg"
                    className="home-branding"
                  />
                  <span className="home-text52">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <img
                      alt="image"
                      src="/Icons/linkedin.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/Icons/instagram.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link3"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category1">
                  <div className="home-header25">
                    <span className="footer-header">Solutions</span>
                  </div>
                  <div className="home-links1">
                    <span className="footer-link">Responsive Web Design</span>
                    <span className="footer-link">Responsive Prototypes</span>
                    <span className="footer-link">Design to Code</span>
                    <span className="footer-link">Static Website Builder</span>
                    <span className="footer-link">
                      Static Website Generator
                    </span>
                  </div>
                </div>
                <div className="home-category2">
                  <div className="home-header26">
                    <span className="footer-header">Company</span>
                  </div>
                  <div className="home-links2">
                    <span className="footer-link">About</span>
                    <span className="footer-link">Team</span>
                    <span className="footer-link">News</span>
                    <span className="footer-link">Partners</span>
                    <span className="footer-link">Careers</span>
                    <span className="footer-link">Press &amp; Media</span>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright1">
              <span className="home-text66">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main6">
              <h1 className="home-heading28">Subscribe to our newsletter</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy4 button">
                  <span className="home-text67">-&gt;</span>
                  <span className="home-text68">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <section className="home-copyright2">
            <span className="home-text71">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <div className="home-container6">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
