import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 10px;
  max-width: 1200px; /* Increased max width to accommodate three cards */
  margin: auto;
`;

const ProjectGrid = styled.div`
  display: flex; /* Use flexbox for layout */
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  justify-content: space-between; /* Space between items */
`;

const ProjectCard = styled.div`
  flex: 1 1 calc(30% - 20px); /* Grow and shrink with a base width of 30% minus margin */
  margin: 10px; /* Margin around each card */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.a`
  display: inline-block;
  background-color: #f39c12;
  color: #fff;
  padding: 10px 15px;
  margin-right: 10px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e67e22;
  }
`;

const ProjectsTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ProjectImage = styled.img`
  width: 100%; /* Responsive image */
  height: auto; /* Maintain aspect ratio */
  border-radius: 8px; /* Rounded corners for images */
  margin-bottom: 10px; /* Space between image and text */
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectGrid>
        <ProjectCard>
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectImage src="https://via.placeholder.com/300" alt="Project 1" />
          <ProjectDescription>A description of Project 1.</ProjectDescription>
          <Button href="https://github.com/your-github/project1" target="_blank">GitHub</Button>
          <Button href="https://demo-link.com" target="_blank">Live Demo</Button>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Project 2</ProjectTitle>
          <ProjectImage src="https://via.placeholder.com/300" alt="Project 2" />
          <ProjectDescription>A description of Project 2.</ProjectDescription>
          <Button href="https://github.com/your-github/project2" target="_blank">GitHub</Button>
          <Button href="https://demo-link.com" target="_blank">Live Demo</Button>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Project 3</ProjectTitle>
          <ProjectImage src="https://via.placeholder.com/300" alt="Project 3" />
          <ProjectDescription>A description of Project 3.</ProjectDescription>
          <Button href="https://github.com/your-github/project3" target="_blank">GitHub</Button>
          <Button href="https://demo-link.com" target="_blank">Live Demo</Button>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Project 4</ProjectTitle>
          <ProjectImage src="https://via.placeholder.com/300" alt="Project 4" />
          <ProjectDescription>A description of Project 4.</ProjectDescription>
          <Button href="https://github.com/your-github/project4" target="_blank">GitHub</Button>
          <Button href="https://demo-link.com" target="_blank">Live Demo</Button>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Project 5</ProjectTitle>
          <ProjectImage src="https://via.placeholder.com/300" alt="Project 5" />
          <ProjectDescription>A description of Project 5.</ProjectDescription>
          <Button href="https://github.com/your-github/project5" target="_blank">GitHub</Button>
          <Button href="https://demo-link.com" target="_blank">Live Demo</Button>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Project 6</ProjectTitle>
          <ProjectImage src="https://via.placeholder.com/300" alt="Project 6" />
          <ProjectDescription>A description of Project 6.</ProjectDescription>
          <Button href="https://github.com/your-github/project6" target="_blank">GitHub</Button>
          <Button href="https://demo-link.com" target="_blank">Live Demo</Button>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
