import React from 'react'

const TitlesList = (props) => {
  const { titles } = props

  return (
    <div className="posts-list-current-user">
      {titles && titles.map(title => (
        <div key={title.id} className="border my-1 p-2">
          <div><small>Debut: {title.ReleaseYear}</small></div>
          <h5><strong>{title.TitleName}</strong></h5>
        </div>
      ))}
    </div>
  );
};

export default TitlesList
