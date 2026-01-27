// css
import styles from './main-page.module.css';
import ExperienceTimeline from './ExperienceTimeline';

export default function MainPage() {

  return (
    <main className={styles.mpPage}>
      <section className={styles.layoutFlex}>
        {/* Profile */}
        <div className={styles.mpProfileContainer}>
          <img
            src="SAMPLE.png"
            alt="Lawrence Afable Profile"
            className={styles.mpProfileImage}
          />
        </div>
        {/* Main Content */}
        <div className={styles.layoutColumn}>
          <div className={styles.mpNameContainer}>
            <h1 className={styles.mpName}>Lawrence Afable</h1>
            <div className={styles.mpVerifiedBadge}>
              <img src="VERIFIED.png" alt="Verified Badge" />
            </div>
          </div>
          <div className={styles.mpLocationContainer}>
            <span className={styles.mpLocationIcon}>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <span className={styles.mpLocation}>Quezon City, Philippines</span>
          </div>
          <h3 className={styles.mpTitle}>Frontend Developer | BSIT Undergraduate</h3>
          <a
            className={styles.mpCell}
            href="mailto:lawrencearellanoafable@gmail.com"
          >
            <span className={styles.mpCellIcon}>
              <i className="fa-regular fa-envelope"></i>
            </span>
            <span className={styles.mpCellLabel}>Send Email</span>
          </a>
        </div>
      </section>
      <br />
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
                <p>BS Information Technology undergraduate student with hands-on experience developing web and mobile applications using React.js, HTML, CSS, Javascript, and Django through academic and capstone projects.
                </p>
                <p>
                  Contributed as a Frontend Developer, Full-Stack Developer, and QA across multiple projects, focusing on building responsive user interfaces, integrating APIs, and improving usability through testing and analysis.</p>
                <p>Seeking a Frontend Developer Internship to apply modern frontend technologies, collaborate with development teams, and gain practical experience in UI development, testing, and continuous system improvement.</p>
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
                    <div className={styles.sectionCell}>HTML</div>
                    <div className={styles.sectionCell}>CSS</div>
                    <div className={styles.sectionCell}>React</div>
                    <div className={styles.sectionCell}>JavaScript</div>
                    <div className={styles.sectionCell}>CSS Module</div>
                  </div>
                </div>
                <div className={styles.sectionCellContainer}>
                  <div className={styles.sectionCellTitle}>Backend</div>
                  <div className={styles.sectionCellRow}>
                    <div className={styles.sectionCell}>Python</div>
                  </div>
                </div>
                <div className={styles.sectionCellContainer}>
                  <div className={styles.sectionCellTitle}>Developer Tools</div>
                  <div className={styles.sectionCellRow}>
                    <div className={styles.sectionCell}>Git</div>
                    <div className={styles.sectionCell}>GitHub</div>
                    <div className={styles.sectionCell}>VS Code</div>
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
        {/* projects - beyond coding*/}
        <div className={styles.layoutRow}>
          {/* recent projects */}
          <div className={styles.layoutSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>
                <i class="fa-solid fa-folder-open"></i>
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
                href="https://www.linkedin.com/in/afable-lawrence-a-741a18338/"
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
        {/* Gallery */}
        <div className={styles.layoutSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>
              <i className="fa-regular fa-image"></i>
            </span>
            <h2>Gallery</h2>
          </div>
          <div className={styles.sectionContent}>
            
          </div>
        </div>
      </section>

    </main>
  );
}