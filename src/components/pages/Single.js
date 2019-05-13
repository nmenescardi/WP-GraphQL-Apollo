import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PageHeader from '../layout/PageHeader';
import MainSidebar from '../layout/MainSidebar';
import SinglePostContent from '../posts/SinglePostContent';

const GET_SINGLE_POST = gql`
  query {
    post(id: ":cG9zdDo1OTY=") {
      id
      postId
      title
      excerpt
      slug
      content
      author {
        id
        nickname
        slug
      }
      date
      featuredImage {
        sourceUrl
      }
    }
  }
`;

export class Single extends Component {
  render() {
    const { match, data } = this.props;

    //console.log('props.data', data);

    //match.params.id
    return (
      <Fragment>
        <PageHeader />
        <section className="blog-single section-gap">
          <div className="container">
            <div className="row">
              <main className="col-lg-8">
                {!data.loading && <SinglePostContent {...data} />}
              </main>
              <aside className="col-lg-4 sidebar">
                <MainSidebar />
              </aside>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default graphql(GET_SINGLE_POST)(Single);
