import React from "react";
import "./Projects.css";
import chatting from '../../assets/chatting.png';
import pizza from '../../assets/pizza.png';
import Real from '../../assets/real.png';
import Ecommerce from '../../assets/ecommerce.png';

const Projects = () => {
  const projects = [
    {
      title: "CrewPort",
      platform: "Mobile Apps",
      image: "https://capzlog.aero/Areas/PeL/Content/Img/MobileAppDownloadPage/Hero-Image_App-artwork_720w.png",
      description: "CrewPort is a dynamic mobile app designed to streamline crew management, offering seamless daily task tracking, calendar planning, and document updates—all in a sleek, intuitive interface. Built with React Native and Node.js, it redefines productivity on the go.",
      technologies: {
        frontend: "Frontend",
        githubLinks: {
          frontend: "https://github.com/user/frontend-repo",
        },
      },
    },
    {
      title: "EFB",
      platform: "Mobile Apps",
      image: "https://myairops.com/wp-content/uploads/2023/10/Editable-copy-of-M-master-template-52.png",
      description: "A powerful mobile solution for pilots, the EFB App streamlines flight operations with features for fuel level monitoring, seamless extra fuel requests, and instant reporting of technical issues. It also enables pilots to submit detailed flight duration reports, ensuring efficient communication and operational excellence.",
      technologies: {
        design: "Design",
        frontend: "Frontend",
        backend: "Backend",
        githubLinks: {
          design: "https://adobe.com/xd/project-design",
          frontend: "https://github.com/user/frontend-repo-portfolio",
          backend: "https://github.com/user/backend-repo-portfolio",
        },
      },
    },
    {
      title: "ElectroSphere",
      platform: "Website",
      image: "https://s.tmimgcdn.com/scr/400x250/91900/electrichub-landing-page-template_91964-original.jpg",
      description: "A comprehensive web solution for an electrical equipment company, ElectroSphere includes fully functional Home, Career, and Contact pages. Built with a responsive design and a robust backend using Node.js and SQLite, the website streamlines user interactions while effectively showcasing products and company information.",
      technologies: {
        design: "Design",
        frontend: "Frontend",
        backend: "Backend",
        githubLinks: {
          design: "https://adobe.com/xd/project-design",
          frontend: "https://github.com/user/frontend-repo-portfolio",
          backend: "https://github.com/user/backend-repo-portfolio",
        },
      },
    },
  ];

  const personalProjects = [
    {
      title: "Chatting-Website",
      platform: "Website",
      image: chatting,
      description: "Chatting app allows you to communicate with your customers in web chat rooms. It enables you to send and receive messages.",
      technologies: {
        design: "Design",
        frontend: "Frontend",
        backend: "Backend",
        githubLinks: {
          design: "https://chatapplication18.netlify.app/",
          frontend: "https://github.com/user/frontend-repo-portfolio",
          backend: "https://github.com/user/backend-repo-portfolio",
        },
      },
    },
    {
      title: "Pizza Order Website",
      platform: "Website",
      image: pizza,
      description: "An food ordering website that allows customers to view the price and place an order.",
     technologies: {
        design: "Design",
        frontend: "Frontend",
        backend: "Backend",
        githubLinks: {
          design: "https://pizzaselling18.netlify.app/",
          frontend: "https://github.com/user/frontend-repo-portfolio",
          backend: "https://github.com/user/backend-repo-portfolio",
        },
      },
    },
    {
      title: "Real Estate",
      platform: "Website",
      image: Real,
      description: "Our software covers all real estate sectors such as Village house,Mountain House and many more.It will use to connect owner easily.",
     technologies: {
        design: "Design",
        frontend: "Frontend",
        backend: "Backend",
        githubLinks: {
          design: "https://realestate18.netlify.app/",
          frontend: "https://github.com/user/frontend-repo-portfolio",
          backend: "https://github.com/user/backend-repo-portfolio",
        },
      },
    },
    {
      title: "Ecommerce",
      platform: "Website",
      image: Ecommerce,
      description: "Its includes womens clothing, such as kurtas, sleepwear as well as accessories, such as jewelry selling and easily make payments.",
     technologies: {
        design: "Design",
        frontend: "Frontend",
        backend: "Backend",
        githubLinks: {
          design: "https://ecommercewebsite18.netlify.app/",
          frontend: "https://github.com/user/frontend-repo-portfolio",
          backend: "https://github.com/user/backend-repo-portfolio",
        },
      },
    },
    {
      title: "YouTubeClone - Frontend",
      platform: "Website",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2019/11/73973896-5e16-4c43-98c4-39b8bccce5f2-5dc4af58e0ff1.jpeg",
      description: "YouTube Clone is an video-sharing solution that aids you in launching your video streaming software that has the power to rival YouTube itself.",
     technologies: {
        design: "Design",
        frontend: "Frontend",
        backend: "Backend",
        githubLinks: {
          design: "https://youtubeclone18.netlify.app/",
          frontend: "https://github.com/user/frontend-repo-portfolio",
          backend: "https://github.com/user/backend-repo-portfolio",
        },
      },
    },
    {
      title: "Face Recognition System - Backend",
      platform: "Website",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKJ8q9zaIXDP-8zV6NniJUXnojpaO9Mr6lg&s",
      description: "Facial recognition can identify human faces in images or videos, search for a face among a large collection of existing images.",
     technologies: {
        backend: "Backend",
        githubLinks: {
          backend: "https://github.com/user/backend-repo-portfolio",
        },
      },
    },
  ];

  return (
    <div className="project-container">
      <p className="project-heading">PROJECTS</p>

      {/* Featured Projects Section */}
      <section className="project-section">
        <div className="projectline-container">
          <div className="verticalproject-line"></div>
          <div className="projectline-texts">
            <p className="top-phrase">Some of My Most Recent Projects</p>
            <p className="know-more">My Featured Projects</p>
          </div>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-platform">{project.platform}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
  <p>
    {Object.entries(project.technologies)
      .filter(([key, value]) => key !== "githubLinks" && value) // Exclude githubLinks and ensure the value exists
      .map(([key, value], idx, arr) => (
        <span key={key}>
          <a
            href={project.technologies.githubLinks[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-link"
          >
            {value}
          </a>
          {idx < arr.length - 1 && " - "} {/* Add separator except for the last item */}
        </span>
      ))}
  </p>
</div>


            </div>
          ))}
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="project-section">
        <div className="projectline-container">
          <div className="verticalproject-line"></div>
          <div className="projectline-texts">
            <p className="top-phrase">Some of My Personal Projects</p>
            <p className="know-more">My Own Creations</p>
          </div>
        </div>
        <div className="project-list">
          {personalProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-platform">{project.platform}</p>
              <p>{project.description}</p>
              <div className="project-technologies">
  <p>
    {Object.entries(project.technologies)
      .filter(([key, value]) => key !== "githubLinks" && value) // Exclude githubLinks and ensure the value exists
      .map(([key, value], idx, arr) => (
        <span key={key}>
          <a
            href={project.technologies.githubLinks[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-link"
          >
            {value}
          </a>
          {idx < arr.length - 1 && " - "} {/* Add separator except for the last item */}
        </span>
      ))}
  </p>
</div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
