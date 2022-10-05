import Reviews from 'components/Reviews/Reviews'
import './Oman.scss'
import OmanDescItems from './OmanDescItems'
import OmanItems from './OmanItems'

type Props = {}

const Oman = (props: Props) => {
    return (
        <>
            <div className="travel-style-middle-east">
                <h1 className="title-middle-east">
                    Oman Travel Guide: Ultimate 10-day Travel Itinerary
                </h1>
                <p className="text-middle-east">
                    Oman is a country at the border of the United Arab Emirates.
                    It’s a 1-hour flight from Dubai or a 9-hour flight from
                    Amsterdam and brings you a real Arab experience. Oman has
                    countless sand dunes, green ravines filled with palm trees,
                    huge mountain ranges, emerald green natural pools, and a
                    massive part of the country is located on the seaside. Read
                    this complete Oman travel guide.
                </p>
                <div>
                    <img
                        src="/images-oman/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <OmanItems />
                <OmanDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Oman
