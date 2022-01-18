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
		<>
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
					<Button href="https://google.com" target="_blank">
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
				<Button href="https://google.com" target="_blank">
					Resume
				</Button>
			</ContainerMobile>
		</>
	);
};
