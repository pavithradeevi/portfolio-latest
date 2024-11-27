// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Title = styled.h3`
  margin-top: 15px;
`;

const Description = styled.p`
  margin: 10px 0;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
    </Card>
  );
};

export default ProjectCard;
