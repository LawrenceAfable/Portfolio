// css
import styles from './main-page.module.css';

// components
import ExperienceTimeline from './ExperienceTimeline';
import Carousel from '../components/Carousel.jsx';

export default function MainPage() {
  const images = [
    {
      src: '/EXP_FIGMA.png',
      alt: 'sample'
    },
    {
      src: '/EXP_BARTERHUB.png',
      alt: 'sample2'
    },
    {
      src: '/TICKETFLOW_DASHBOARD.jpeg',
      alt: 'sample3'
    },
    {
      src: '/B_Profile_Rock.png',
      alt: 'sample2'
    },
    {
      src: '/EXP_TUTOR_1.jpeg',
      alt: 'sample3'
    }
  ]
  return (
    <main className={styles.mpPage}>
      {/* HEADER */}
      <section className={styles.layoutFlex}>
        {/* Profile */}
        <div className={styles.mpProfileContainer}>
          <img
            src="/B_Profile_1.png"
            alt="Profile default"
            className={`${styles.mpProfileImage} ${styles.defaultImg}`}
          />
          <img
            src="/B_Profile_Rock.png"
            alt="Profile hover"
            className={`${styles.mpProfileImage} ${styles.hoverImg}`}
          />
        </div>

        {/* Main Content */}
        <div className={styles.layoutColumn}>
          <div className={styles.mpNameContainer}>
            <h1 className={styles.mpName}>Lawrence A. Afable</h1>
            <div className={styles.mpVerifiedBadge}>
              <img src="/VERIFIED.png" alt="Verified Badge" />
            </div>
          </div>
          <div className={styles.mpLocationContainer}>
            <span className={styles.mpLocationIcon}>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <span className={styles.mpLocation}>Quezon City, Philippines</span>
          </div>
          <h3 className={styles.mpTitle}>Frontend Developer | UI/UX | Aspiring Full‑Stack Developer</h3>
          <div className={styles.contactRow}>
            <a
              className={styles.mpCell}
              href="mailto:lawrencearellanoafable@gmail.com"
            >
              <span className={styles.mpCellIcon}>
                <i className="fa-regular fa-envelope"></i>
              </span>
              <span className={styles.mpCellLabel}>lawrencearellanoafable@gmail.com</span>
            </a>

            <a
              className={styles.mpCell}
              href="tel:+639489919801"
            >
              <span className={styles.mpCellIcon}>
                <i className="fa-solid fa-phone"></i>
              </span>
              <span className={styles.mpCellLabel}>+63 948 991 9801</span>
            </a>

            <a
              className={styles.mpCell}
              href="https://www.linkedin.com/in/lawrence-a-afable-741a18338/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.mpCellIcon}>
                <i className="fa-brands fa-linkedin"></i>
              </span>
              <span className={styles.mpCellLabel}>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
      <br />
      {/* CONTENT */}
      <section className={styles.layoutColumn}>
        {/* about - tech - experience */}
        <div className={styles.layoutFlex}>
          <div className={styles.layoutColumn}>
            {/* about me */}
            <div className={styles.layoutSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}><i className="fa-solid fa-user"></i>
                </span>
                <h2>About</h2>
              </div>
              <div className={styles.sectionContent}>
                <p><strong>Detail-oriented BS Information Technology undergraduate (2022–2026)</strong> with hands-on experience in frontend development, UI/UX design, CMS management, and quality assurance. Proven track record building responsive React.js applications and managing CMS-driven websites during a tech industry internship.</p>
                <p>Adept at leveraging modern AI tools and agile methodologies to streamline development workflows and deliver user-centric web solutions. Comfortable contributing across the stack with a focus on maintainable UI, accessibility, and test-driven quality.</p>
              </div>
            </div>
            {/* tech stack */}
            <div className={styles.layoutSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}><i className="fa-solid fa-screwdriver-wrench"></i>
                </span>
                <h2>Tech Stack</h2>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.sectionCellContainer}>
                  <div className={styles.sectionCellTitle}>Frontend</div>
                  <div className={styles.sectionCellRow}>
                    <div className={styles.sectionCell}>React.js</div>
                    <div className={styles.sectionCell}>Vite</div>
                    <div className={styles.sectionCell}>JavaScript (ES6+)</div>
                    <div className={styles.sectionCell}>HTML5 & CSS3</div>
                    <div className={styles.sectionCell}>Responsive Design</div>
                  </div>
                </div>
                <div className={styles.sectionCellContainer}>
                  <div className={styles.sectionCellTitle}>Backend & Tools</div>
                  <div className={styles.sectionCellRow}>
                    <div className={styles.sectionCell}>Python / Django</div>
                    <div className={styles.sectionCell}>Firebase</div>
                    <div className={styles.sectionCell}>Salesforce (embedded forms)</div>
                  </div>
                </div>
                <div className={styles.sectionCellContainer}>
                  <div className={styles.sectionCellTitle}>Developer Tools</div>
                  <div className={styles.sectionCellRow}>
                    <div className={styles.sectionCell}>Git / GitHub</div>
                    <div className={styles.sectionCell}>VS Code</div>
                    <div className={styles.sectionCell}>ClickUp</div>
                  </div>
                </div>
                <div className={styles.sectionCellContainer}>
                  <div className={styles.sectionCellTitle}>Design & AI</div>
                  <div className={styles.sectionCellRow}>
                    <div className={styles.sectionCell}>Figma</div>
                    <div className={styles.sectionCell}>Canva</div>
                    <div className={styles.sectionCell}>Google AI Studio / Gemini</div>
                  </div>
                </div>
                <div className={styles.sectionCellContainer}>
                  <div className={styles.sectionCellTitle}>Collaboration & Communication</div>
                  <div className={styles.sectionCellRow}>
                    <div className={styles.sectionCell}>Teams</div>
                    <div className={styles.sectionCell}>Discord</div>
                    <div className={styles.sectionCell}>Zoom</div>
                  </div>
                </div>
              </div>
            </div>
            {/* recent projects */}
            <div className={styles.layoutSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>
                  <i className="fa-solid fa-folder-open"></i>
                </span>
                <h2>Projects</h2>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.sectionCellContainer}>
                  <div className={styles.sectionCellTitle}>TicketFlow: Flow-Based Assignment & Ticket Tracking System (Capstone Project)</div>
                  <span className={styles.sectionCellDesc}><strong>Role:</strong> Frontend Developer, QA, Document Analyst, UI/UX</span><br />
                  <span className={styles.sectionCellDesc}><strong>Description: </strong>Developed the frontend using React.js, ensuring usability and intuitive UI design. Performed QA testing, identified bugs, and improved user experience. Analyzed user flow and system data to support feature enhancements.</span>
                </div>
                <div className={styles.sectionCellContainer}>
                  <div className={styles.sectionCellTitle}>BarterHub: Web-Based Bartering System</div>
                  <span className={styles.sectionCellDesc}><strong>Role:</strong> Full-Stack Developer</span><br />
                  <span className={styles.sectionCellDesc}><strong>Description:</strong> Built responsive React.js frontend components and integrated them with Django backend APIs to enable seamless user interactions and data exchange.</span>
                </div>
                <div className={styles.sectionCellContainer}>
                  <div className={styles.sectionCellTitle}>BON: Productivity Mobile Application</div>
                  <span className={styles.sectionCellDesc}><strong>Role:</strong> UI/UX & Developer</span><br />
                  <span className={styles.sectionCellDesc}><strong>Description:</strong> Designed and implemented mobile UI components using Flutterflow and integrated Firebase for data storage and authentication.</span>
                </div>
              </div>
            </div>
          </div>
          {/* experience timeline */}
          <div className={styles.layoutSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>
                <i className="fa-solid fa-briefcase"></i>
              </span>
              <h2>Experience</h2>
            </div>
            <div className={styles.sectionContent}>
              <ExperienceTimeline />
            </div>
          </div>
        </div>
        {/* Certifications */}
        <div className={styles.layoutSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>
              <i className="fa-solid fa-book-open"></i>
            </span>
            <h2>Certifications</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.sectionCellContainer}>
              <div className={styles.sectionCellTitle}>Certifications</div>
              <div className={styles.sectionCellDesc}><strong>Google AI Professional Certificate</strong> — Google (May 2026)</div>
              <div className={styles.sectionCellDesc}><strong>AI Fundamentals: Foundations for Understanding AI</strong> — IBM SkillsBuild (May 2026)</div>
            </div>
          </div>
          <a
            className={styles.socmedCell}
            href="https://coursera.org/share/cfa33fce465f066b972ecca8b21e33c6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.socmedCellIcon}>
              <i className="fa-brands fa-google"></i>
            </span>
            <span className={styles.socmedCellLabel}>Google AI Professional Certificate</span>
          </a>

          <a
            className={styles.socmedCell}
            href="https://www.credly.com/badges/b3fe8e90-24fe-4f38-b9c2-fe1cac259e28/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.socmedCellIcon}>
              <i className="fa-solid fa-award"></i>
            </span>
            <span className={styles.socmedCellLabel}>IBM — AI Fundamentals (Badge)</span>
          </a>
        </div>
        {/* beyond coding*/}
        <div className={styles.layoutRow}>
          {/* beyond coding */}
          <div className={styles.layoutSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>
                <i className="fa-solid fa-book-open"></i>
              </span>
              <h2>Beyond Coding</h2>
            </div>
            <div className={styles.sectionContent}>
              <p>Beyond coding, I develop digital art and design work, including illustrations, logos, character concepts, fanart, and album covers. I focus on delivering visually appealing and cohesive designs that align with client vision, using strong skills in color theory, composition, and visual storytelling.</p>
              <p><strong>Design Portfolio:</strong> Illustration, Logo, Character Design, Fanart, Album Covers</p>
            </div>
            <a
              className={styles.socmedCell}
              href="https://lorenzoshiit.carrd.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.socmedCellIcon}>
                <i className="fa-solid fa-link"></i>
              </span>
              <span className={styles.socmedCellLabel}>Carrd Portfolio</span>
            </a>
          </div>
        </div>
        {/* social links */}
        <div className={styles.layoutSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>
              <i className="fa-solid fa-link"></i>
            </span>
            <h2>Social Links</h2>
          </div>

          <div className={styles.sectionContent}>
            <div className={styles.layoutColumn}>

              <a
                className={styles.socmedCell}
                href="https://www.linkedin.com/in/lawrence-a-afable-741a18338/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socmedCellIcon}>
                  <i className="fa-brands fa-linkedin"></i>
                </span>
                <span className={styles.socmedCellLabel}>LinkedIn</span>
              </a>

              <a
                className={styles.socmedCell}
                href="https://github.com/LawrenceAfable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socmedCellIcon}>
                  <i className="fa-brands fa-github"></i>
                </span>
                <span className={styles.socmedCellLabel}>GitHub</span>
              </a>

              <a
                className={styles.socmedCell}
                href="https://www.instagram.com/enzo.xom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socmedCellIcon}>
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <span className={styles.socmedCellLabel}>Instagram</span>
              </a>

              <a
                className={styles.socmedCell}
                href="https://x.com/lorenzoshiit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.socmedCellIcon}>
                  <i className="fa-brands fa-x-twitter"></i>
                </span>
                <span className={styles.socmedCellLabel}>Twitter</span>
              </a>

            </div>
          </div>
        </div>
        {/* gallery */}
        <div className={styles.layoutSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>
              <i className="fa-regular fa-image"></i>
            </span>
            <h2>Gallery</h2>
          </div>
          <div className={styles.sectionContent}>
            <Carousel images={images} />
          </div>
        </div>
      </section>

    </main>
  );
}