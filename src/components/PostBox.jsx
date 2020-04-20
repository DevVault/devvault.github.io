import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';

class PostBox extends React.Component {
  render() {
    const postPath = get(this, 'props.post.frontmatter.path');
    const postTitle = get(this, 'props.post.frontmatter.title');
    const postDate = get(this, 'props.post.frontmatter.date');
    const postPreview = get(this, 'props.post.frontmatter.preview');
    const postDesc = get(this, 'props.post.excerpt');

    const imageSrc = postPreview.childImageSharp.sizes.src;

    return (
      <div className="post">
        <div className="pcontainer">
          <img className="preview" alt="preview" src={imageSrc} />
        </div>
        <div className="info">
          <h3 className="title">
            <Link to={postPath}>
              {postTitle}
              {' '}
              (
              {postDate}
              )
            </Link>
          </h3>
          <div className="description">
            <span dangerouslySetInnerHTML={{ __html: postDesc }} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostBox;
