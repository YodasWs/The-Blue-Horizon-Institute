yodasws.page('pageThreats').setRoute({
	title: 'The Regression Files',
	canonicalRoute: '/threats/',
	template(match, ...p) {
		const path = p.join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/threats/index.html';
		}
		return {
			canonicalRoute: '/threats/' + path.join('/') + '/',
			template: 'pages/threats/' + path.join('.') + '.html',
		};
	},
	route: '/threats(/.*)*',
}).on('load', () => {
	console.log('Page loaded!');
});
