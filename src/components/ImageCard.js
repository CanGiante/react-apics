import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {

    this.imageRef.current.addEventListener('load', this.setSpan);
  }

  setSpan = () => {

    const height = this.imageRef.current.clientHeight; // image height
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }

  render() {

    const { description, urls } = this.props.image;

    return (
      <div 
        className="image-box"
        style={{ gridRowEnd: `span ${this.state.spans}`}}
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