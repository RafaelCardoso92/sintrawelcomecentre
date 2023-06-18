import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const Image = styled.div<{imageSrc: string}>`
    background-image: url("${props => props.imageSrc}");
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
`

type SwipperGalleryTukTukProps = { imageData: Array<string> }

const SwipperGalleryTukTuk = (props: SwipperGalleryTukTukProps) => {
 const renderImages = () => {
    return props.imageData.map(image => {
        return <>
            <Image imageSrc={image}/>
        </>
    })
 }
  return(
    <Carousel
      showThumbs={false}
      showArrows
      width={window.innerWidth < 800 ? "62%" : "37%"}
      showStatus={false}
    >
      {renderImages()}
      </Carousel>  
  )
}

export default SwipperGalleryTukTuk;