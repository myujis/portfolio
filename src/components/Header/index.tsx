import React from 'react';
import {
	Container,
	Anchor,
	Link,
	Links,
	Index,
	Button,
	ContainerMobile,
	MenuMobile,
	ArrowContainer
} from './styled';
import { headerService } from '../../service/mockup';
import Menu from '../../icons/menu';
import ArrowUp from '../../icons/arrowUp';
import theme from '../../styles/theme';

export const Header = () => {
	const items = headerService();
	const [clicked, setClicked] = React.useState(false);

	const handleMenu = React.useCallback(() => {
		setClicked((previous) => !previous);
	}, [clicked]);

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
			<ContainerMobile clicked={clicked}>
				<MenuMobile clicked={clicked}>
					{clicked ? (
						<ArrowContainer>
							<ArrowUp
								color={theme.colors.background}
								size="32px"
								cursor="pointer"
								onClick={handleMenu}
							/>
						</ArrowContainer>
					) : (
						<Menu
							color="#ffffff"
							size="32px"
							cursor="pointer"
							onClick={handleMenu}
						/>
					)}
				</MenuMobile>
				{/* <LinksMobile clicked={clicked}> */}
				{items.map((item, index) => {
					return (
						<Anchor href={`#` + items[index].link} clicked={clicked}>
							{item.name}
						</Anchor>
					);
				})}
				{/* <Button href="https://google.com" target="_blank">
					Resume
				</Button> */}
				{/* </LinksMobile> */}
			</ContainerMobile>
		</>
	);
};
