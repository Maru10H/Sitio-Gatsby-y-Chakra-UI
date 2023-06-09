/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mi sitio Gatsby con Chakra UI`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
	 {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        /**
         * @property {boolean} [isBaseProvider=false]
         * if true, will render `<ChakraBaseProvider>`
         */
        isBaseProvider: false,
      },
    },
],
}
