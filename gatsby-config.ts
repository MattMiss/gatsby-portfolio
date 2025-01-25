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
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                    {
                        family: "Quicksand",
                        variants: ["300", "400", "500", "700"],
                    },
                    ],
                },
            },
        },
    ],
};

export default config;
