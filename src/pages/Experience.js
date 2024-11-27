import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  padding: 40px; /* Increased padding for better spacing */
  background-color: #f9f9f9; /* Light background for contrast */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  max-width: 800px; /* Max width to keep it centered */
  margin: auto; /* Center the container */
`;

const ExperienceCard = styled.div`
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px; /* Rounded corners for cards */
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth transition for hover effect */
  
  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem; /* Slightly larger font size */
  color: #333; /* Dark color for the title */
  margin: 0; /* Remove default margin */
`;

const ExperienceDescription = styled.p`
  font-size: 1rem; /* Standard font size for descriptions */
  color: #555; /* Slightly lighter color for descriptions */
`;

const Experience = () => {
  return (
    <ExperienceContainer>
      <h2>My Experience</h2>
      <ExperienceCard>
        <ExperienceTitle>Job Title at Company 1</ExperienceTitle>
        <ExperienceDescription>Responsibilities and achievements.</ExperienceDescription>
      </ExperienceCard>
      <ExperienceCard>
        <ExperienceTitle>Job Title at Company 2</ExperienceTitle>
        <ExperienceDescription>Responsibilities and achievements.</ExperienceDescription>
      </ExperienceCard>
      {/* Add more ExperienceCard components as needed */}
    </ExperienceContainer>
  );
};

export default Experience;
