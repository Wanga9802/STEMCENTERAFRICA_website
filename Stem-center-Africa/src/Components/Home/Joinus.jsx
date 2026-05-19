import '../../Styles/Joinus.css'
import pythonImg from '../../assets/python.jpg'
import scratchImg from '../../assets/scratch.jpg'
import roboticsImg from '../../assets/Robotics.jpg'
import arduinoImg from '../../assets/ARDUINO.jpg'

function Joinus() {
  return (
    <section className='join-section'>
      <div className="join-container">

        {/* ── Intro heading block (Moringa-style) ── */}
        <div className="join-intro">
          <h2 className="join-intro-title">
            Join the STEM Center Africa Community of Innovators and Tech Leaders
          </h2>
          <p className="join-intro-body">
            At STEM Center Africa, you're not just signing up for a course — you're joining a
            dynamic, thriving community of young innovators and professionals. Whether you're a
            beginner or an experienced tech enthusiast, our community is here to support you to
            Discover, Grow, and Transform your future in Tech.
          </p>
        </div>

        {/* Top tagline */}
        <p className="join-tagline">
          Stay up to date with upcoming events, free learning materials, news and updates!
        </p>

        <div className="join-row">

          {/* ── Left column: staggered image grid ── */}
          <div className="join-images">
            <div className="join-img-grid">

              {/* Left column: top-left starts high, bottom-left overlaps up */}
              <div className="join-img-col">
                <div className="join-img-cell cell-top-left">
                  <img src={pythonImg} alt="Python Programming" className="join-img" />
                </div>
                <div className="join-img-cell cell-bottom-left">
                  <img src={arduinoImg} alt="Arduino & IoT" className="join-img" />
                </div>
              </div>

              {/* Right column: top-right offset down, bottom-right lower */}
              <div className="join-img-col">
                <div className="join-img-cell cell-top-right">
                  <img src={roboticsImg} alt="Robotics" className="join-img" />
                </div>
                <div className="join-img-cell cell-bottom-right">
                  <img src={scratchImg} alt="Scratch Coding" className="join-img" />
                </div>
              </div>

            </div>
          </div>

          {/* ── Right column: form card ── */}
          <div className="join-form-col">
            <div className="join-card">

              <h2 className="join-card-title">Stay Updated with STEM Center Africa</h2>
              <p className="join-card-subtitle">
                Sign up to receive learning resources, event invites, and important updates.
              </p>

              <div className="join-form">

                <div className="join-form-row">
                  <div className="join-field">
                    <label className="join-label" htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="join-input"  />
                  </div>
                  <div className="join-field">
                    <label className="join-label" htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="join-input"  />
                  </div>
                </div>

                <div className="join-field">
                  <label className="join-label" htmlFor="email">
                    Email <span className="join-required">*</span>
                  </label>
                  <input type="email" id="email" className="join-input"  />
                </div>

                <div className="join-field">
                  <label className="join-label" htmlFor="role">Which of these best describes you?</label>
                  <select id="role" className="join-input join-select" defaultValue="">
                    <option value="" disabled hidden />
                    <option value="student">Student</option>
                    <option value="professional">Working Professional</option>
                    <option value="educator">Educator</option>
                    <option value="parent">Parent</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="join-field">
                  <label className="join-label">What are you interested in?</label>
                  <div className="join-checkboxes">
                    {[
                      'Web Development',
                      'Robotics & Embedded Systems',
                      'Arduino & IoT',
                      'Python Programming',
                      'Basic Computer Skills',
                      'Scratch for Kids',
                    ].map((item) => (
                      <label key={item} className="join-checkbox-label">
                        <input type="checkbox" className="join-checkbox" />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="button" className="join-submit-btn">Submit</button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Joinus;
