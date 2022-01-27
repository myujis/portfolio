import React from 'react';
import {
	Container,
	Anchor,
	Link,
	Links,
	Index,
	Button,
	ContainerMobile
} from './styled';
import { headerService } from '../../service/mockup';

export const Header = () => {
	const items = headerService();

	return (
		<header>
			<Container>
				<Links>
					{items.map((item, index) => {
						return (
							<Link key={index}>
								<Anchor href={`#` + items[index].link} clicked={true}>
									{item.name}
								</Anchor>
							</Link>
						);
					})}
					<Button
						href="https://pt.overleaf.com/download/project/6006157199e5f222872211a0/build/17e73fc4bf7-9cef9d3dde704001/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-e2-f-5qfh&popupDownload=true"
						target="_blank"
					>
						Resume
					</Button>
				</Links>
			</Container>
			<ContainerMobile>
				{items.map((item, index) => {
					return (
						<Anchor href={`#` + items[index].link} clicked={true}>
							{item.name}
						</Anchor>
					);
				})}
				<Button
					href="https://pt.overleaf.com/download/project/6006157199e5f222872211a0/build/17e73fc4bf7-9cef9d3dde704001/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-e2-f-5qfh&popupDownload=true"
					target="_blank"
				>
					Resume
				</Button>
			</ContainerMobile>
		</header>
	);
};
