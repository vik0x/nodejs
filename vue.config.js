module.exports = {
	lintOnSave: true,
	runtimeCompiler: true,
	outputDir: './public',
	pages: {
		index: {
			// entry for the page
			entry: 'src/main.js',
			// the source template
			template: 'public/index.html',
			// output as dist/index.html
			// filename: 'index.html',
			// when using title option,
			// template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
		},
	},
	// indexPath: './public/index.html',
};
