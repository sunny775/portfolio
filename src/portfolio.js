/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";
const path = require("path");

console.log(path.join(__dirname, "sonnie"));

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Nkwuda Sunday Cletus",
  title: "Hi all, I'm Sunday",
  subTitle: emoji(
    "A passionate FullStack Software Developer and a Linux contributor 🚀 having a good experience building Web apps with JavaScript ( Reactjs & Nodejs ) and contributing to the Debian Linux/GNU."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1cA_DLW_7cRYmN83405i8qtzS4CZk0EN8JU5KtTDggI4/edit?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sunny775",
  linkedin: "https://www.linkedin.com/in/sunday-nkwuda/",
  gmail: "scletus40@gmail.com",
  gitlab: "https://salsa.debian.org/sonnie",
  facebook: "https://www.facebook.com/mcsonnie",
  medium: "https://sonnie.hashnode.dev",
  stackoverflow: "https://stackoverflow.com/users/12293226/sunday-cletus",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A FULL STACK SOFTWARE DEVELOPER AND A DEBIAN MAINTAINER",
  skills: [
    emoji(
      "⚡ Develop highly interactive and accessible Frontend and serverless applications"
    ),
    emoji("⚡ Buid highly secure and optimized REST and GraphQL APIs"),
    emoji("⚡ Build highly performant fullstack web applications"),
    emoji(
      "⚡ Debian Maintainer- Maintain existing packages, and upload new packages for the Debian JS-team"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "javaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Linux",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Debian Maintainer",
      company: "Debian.org",
      companylogo: require("./assets/images/debianLogo.jpg"),
      date: "September 2021 – Present",
      desc: "I am currently a Debian Maintainer. I upload new packages and maintain a handful of existing packages for the Debian Linux/GNU"
    },
    {
      role: "Outreachy Intern with Debian",
      company: "Debian.org",
      companylogo: require("./assets/images/debianLogo.jpg"),
      date: "May 2021 – August 2021",
      desc: "I  worked with the Debian js-team as an intern. My job centered on working with the Debian js-team to develop, package and maintain nodejs packages for the Debian Linux/GNU."
    },
    {
      role: "Software Developer",
      company: "Freelance, Self-Employed",
      companylogo: require("./assets/images/freelanceLogo.jpg"),
      date: "Aug 2018 – Present",
      desc: "I have been making a living as a freelance software developer, by bidding and accepting software development  gigs from remote contracts."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Other Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/e-scholarsLogo.png"),
      projectName: "Exceptional Scholars Academy",
      projectDesc:
        "A website for Exceptional Scholars Education Advisory and Consultancy Agency.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.e-scholars.academy/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/blsLogo.png"),
      projectName: "Better Life Savings Ltd",
      projectDesc:
        "A website for Better Life Savings Ltd, a micro-savings/ community banking Agency",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://betterlifesavings.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://sonnie.hashnode.dev/everyone-struggles",
      title: "Everyone Struggles 🧑‍💻",
      description:
        "What is it like to be contributing to the Debian Operating System🍥?"
    },
    {
      url: "https://sonnie.hashnode.dev/outreachy-internship-wrap-up",
      title: "Outreachy Internship Wrap-up",
      description: "Wrapping up my Outreachy Internship with Debian"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Introduction to Free Software & Debian",
      subtitle:
        "Debian outreach session on Debconf21 -- Yarn-plugin-apt project ( video from 15:10 )",
      slides_url:
        "https://debconf21.debconf.org/talks/107-debian-outreach-projects-outreachy-2021/",
      event_url:
        "https://debconf21.debconf.org/talks/107-debian-outreach-projects-outreachy-2021/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+2347069746873",
  email_address: "scletus40@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "@scletus40", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails
};
