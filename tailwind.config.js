const production = !process.env.ROLLUP_WATCH;
module.exports = {
	darkMode: false, // or 'media' or 'class'
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
	},
	plugins: [],
	purge: {
		content: ['./src/**/*.svelte'],
		enabled: production, // disable purge in dev
	},
};
