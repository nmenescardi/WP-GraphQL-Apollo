import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PageHeader from '../layout/PageHeader';
import MainSidebar from '../layout/MainSidebar';
import SinglePostContent from '../posts/SinglePostContent';

const GET_SINGLE_POST = gql`
  query($postID: ID!) {
    post(id: $postID) {
      id
      postId
      title
      excerpt
      slug
      content
      author {
        id
        firstName
        lastName
        avatar {
          url
        }
      }
      date
      featuredImage {
        sourceUrl
      }
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      tags {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  }
`;

const Single = props => {
  const postID = props.match.params.id;

  return (
    <Query query={GET_SINGLE_POST} variables={{ postID }}>
      {({ loading, error, data }) => {
        if (loading) return 'loading...';
        if (error) return 'Error. Please try refreshing the page';
        if (!data.post) return '';

        return (
          <Fragment>
            <PageHeader />
            <section className="Single section-gap">
              <div className="container">
                <div className="row">
                  <main className="col-lg-8">
                    <SinglePostContent post={data.post} />
                  </main>
                  <aside className="col-lg-4">
                    <MainSidebar />
                  </aside>
                </div>
              </div>
            </section>
          </Fragment>
        );
      }}
    </Query>
  );
};

export default Single;
