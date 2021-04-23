import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {

    this.imageRef.current.addEventListener('load', this.setSpan);
  }

  setSpan = () => {
    
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div 
        className="image-box"  
      > 
        <img 
          src={urls.regular} 
          alt={description}
          ref={this.imageRef}
        /> 
      </div>
    )
    
  }
}

export default ImageCard;