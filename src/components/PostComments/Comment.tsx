import React from 'react'
const Comment = React.forwardRef<HTMLDivElement>((props, commentBox) => {
  return <div ref={commentBox} className="comments" id="comments" tabIndex={0} />
});

Comment.displayName = "Comment"

export default Comment;
