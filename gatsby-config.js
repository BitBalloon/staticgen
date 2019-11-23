const { oneLine } = require('common-tags')

module.exports = {
  siteMetadata: {
    title: `StaticGen`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    repo: 'https://github.com/netlify/staticgen',
    titleHome: 'StaticGen | Top Open Source Static Site Generators',
    subtitle: 'A List of Static Site Generators for JAMstack Sites',
    description: oneLine`
      StaticGen is a leaderboard of the top open source static site generators. Promoting a static
      approach to building websites.
    `,
    socialPreviewImageFilename: 'staticgen.png',
    shareButtons: ['twitter', 'reddit'],
    shareText: 'Check out StaticGen, a leaderboard of open source static site generators.',
    shareTextProjectStart: 'Check out ',
    shareTextProjectEnd: ', an open source static site generator on the staticgen.com leaderboard.',
    copyrightName: 'Netlify',
    fallbackSortField: 'title',
    navLinks: [
      { url: 'https://jamstack.org', text: 'About JAMstack' },
      { url: 'https://headlesscms.org', text: 'Need a Static CMS?' },
    ],
    sorts: [
      { field: "stars", label: "Stars (7 days)", reverse: true, days: 7 },
      { field: "stars", label: "Stars (30 days)", reverse: true, days: 30 },
      { field: "stars", label: "Stars (total)", reverse: true },
      { field: "followers", label: "Followers (7 days)", reverse: true, days: 7 },
      { field: "followers", label: "Followers (30 days)", reverse: true, days: 30 },
      { field: "followers", label: "Followers (total)", reverse: true },
      { field: "title", label: "Title" },
    ],
    filters: [
      { field: "language", emptyLabel: "Any Language", multiple: true },
      { field: "templates", emptyLabel: "Any Template", multiple: true },
      { field: "license", emptyLabel: "Any License", multiple: true },
    ],
    fields: [
      { name: "language", label: "Languages" },
      { name: "templates", label: "Templates" },
      { name: "license", label: "License" },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
