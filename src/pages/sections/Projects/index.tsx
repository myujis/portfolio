import React from 'react';
import {
	CardsWrapper,
	Container,
	Index,
	Title
} from '../../../styles/pages/sections/Projects/styled';
import { ProjectCard } from '../../../components/ProjectCard';

const ProjectsSection = ({ id, sectionNumber, handleOpenModal = () => {} }) => {
	return (
		<Container id={id}>
			<Title>
				<Index>{sectionNumber}.&nbsp;</Index>My projects
			</Title>
			<CardsWrapper>
				<ProjectCard handleOpenModal={handleOpenModal} />
				<ProjectCard handleOpenModal={handleOpenModal} />
				<ProjectCard handleOpenModal={handleOpenModal} />
			</CardsWrapper>
		</Container>
	);
};

export default ProjectsSection;
