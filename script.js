const loadingScreen = document.getElementById("loading-screen");
const portfolio = document.getElementById("portfolio");
const input = document.getElementById("commandInput");
const output = document.getElementById("terminal-output");
const loginTime = document.getElementById("login-time");

setTimeout(() => {
  loadingScreen.style.display = "none";
  portfolio.style.display = "flex";
  loginTime.textContent = new Date().toLocaleString();
  input.focus();
}, 3000); // simulate loading

const commands = {
  help: `
    <ul>
      <li><span class="highlight">about</span> - About Me</li>
      <li><span class="highlight">education</span> - Academic Profile</li>
      <li><span class="highlight">skills</span> - Technical Skills</li>
      <li><span class="highlight">projects</span> - Projects Info</li>
      <li><span class="highlight">internships</span> - Internship Experience</li>
      <li><span class="highlight">certifications</span> - Certifications</li>
      <li><span class="highlight">activities</span> - Co-curricular Activities</li>
      <li><span class="highlight">profile</span> - Personal Profile</li>
      <li><span class="highlight">declaration</span> - Declaration</li>
      <li><span class="highlight">resume</span> - View/Download Resume</li>
      <li><span class="highlight">clear</span> - Clear terminal</li>
    </ul>
  `,

  about: `
    <p>Hi, I'm <strong>Kadimi Kavya</strong>, a final year B.Tech (IT) student and passionate Frontend Developer.</p>
    <p>Skilled in HTML, CSS, JavaScript, Bootstrap, and learning SQL & Python.</p>
  `,

  education: `
    <p><strong>B.Tech (IT)</strong> - ADITYA INSTITUTE OF TECHNOLOGY AND MANAGEMENT, TEKKALI (JNTUGV) - 2026 - 8.47 CGPA</p>
    <p><strong>Intermediate (MPC)</strong> - SRI LAKSHMI GANAPATHI JUNIOR COLLEGE, VIJAYANAGARAM - 2022 - 93%</p>
    <p><strong>SSC</strong> - SRI SATYA KAILAS PUBLIC SCHOOL - 2020 - 92%</p>
  `,

  skills: `
    <p><strong>Programming:</strong> C, SQL, Basics of Python & Java</p>
    <p><strong>Web Development:</strong> HTML5, CSS3, JavaScript, Bootstrap</p>
    <p><strong>OS:</strong> Windows, Android</p>
    <p><strong>Design Tools:</strong> Basics of Figma (UI/UX)</p>
  `,

  internships: `
    <p><strong>Community Internship</strong> - UPI Awareness in Rural Areas (2 Weeks)</p>
    <p>Conducted workshops and helped villagers understand UPI payment systems.</p>
    <br/>
    <p><strong>ServiceNow Internship</strong> (1 Month)</p>
    <p>Configured modules, built catalog items, and automated workflows for enterprise service delivery.</p>
  `,

  certifications: `
    <ul>
      <li>Certified in Django - APSSDC</li>
      <li>Certified in Amazon Web Services - APSSDC</li>
      <li>Certified in NSS - AITAM College, Tekkali</li>
      <li>Certified in Cyber Security - Supraja Technologies</li>
    </ul>
  `,

  activities: `
    <p>• Participated in HACKATHON conducted by AITAM.</p>
  `,

  profile: `
    <p><strong>Father’s Name:</strong> Kadimi Appa Rao</p>
    <p><strong>Date of Birth:</strong> 19-July-2004</p>
    <p><strong>Nationality:</strong> INDIAN</p>
    <p><strong>Address:</strong> Gijabha (village), Garugubilli (mandal), Manyam (district), Andhra Pradesh - 535525</p>
    <p><strong>Hobbies:</strong> Listening to music, singing</p>
    <p><strong>Languages Known:</strong><br/>
      English ✅ Speak ✅ Write ✅ Read<br/>
      Hindi ❌ Speak ✅ Write ✅ Read<br/>
      Telugu ✅ Speak ✅ Write ✅ Read
    </p>
  `,

  declaration: `
    <p>I affirm that the details mentioned above are accurate and true to the best of my knowledge.</p>
    <p><strong>Date:</strong> 14-06-2025<br/><strong>Place:</strong> Tekkali</p>
  `,

  resume: `
    <p>Click to view/download: 
      <a href="rs1.pdf" target="_blank" download="Kadimi_Kavya_Resume.pdf">
        Kadimi_Kavya_Resume.pdf
      </a>
    </p>
  `,

  clear: () => {
    output.innerHTML = "";
  }
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = this.value.trim();
    output.innerHTML += `<div><span class="prompt">kavya@portfolio:~$</span> ${command}</div>`;

    if (commands[command]) {
      const result = typeof commands[command] === "function" ? commands[command]() : commands[command];
      output.innerHTML += `<div>${result}</div>`;
    } else {
      output.innerHTML += `<div>Command not found: <code>${command}</code></div>`;
    }

    this.value = "";
    output.scrollTop = output.scrollHeight;
  }
});
