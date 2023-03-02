import React from 'react';

import loadable from '@loadable/component';
import ReactPullToRefresh from 'react-pull-to-refresh';

import { useGetAllPosts, useGetRecentPosts } from '@hooks/usePost';

import { Container } from './styles';

const Intro = loadable(() => import('@layouts/Intro'));
const PostMenu = loadable(() => import('@layouts/PostMenu'));
const UserLists = loadable(() => import('@layouts/UserLists'));

const Home = () => {
  const { refetch: allPostsRefetch } = useGetAllPosts();
  const { refetch: recentPostsRefetch } = useGetRecentPosts();

  const handleRefresh = () => {
    allPostsRefetch();
    recentPostsRefetch();
  };

  return (
    <Container>
      <ReactPullToRefresh
        onRefresh={handleRefresh}
        icon={<span className='genericon genericon-next'></span>}
        loading={
          <div className='loading'>
            <span className='loading-ptr-1'></span>
            <span className='loading-ptr-2'></span>
            <span className='loading-ptr-3'></span>
          </div>
        }>
        <Intro />
        <PostMenu slice={3} />
        <UserLists />
      </ReactPullToRefresh>
    </Container>
  );
};

export default Home;
