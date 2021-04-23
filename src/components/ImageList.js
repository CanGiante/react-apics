import './ImageList.css';
import React from 'react';

const ImageList = (props) => {

  const images = props.images.map(({description, id, urls}) => 
    <div 
      key={id}
      className="image-box"  
    > 
      <img 
        src={urls.regular} 
        alt={description}
      /> 
    </div>
  );


  return <div className="images-list">{images}</div>
};

export default ImageList;