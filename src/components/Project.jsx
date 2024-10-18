import React from 'react';

function Project({ title, imgSrc, imgAlt, link, github }) {
  return (
    <section className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-img" src={imgSrc} alt={imgAlt} />
        </a>
      </div>
      <div className="card-footer">
        <a href={github} target="_blank" rel="noopener noreferrer">
          View on GitHub's repository
        </a>
      </div>
    </section>
  );
}

export default Project;