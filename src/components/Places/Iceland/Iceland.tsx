import Reviews from 'components/Reviews/Reviews'
import './Iceland.scss'
import IcelandDescItems from './IcelandDescItems'
import IcelandItems from './IcelandItems'

type Props = {}

const Iceland = (props: Props) => {
    return (
        <>
            <div className="travel-style-europe">
                <h1 className="title-europe">Two-week Iceland Travel Guide</h1>
                <p className="text-europe">
                    In a country with more sheep than citizens, you can’t drive
                    faster than 90 km/h on the main roads. A 2-week trip is the
                    ideal amount of days to experience most of Iceland but you
                    can do this same trip in 10 days if you’d like. During
                    winter always keep an eye on road.is to check if the roads
                    aren’t closed because of the snow.
                </p>
                <div>
                    <img
                        src="/images-iceland/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <IcelandItems />
                <IcelandDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Iceland
