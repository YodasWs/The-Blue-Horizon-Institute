yodasws.page('pageArchive').setRoute({
	title: 'Archive',
	canonicalRoute: '/archive/',
	template(match, ...p) {
		const path = p.join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/archive/index.html';
		}
		return {
			canonicalRoute: '/archive/' + path.join('/') + '/',
			template: 'pages/archive/' + path.join('.') + '.html',
		};
	},
	route: '/archive(/.*)*',
}).on('load', () => {
	console.log('Page loaded!');
});
