const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Portfolio', // Navigation and Site Title
  siteTitleAlt: 'jcode', // Alternative Site title for SEO
  siteTitleShort: 'jcode', // short_name for manifest
  siteHeadline: 'Creating marvelous art & blazing fast websites', // Headline for schema.org JSONLD
  siteUrl: 'https://jcode.dev', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Portfolio static One-Page website with Parallax effect',
  author: 'Jesus Augusto', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@eyisus', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-136187827-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors['orange-lighter'],
}
