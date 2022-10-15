import Reviews from 'components/Reviews/Reviews'
import './Peru.scss'
import PeruDescItems from './PeruDescItems'
import PeruItems from './PeruItems'

type Props = {}

const Peru = (props: Props) => {
    return (
        <>
            <div className="travel-style-america">
                <h1 className="title-america">
                    Peru Travel Guide: The Ultimate 3-Week Itinerary
                </h1>
                <p className="text-america">
                    Peru is one of the most popular countries in South America
                    due to its incredible diversity and world-famous lost city
                    Machu Picchu. Having 28 of the 32 world climates in one
                    country results in a huge selection of reasons why you
                    should travel to Peru. Hike to pristine lagoons and
                    rainbow-colored mountain tops. Visit deserts, beaches, and
                    the Amazon jungle. Get familiar with their culture,
                    wildlife, and delicious food. Oh, and Alpacas. Many Alpacas!
                </p>
                <div>
                    <img
                        src="/images-peru/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <PeruItems />
                <PeruDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Peru
