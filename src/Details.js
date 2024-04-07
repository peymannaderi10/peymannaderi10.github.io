// Enter all your detials in this file


// Profile Image
import profile from "./assets/profile.png";



// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.jpg";


// Enter your Personal Details here
export const personalDetails = {
  name: "Peyman Naderi",
  tagline: "A Software Engineer From Canada",
  img: profile,
  about: `I'm Peyman, I am currently finishing up my specialization in Computer Science and am a part of the Internship Program at the University of Western Ontario. I have a passion for solving complex problems and building innovative solutions. With hands-on experience in Java, C++, JavaScript, and a suite of modern technologies like Spring Boot, Docker, and MongoDB, I thrive on creating efficient, scalable software that makes a difference.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/peymannaderi/",
  github: "https://github.com/peymannaderi10",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Engineer Intern",
    Company: `Synamedia`,
    Location: "London, ON",
    Type: "Internship",
    Duration: "May 2022 - Aug 2023",
  },
  {
    Position: "Software Enginner Intern",
    Company: `Walletifai`,
    Location: "Toronto, ON",
    Type: "Internship",
    Duration: "May 2021 - Sept 2021",
  },
  {
    Position: "Junior Developer",
    Company: `Vogro`,
    Location: "London, ON",
    Type: "Part-Time",
    Duration: "Mar 2020 - Feb 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "B.Sc. Specialization in Computer Science (Internship Program)",
    Company: `University of Western Ontario`,
    Location: "London, ON",
    Type: "Full Time",
    Duration: "Sept 2019 - Apr 2024",
  },
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Readify: Bionic Reader & AI Study Tool",
    image: projectImage1,
    description: `Browser extension for transforming the way you read and engage with online content. Dive into a world of personalized, efficient, and accessible reading like never before. With Readify, we've reimagined online reading to make it more enjoyable, efficient, and tailored to your preferences.`,
    techstack: "JavaScript, HTML/CSS",
    previewLink: "https://Readify.ca",
    githubLink: "https://github.com/peymannaderi10/Readify",
  },
  {
    title: "Mnemosyne Redesign",
    image: projectImage2,
    description: `An entire overhaul of the Mnemosyne flash-card tool app using React.js, incorporating 20 design principles for Human-Computer Interaction.`,
    techstack: "JavaScript, React, Tailwind, HTML/CSS",
    previewLink: "https://www.youtube.com/watch?v=gE8L26JMiqI",
    githubLink: "https://github.com/peymannaderi10/MnemosyneRedesign",
  },
  {
    title: "Rage Run",
    image: projectImage3,
    description: `Rage Run is a captivating 2D side-scrolling platformer that combines classic gaming elements with a unique emotional twist. Players control Alex, a determined hero on a quest to rescue his beloved dog, Buddy, from the clutches of the cunning and malicious Dr. Rancor. Each level in Rage Run is meticulously designed to challenge the player's skill.`,
    techstack: "C#, Unity2D",
    previewLink: "https://drive.google.com/drive/folders/1RSCjczNh-DS_Uy2z8zRbHm7f4ia498tL?usp=sharing",
    githubLink: "https://github.com/peymannaderi10/RageRun",
  },
  {
    title: "HealthFlow",
    image: projectImage4,
    description: `Healthflow using Apache Cassandra showcases the use of the healthcare management system showcasing the features of NoSQL DB Apache Cassandra like Schema-free, distributed nature, scalability, fault-tolerance, etc.`,
    techstack: "JavaScript, React, Node, ApacheCassandra, HTML/CSS",
    previewLink: "https://www.youtube.com/watch?v=ps67sygDtU0",
    githubLink: "https://github.com/peymannaderi10/healthflow",
  },
  {
    title: "GoContract",
    image: projectImage5,
    description: `Created with React, Node and hosted on IBM Cloud, this is a web application that allows users to sign up as customers or contractors, and book and offer services accordingly.`,
    techstack: "JavaScript, React, Node, IBM Cloudant, HTML/CSS",
    previewLink: "https://www.youtube.com/watch?v=wQpfie6bvL4",
    githubLink: "https://github.com/1terry/GoContract",
  },
  /*{
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },*/
];

// Enter your Contact Details here
export const contactDetails = {
  email: "peyman.n@outlook.com"
};
