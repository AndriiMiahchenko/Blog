import Reviews from 'components/Reviews/Reviews'
import './Egypt.scss'
import EgyptDescItems from './EgyptDescItems'
import EgyptItems from './EgyptItems'

type Props = {}

const Egypt = (props: Props) => {
    return (
        <>
            <div className="travel-style-africa">
                <h1 className="title-africa">
                    Egypt Travel Guide: Best Places to Visit
                </h1>
                <p className="text-africa">
                    Egypt, the land of mysteries. Explore the world-famous
                    Pyramids, ancient temples, incredible landscapes, white
                    beaches, and the beautiful reefs of the Red Sea. Egypt is an
                    enormous country that can be traveled on every kind of
                    budget. It is time-consuming to travel around Egypt, so we
                    recommend spending at least one week in Egypt. Use our
                    10-day Egypt travel guide to visit the best places in Egypt
                </p>
                <div>
                    <img
                        src="/images-egypt/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <EgyptItems />
                <EgyptDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Egypt
