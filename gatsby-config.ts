import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Matt Miss Portfolio`,
        siteUrl: `https://www.mattmiss.github.io`, // Replace with your actual site URL
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
              name: "images",
              path: path.resolve("./src/images/"),
              ignore: [`**/.*`, `**/.cache/**`, `**/node_modules/**`], // Exclude unnecessary files
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: "pages",
              path: path.resolve("./src/pages/"),
              ignore: [`**/.*`, `**/.cache/**`, `**/node_modules/**`], // Exclude unnecessary files
            },
        },
    ],
};

export default config;
