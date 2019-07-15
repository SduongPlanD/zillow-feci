import React from 'react';
import PhotoGallery from './PhotoGallery.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <PhotoGallery></PhotoGallery>
      </div>
    )
  }
}

export default App;


