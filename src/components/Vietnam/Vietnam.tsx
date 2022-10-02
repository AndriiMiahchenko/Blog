import Reviews from 'components/Reviews/Reviews'
import './Vietnam.scss'
import VietnamDescItems from './VietnamDescItems'
import VietnamItems from './VietnamItems'

type Props = {}

const Vietnam = (props: Props) => {
    return (
        <>
            <div className="travel-style">
                <h1 className="title">
                    Vietnam Travel Guide: A Complete 3-Week Itinerary
                </h1>
                <p className="text">
                    Travel through Vietnam! An enormous country, home to
                    tropical forests, limestone cliffs, and exhilarating
                    mountain roads. Away from the wonderful nature, are cities
                    full of culture and fascinating history. And perhaps best of
                    all, eat your way through delicious street food in one of
                    the most flavorsome countries in the world! Discover Vietnam
                    in this 3 or 4 week Vietnam route. Traveling in Vietnam is
                    mostly done by bus or train as there are limited direct
                    flights between places. Three weeks is a good amount of time
                    to travel in Vietnam. If going as far as Ho Chi Minh, allow
                    another week (4 weeks in total) to see the beauty of far
                    south islands like Phu Quoc or the extraordinary maze-like
                    rivers of the Mekong Delta.
                </p>

                <div>
                    <img
                        src="/images-vietnam/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <VietnamItems />
                <VietnamDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Vietnam
