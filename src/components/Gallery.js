import React, { Component } from "react";
export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        image: this.props.gallery[0],
      });
    }, 500);
  }
  render() {
    const { gallery } = this.props;
    const { image } = this.state;
    return (
      <div className="gallery df jc-sb ai-c">
        {!gallery ? (
          "...loading"
        ) : (
          <div className="gallery__previews df fd-c ai-c jc-sb">
            {gallery.map((img, imgIdx) => (
              <img
                className="gallery__preview"
                onMouseEnter={() => this.setState({ image: img })}
                key={imgIdx}
                src={img}
                alt="gallery"
              />
            ))}
          </div>
        )}
        <img className="gallery__main" src={image} alt="test" />
      </div>
    );
  }
}

export default Gallery;
