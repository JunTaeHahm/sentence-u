import React from 'react';

import ReactPullToRefresh from 'react-pull-to-refresh';

import { useGetAllPosts, useGetRecentPosts } from '@hooks/usePost';
import PostMenu from '@layouts/PostMenu';

import { Container } from './styles';

const Posts = () => {
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
        <PostMenu />
      </ReactPullToRefresh>
    </Container>
  );
};

export default Posts;
