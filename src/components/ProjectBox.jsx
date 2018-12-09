import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';

class ProjectBox extends React.Component {
  render() {
    const postPath = get(this, 'props.post.frontmatter.path');
    const postTitle = get(this, 'props.post.frontmatter.title');
    const postDate = get(this, 'props.post.frontmatter.date');
    const postVersion = get(this, 'props.post.frontmatter.version');
    const postPreview = get(this, 'props.post.frontmatter.preview');
    const postDesc = get(this, 'props.post.excerpt');
    const postLink = get(this, 'props.post.frontmatter.link');

    const imageSrc = postPreview.childImageSharp.sizes.src;

    return (
      <div className="project">
        <h3 className="title">{postTitle}</h3>
        <div className="info">
          <div className="release">
            <div className="date">
              <span>Release date:</span>
              {' '}
              {postDate}
            </div>
            <div className="version">
              <span>Current version:</span>
              {' '}
              {postVersion}
            </div>
          </div>
          <div className="about">
            <div className="pcontainer">
              <img className="preview" src={imageSrc} alt="preview" />
            </div>
            <div className="description">
              <span dangerouslySetInnerHTML={{ __html: postDesc }} />
            </div>
          </div>
        </div>
        <form method="GET" action={postLink}>
          <ul className="actions controls">
            <li><button type="submit" className="fa fa-download">&nbsp;Download</button></li>
            <li><button><Link className="fa fa-comment" style={{ display: 'block', height: '100%' }} to={postPath}>&nbsp;Comment</Link></button></li>
          </ul>
        </form>
      </div>
    );
  }
}

export default ProjectBox;
