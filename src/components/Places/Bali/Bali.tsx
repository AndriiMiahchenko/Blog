import Reviews from 'components/Reviews/Reviews'
import './Bali.scss'
import BaliDescItems from './BaliDescItems'
import BaliItems from './BaliItems'

type Props = {}

const Bali = (props: Props) => {
    return (
        <>
            <div className="travel-style">
                <h1 className="title">
                    The Ultimate Bali Travel Guide (3 weeks)
                </h1>
                <p className="text">
                    Bali is popular and for good reason. The island is
                    beautiful, the beaches are perfect for a sun and surf
                    holiday, there are fantastic walks such as through the rice
                    fields or to the top of a volcano, the locals are very
                    welcoming and Bali is also very affordable. This 3-week Bali
                    itinerary includes the most beautiful sights on the island,
                    such as the waterfalls around Ubud, the impressive cliffs of
                    Nusa Penida, and the paradise beaches of Gili Air.
                </p>
                <div>
                    <img
                        src="/images-bali/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <BaliItems />
                <BaliDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Bali
