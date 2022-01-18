export const headerService = () => {
	return [
		{ name: 'About', link: 'about' },
		{ name: 'Experience', link: 'experience' },
		{ name: 'Projects', link: 'projects' },
		{ name: 'Skills', link: 'skills' },
		{ name: 'Contact', link: 'contact' }
	];
};
export const aboutService = () => {
	const content = () => {};
	const technologies = () => {
		return ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Python'];
	};

	return;
};

export const skillsService = () => {
	return [
		{
			name: 'Git',
			img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
		},
		{
			name: 'Confluence and Jira',
			img: 'https://camo.githubusercontent.com/4f70df5863fcc35898abfdc8a60628bb6aabf0fea2225cb9c63d3641c48711ef/68747470733a2f2f61746c61737369616e2e67616c6c65727963646e2e76736173736574732e696f2f657874656e73696f6e732f61746c61737369616e2f61746c6173636f64652f312e342e302f313535383132333132313437352f4d6963726f736f66742e56697375616c53747564696f2e53657276696365732e49636f6e732e44656661756c74'
		},
		{
			name: 'JavaScript',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png'
		},
		{
			name: 'TypeScript',
			img: 'https://iconape.com/wp-content/png_logo_vector/typescript.png'
		},
		{
			name: 'React.JS',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
		},
		{
			name: 'Node.JS',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
		},
		{
			name: 'FastAPI',
			img: 'https://cdn.worldvectorlogo.com/logos/fastapi.svg'
		},
		{
			name: 'Python',
			img: 'http://peteletrica.uff.br/wp-content/uploads/sites/509/2021/09/Python-logo-notext.svg_.png'
		}
	];
};
