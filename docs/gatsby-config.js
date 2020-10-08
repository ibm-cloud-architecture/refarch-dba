module.exports = {
  siteMetadata: {
    title: 'IBM Garage Digital Business Automation Reference Architecture',
    description: 'This project represents the body of knowledge around Digital Business Automation architecture and can be considered as a live book, we are writing from our consulting engagements',
    keywords: 'gatsby,theme,carbon'
  },
  pathPrefix: `/refarch-dba`,
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        titleType: 'append',
        repository: {
          baseUrl: 'https://github.com/ibm-cloud-architecture/refarch-dba',
          subDirectory: '/docs',
          branch: 'master'
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149377589-3"
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-check-links'
        ]
      }
    },
  ],
};
