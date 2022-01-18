import React from 'react';
import { Root, Section } from '../styles/pages/home';
import { Header } from '../components/Header';
import { Social } from '../components/Social';
import ExperienceSection from './sections/Experience';
import AboutSection from './sections/About';
import ProjectsSection from './sections/Projects';
import SkillsSection from './sections/Skills';
import ContactSection from './sections/Contact';

const Home: React.FC = () => {
	return (
		<Root>
			<title>Matheus Yuji's Portfolio</title>
			<Header></Header>
			<Social />
			<Section id="about">
				<AboutSection sectionNumber={1}></AboutSection>
			</Section>
			<Section id="experience">
				<ExperienceSection sectionNumber={2}></ExperienceSection>
			</Section>
			<Section id="projects">
				<ProjectsSection sectionNumber={3}></ProjectsSection>
			</Section>
			<Section id="skills">
				<SkillsSection sectionNumber={4}></SkillsSection>
			</Section>
			<Section id="contact">
				<ContactSection sectionNumber={5}></ContactSection>
			</Section>
		</Root>
	);
};

export default Home;
