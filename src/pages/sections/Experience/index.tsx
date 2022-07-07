import React from 'react';
import {
	Company,
	Container,
	Content,
	Cronology,
	Description,
	Index,
	Item,
	Items,
	JobDescription,
	JobTitle,
	JobTitleWrapper,
	Technologies,
	Title,
	Wrapper
} from '../../../styles/pages/sections/Experience/styled';
import { experiencesService } from '../../../service/mockup';

interface Props {
	sectionNumber: Number;
	id?: string;
}

const ExperienceSection: React.FC<Props> = (props: Props) => {
	const [selected, setSelected] = React.useState(0);
	const experiences = experiencesService();
	const months = [
		'Jan',
		'Fev',
		'Mar',
		'Abr',
		'Mai',
		'Jun',
		'Jul',
		'Ago',
		'Set',
		'Out',
		'Nov',
		'Dez'
	];
	const handleSelect = (index) => {
		setSelected(index);
	};
	return (
		<Container id={props.id} key={selected}>
			<Title>
				<Index>{props.sectionNumber}.&nbsp;</Index>Where I've Worked
			</Title>
			<Wrapper>
				<Items>
					{experiences.map((exp, index) => {
						return (
							<Item
								key={index}
								onClick={() => handleSelect(index)}
								selected={selected === index}
							>
								{exp.company}
							</Item>
						);
					})}
				</Items>
				<Content>
					<JobTitleWrapper>
						<JobTitle>
							{experiences[selected].jobName}&nbsp;
							<Company
								href={experiences[selected].companyWebsite}
								target="_blank"
							>
								@{experiences[selected].company}
							</Company>
						</JobTitle>
						<Cronology>
							{months[experiences[selected].startDate.getMonth()] +
								' ' +
								experiences[selected].startDate.getFullYear()}{' '}
							-{' '}
							{experiences[selected].ended
								? `${
										months[experiences[selected].endDate.getMonth()] +
										' ' +
										experiences[selected].endDate.getFullYear()
								  }`
								: `Today`}
						</Cronology>
					</JobTitleWrapper>
					<Description>
						<Technologies>
							{experiences[selected].technologies.map((item, index) => {
								if (index == experiences[selected].technologies.length - 1)
									return item;
								if (index == experiences[selected].technologies.length - 2)
									return item + ' & ';
								return item + ', ';
							})}
						</Technologies>
						{experiences[selected].descriptions.map((item, index) => {
							return <JobDescription key={index}>{item}</JobDescription>;
						})}
					</Description>
				</Content>
			</Wrapper>
		</Container>
	);
};

export default ExperienceSection;
