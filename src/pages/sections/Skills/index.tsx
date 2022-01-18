import React from 'react';
import { SkillCard } from '../../../components/SkillCard';
import { skillsService } from '../../../service/mockup';
import {
	Container,
	Index,
	Title,
	CardsWrapper
} from '../../../styles/pages/sections/Skills/styled';

interface Props {
	sectionNumber: Number;
}

const SkillsSection: React.FC<Props> = (props: Props) => {
	const skills = skillsService();
	return (
		<Container>
			<Title>
				<Index>{props.sectionNumber}.&nbsp;</Index>Main Skills
			</Title>
			<CardsWrapper>
				{skills.map((item) => {
					return <SkillCard name={item.name} img={item.img} />;
				})}
			</CardsWrapper>
		</Container>
	);
};
export default SkillsSection;
