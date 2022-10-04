import Reviews from 'components/Reviews/Reviews'
import './Italy.scss'
import ItalyDescItems from './ItalyDescItems'
import ItalyItems from './ItalyItems'

type Props = {}

const Italy = (props: Props) => {
    return (
        <>
            <div className="travel-style-europe">
                <h1 className="title-europe">
                    Italy Travel Guide: The Ultimate 2-week Road Trip
                </h1>
                <p className="text-europe">
                    Italy, the country of pasta and pizza, architecture and
                    history, jaw-dropping sceneries, world-famous cities and
                    medieval little towns, and mouth-watering gelato. That’s
                    right – Italy has it all, and that’s why it is one of the
                    most-traveled destinations in Europe. Multiple visits are
                    needed to see all the country’s highlights. Discover the
                    best of Italy within 2 weeks in this Italy Travel Guide.
                </p>
                <div>
                    <img
                        src="/images-italy/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <ItalyItems />
                <ItalyDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Italy
