import React, { Fragment } from 'react';
import CategoryList from '../taxonomies/CategoryList';
import TagsCloud from '../taxonomies/TagsCloud';
import UserBox from '../users/UserBox';

const MainSidebar = () => {
  return (
    <Fragment>
      <UserBox />
      <CategoryList />
      <TagsCloud />
    </Fragment>
  );
};

export default MainSidebar;
