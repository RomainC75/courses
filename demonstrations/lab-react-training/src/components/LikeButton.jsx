import React from 'react';
import { useState } from 'react';

const LikeButton = () => {
  const [like, setLike] = useState(0);
  const styleArr = [
    { bg: 'purple', color: 'black' },
    { bg: 'blue', color: 'white' },
    { bg: 'green', color: 'black' },
    { bg: 'yellow', color: 'black' },
    { bg: 'orange', color: 'black' },
    { bg: 'red', color: 'white' },
  ];

  return (
    <button
      onClick={() => setLike(like + 1)}
      style={{
        background: styleArr[like % 6].bg,
        color: styleArr[like % 6].color,
      }}
      className="LikeButton"
    >
      {like} {like === 1 ? 'like' : 'likes'}
    </button>
  );
};

export default LikeButton;
