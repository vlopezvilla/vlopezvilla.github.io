<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Website</title>

    <!-- Link the CSS files -->
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>

</head>
<body>
    <header>

        
    </header>

    <!--Introduction containing my name-->
    <section id="intro">

        <div id="logo-and-nav">
            <section id="logo-name">
                <p>VICTORIA LOPEZ-VILLA</p>
            </section>
    
            <!-- Navigation Links -->
            <nav class="navbar">
                <ul class="nav-links">
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="resume.pdf" target="_blank">RESUME</a></li>
                </ul>
            </nav>
        </div>


        <hr id="intro-line">
            <div id="name">
                <h1 id="name-intro"></h1>
                <h1 id="firstName">Victoria</h1>
                <h1 id="lastName">Lopez-Villa</h1>
            </div>

    </section>

    <!--ABOUT -->
    <section id="about">
        <div class="about-container">
          <div class="about-left">
            <p><strong>NAME:</strong> Victoria Lopez-Villa</p>
            <p><strong>SCHOOL:</strong> San Diego State University </p>
            <p><strong>MAJOR:</strong> Computer Engineering</p>
            <p><strong>HOMETOWN:</strong> San Diego, California</p>
          </div>
          <div class="about-right">
            <p>
                I am a student at San Diego State University, pursuing a bachelor's degree in Computer Engineering. I am proficient in programming languages such as Java, Python, C, C++, and MATLAB, and have gained hands-on experience through internships. My academic and project work has also sparked a strong interest in hardware systems, including digital design using VHDL and embedded development.
              <!-- Your bio goes here -->
            </p>
            <p>
                I am a dedicated and resilient student who embraces challenges and isn't afraid to admit when I don’t know something, I see it as an opportunity to learn and grow. Outside of academics, I enjoy traveling, hiking, drawing, and going to concerts in my free time.
            </p>
          </div>
        </div>
      
        <div class="about-footer">
          <div class="social-icons">
            <a href="https://linkedin.com/in/your-profile" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/your-username" target="_blank"><i class="fab fa-github"></i></a>
            <a href="mailto:your@email.com"><i class="fas fa-envelope"></i></a>
          </div>
          <a href="resume.pdf" class="resume-download" download>DOWNLOAD RESUME</a>
        </div>
      </section>
      

    <!-- About Section
    <section id="about">
        <div id="about-container">
            <h2 id="about-title">About Me</h2>
    
            <section id="brief-intro">
                <p> I am a computer engineering student from San Diego with a passion for innovation and problem-solving. My interests span hardware/software design, cybersecurity, artificial intelligence, machine learning, and graphic design. I enjoy combining creativity with engineering principles to build meaningful solutions. </p>
                <p>Some fun facts about me is I love to paint, draw, play tennis, basketball and go hiking. </p>
                <p> Thank you for stopping by. ☺</p> -->
            <!-- </section>
        </div>
    </section> --> 

    <!-- Education
    <section id="education">
        <div id="education-container">
            <h2 id="education-title">Education</h2>
    
            <section id="education-info">
                <p> Associate's of Science | Southwestern Community College </p>
                <p>Computer Science, Mathematics</p>
            </section>
        </div>
    </section>

    <Experience-->
    <!-- <section id="experience">
        <div id="experience-container">
            <h2 id="experience-title">Experience</h2>
    
            <section id="experience-info">
                <p> Scripps Institution of Oceanography Research Intern (GeoPaths Scholar) </p>
                <p> Naval Information Warfare Center (NIWC) Intern </p>
            </section>
        </div>
    </section> --> 


    <!--Timeline Section I will be testing things out-->
    <!-- Timeline Section -->
    <section id="timeline">
        <h2 class="timeline-heading">My Education</h2>
        <div class="timeline-container">

            
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3>San Diego State University</h3>
                <p><strong>Bachelor's Degree | 2025 – Present</strong></p>
                <p><strong>Major:</strong> Computer Engineering</p>
                <!-- <p>
                <strong>Relevant Coursework:</strong> Digital Systems, Computer Architecture
                </p> -->
            </div>
            </div>
              
    
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3>Southwestern Community College</h3>
                <p><strong>Associates Degree in Computer Science, Mathematics | 2022 – 2025</strong></p>
                <p><strong>Major:</strong> Computer Engineering</p>
                <p>
                <strong>Relevant Coursework:</strong> Electrical Circuits, Computer Organization and Architecture, Intro to Computer Programming: C++, MATLAB: Computer Programming & Applications, Intro to Computer Programming: Java, Data Structures and Algorithms, Engineering Design: SolidWorks, 
                </p>
            </div>
            </div>
    
        <!-- <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
            <h3>2024 – NIWC Intern</h3>
            <p>Developed a Python-based GUI for weather visualization tools at the Naval Information Warfare Center.</p>
            </div>
        </div>
        </div> -->
    </section>

    <script>
        const items = document.querySelectorAll('.timeline-item');
      
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });
      
        items.forEach(item => observer.observe(item));
      </script>

    
    <!--Timeline Section I will be testing things out-->
</body>

<footer>
    <p>&copy; 2025 Victoria Lopez-Villa | All Rights Reserved</p>
  </footer>
  
</html>
