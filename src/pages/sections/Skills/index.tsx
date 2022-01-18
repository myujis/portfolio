import React from 'react';
import { SkillCard } from '../../../components/SkillCard';
import { skillsService } from '../../../service/mockup';
import { Container, Index, Title, CardsWrapper } from './styled';

interface Props {
	sectionNumber: Number;
}

export const SkillsSection = (props: Props) => {
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
