import React from "react";
import Layout from "../components/Layout";
import Helmet from 'react-helmet';
import { graphql } from "gatsby";

export const IndexLayoutQuery = graphql`
    query IndexLayoutQuery {
        site {
            siteMetadata {
                title
                description
                keywords
                siteUrl
                type
                siteName
            }
        }
        file(relativePath: {eq: "blog.jpg"}) {
            childImageSharp {
              resize(width: 200) {
                src
              }
            }
        }
    }
`

const Home = ({data}) => (
    <Layout>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { property: 'og:title', content: data.site.siteMetadata.title },
                { property: 'og:description', content: data.site.siteMetadata.description },
                { property: 'og:url', content: data.site.siteMetadata.siteUrl },
                { property: 'og:keywords', content: data.site.siteMetadata.keywords },
                { property: 'og:type', content: data.site.siteMetadata.type },
                { property: 'og:site_name', content: data.site.siteMetadata.siteName },
                { property: 'og:image', content: data.site.siteMetadata.siteUrl + data.file.childImageSharp.resize.src }
            ]}
         />
        <h1>Home</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Layout>
);

export default Home;
