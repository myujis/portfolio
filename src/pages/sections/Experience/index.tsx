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
	Title,
	Wrapper
} from '../../../styles/pages/sections/Experience/styled';

interface Props {
	sectionNumber: Number;
}

const ExperienceSection: React.FC<Props> = (props: Props) => {
	const [selected, setSelected] = React.useState(0);
	const experiences = [
		{
			jobName: 'Software Engineer',
			company: 'Pro Sky',
			companyWebsite: 'https://www.pro-sky.com/',
			startDate: new Date('09/01/2021'),
			ended: false,
			endDate: new Date(),
			descriptions: [
				'Development of maintainable and efficient solutions for internal projects',
				'',
				'Worked with diferent languages, frameworks and libraries such as JavaScript, TypeScript, React, and jQuery',
				"Scrum as working methodology with Atlassian's technologies such as Confluence and Jira"
			]
		},
		{
			jobName: 'Software Engineer',
			company: 'Cuponeria',
			companyWebsite: 'https://cuponeria.com.br',
			startDate: new Date('03/01/2021'),
			ended: true,
			endDate: new Date('08/31/2021'),
			descriptions: [
				'Write maintainable and efficient code for internal projects',
				'Worked with diferent languages, frameworks and libraries such as JavaScript, TypeScript, React, and jQuery',
				"Scrum as working methodology with Atlassian's technologies such as Confluence and Jira"
			]
		},
		{
			jobName: 'Software Engineer Intern',
			company: 'Yoobot',
			companyWebsite: 'https://yoobot.com.br/',
			startDate: new Date('07/01/2020'),
			ended: true,
			endDate: new Date('02/28/2021'),
			descriptions: [
				'Write maintainable and efficient code for internal projects',
				'Worked with diferent languages, frameworks and libraries such as JavaScript, TypeScript, React, and jQuery',
				"Scrum as working methodology with Atlassian's technologies such as Confluence and Jira"
			]
		}
	];
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
		<Container>
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
