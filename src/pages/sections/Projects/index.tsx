import React from 'react';
import {
	CardsWrapper,
	Container,
	Index,
	Title
} from '../../../styles/pages/sections/Projects/styled';
import { ProjectCard } from '../../../components/ProjectCard';

const ProjectsSection = ({ sectionNumber, handleOpenModal = () => {} }) => {
	return (
		<Container>
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
