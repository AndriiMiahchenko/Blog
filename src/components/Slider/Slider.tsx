import Carousel from 'nuka-carousel'

type Props = {}

const Slider = (props: Props) => {
    return (
        <Carousel wrapAround={true} autoplay={true} autoplayInterval={3000}>
            <img src="/images/1.jpg" />
            <img src="/images/2.jpg" />
            <img src="/images/3.jpg" />
            <img src="/images/4.jpg" />
            <img src="/images/5.jpg" />
        </Carousel>
    )
}

export default Slider
