yodasws.page('pageEconomy').setRoute({
	title: 'The Knowledge Economy',
	canonicalRoute: '/economy/',
	template(match, ...p) {
		const path = p.join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/economy/index.html';
		}
		return {
			canonicalRoute: '/economy/' + path.join('/') + '/',
			template: 'pages/economy/' + path.join('.') + '.html',
		};
	},
	route: '/economy(/.*)*',
});
