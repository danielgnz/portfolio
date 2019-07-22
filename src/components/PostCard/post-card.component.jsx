import React from "react"

import avatar from "../../images/avatar.jpeg"

import {
  Wrapper,
  Description,
  PostLink,
  OtherInfo,
  Avatar,
  Name,
} from "./post-card.styles"

export const PostCard = ({ path, title, excerpt, author, date }) => {
  console.log(path)
  return (
    <Wrapper>
      <h2>{title}</h2>
      <Description>{excerpt}</Description>
      <OtherInfo>
        <Avatar src={avatar} alt="author-avatar" />
        <span style={{ color: "grey" }}>
          <Name>{author}</Name> on {date}
        </span>
      </OtherInfo>
      <PostLink to={path}></PostLink>
    </Wrapper>
  )
}

export default PostCard
