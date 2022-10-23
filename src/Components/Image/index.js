import React from 'react'
import Image from './image';
import './style.css';

const ImageList = ({images}) => {
    const preparedImageList = images.map(image => {
        return <Image key={image.id} image={image} />;
            
    });
  return (
    <div className='image-list-container'>
        {preparedImageList}
    </div>
  )
}

export default ImageList