import Carousel from 'nuka-carousel'

type Props = {}

const Slider = (props: Props) => {
    return (
        <Carousel wrapAround={true} autoplay={true} autoplayInterval={3000}>
            <img src="/images/1.jpg" alt="ggg" />
            <img src="/images/2.jpg" alt="ggg" />
            <img src="/images/3.jpg" alt="ggg" />
            <img src="/images/4.jpg" alt="ggg" />
            <img src="/images/5.jpg" alt="ggg" />
            <img src="/images/6.jpg" alt="ggg" />
        </Carousel>
    )
}

export default Slider
