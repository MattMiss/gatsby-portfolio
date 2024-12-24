import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Matt Miss Portfolio`,
    siteUrl: `https://www.yourdomain.tld`, // Replace with your actual site URL
  },
  graphqlTypegen: true, // Enables automatic TypeScript type generation for GraphQL queries
  plugins: [
    "gatsby-plugin-postcss", // Enables Tailwind CSS or custom PostCSS processing
    "gatsby-plugin-image", // Provides support for optimized images
    "gatsby-plugin-sharp", // Image processing
    "gatsby-transformer-sharp", // Creates image data for GraphQL
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images", // Used as a reference name in queries
        path: "./src/images/", // Location of your image files
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages", // Optional: source for pages or other content
        path: "./src/pages/",
      },
    },
  ],
};

export default config;
