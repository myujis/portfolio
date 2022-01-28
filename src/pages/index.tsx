import React from 'react';
import { Backdrop, Container, Root, Section } from '../styles/pages/home';
import { Header } from '../components/Header';
import { Social } from '../components/Social';
import ExperienceSection from './sections/Experience';
import AboutSection from './sections/About';
import ProjectsSection from './sections/Projects';
import SkillsSection from './sections/Skills';
import ContactSection from './sections/Contact';
import { ProjectModal } from '../components/ProjectModal';

const Home: React.FC = () => {
	const [modalControl, setModalControl] = React.useState(false);
	const [projectModalInfo, setProjectModalInfo] = React.useState(null);
	const handleModal = React.useCallback(() => {
		setModalControl((value) => !value);
	}, [modalControl]);
	return (
		<Root>
			<title>Matheus Yuji's Portfolio</title>
			<Header></Header>
			<Social />
			<Container>
				<AboutSection id="about" sectionNumber={1}></AboutSection>
				<ExperienceSection
					id="experience"
					sectionNumber={2}
				></ExperienceSection>
				<ProjectsSection
					id="projects"
					sectionNumber={3}
					handleOpenModal={handleModal}
				></ProjectsSection>
				<SkillsSection id="skills" sectionNumber={4}></SkillsSection>
				<ContactSection id="contact" sectionNumber={5}></ContactSection>
			</Container>
			{/* <Section id="about">
				<AboutSection sectionNumber={1}></AboutSection>
			</Section>
			<Section id="experience">
				<ExperienceSection sectionNumber={2}></ExperienceSection>
			</Section>
			<Section id="projects">
				<ProjectsSection
					sectionNumber={3}
					handleOpenModal={handleModal}
				></ProjectsSection>
			</Section>
			<Section id="skills">
				<SkillsSection sectionNumber={4}></SkillsSection>
			</Section>
			<Section id="contact">
				<ContactSection sectionNumber={5}></ContactSection>
			</Section> */}
			{modalControl ? (
				<Backdrop>
					<ProjectModal handleCloseModal={handleModal}></ProjectModal>
				</Backdrop>
			) : (
				<></>
			)}
		</Root>
	);
};

export default Home;
