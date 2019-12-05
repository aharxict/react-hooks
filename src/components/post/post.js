import React from 'react';

export const Post = ({ id, title, body }) => {
  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{body}</div>
    </>
  )
};
