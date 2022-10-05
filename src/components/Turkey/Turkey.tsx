import Reviews from 'components/Reviews/Reviews'
import './Turkey.scss'
import TurkeyDescItems from './TurkeyDescItems'
import TurkeyItems from './TurkeyItems'

type Props = {}

const Turkey = (props: Props) => {
    return (
        <>
            <div className="travel-style-middle-east">
                <h1 className="title-middle-east">
                    Turkey Travel Guide: The Ultimate 2-week Itinerary
                </h1>
                <p className="text-middle-east">
                    Turkey is a huge country that has something to offer for
                    every kind of traveler. This two-week Turkey travel guide
                    will take you along a part of the Turquoise Coastline of
                    Turkey and into the mainland to the Hot Air Balloons in
                    Cappadocia.
                </p>
                <div>
                    <img
                        src="/images-turkey/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <TurkeyItems/>
                <TurkeyDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Turkey
