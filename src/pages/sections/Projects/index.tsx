import React from 'react';
import {
	CardsWrapper,
	Container,
	Index,
	Title
} from '../../../styles/pages/sections/Projects/styled';
import { ProjectCard } from '../../../components/ProjectCard';
import LeftArrow from '../../../icons/leftArrow';
import RightArrow from '../../../icons/rightArrow';
import theme from '../../../styles/theme';

interface Props {
	sectionNumber: Number;
}

const ProjectsSection = (props: Props) => {
	return (
		<Container>
			<Title>
				<Index>{props.sectionNumber}.&nbsp;</Index>My projects
			</Title>
			<CardsWrapper>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</CardsWrapper>
		</Container>
	);
};

export default ProjectsSection;
