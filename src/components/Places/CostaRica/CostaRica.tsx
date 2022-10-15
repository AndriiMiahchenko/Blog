import Reviews from 'components/Reviews/Reviews'
import './CostaRica.scss'
import CostaRicaDescItems from './CostaRicaDescItems'
import CostaRicaItems from './CostaRicaItems'

type Props = {}

const CostaRica = (props: Props) => {
    return (
        <>
            <div className="travel-style-america">
                <h1 className="title-america">
                    Costa Rica Itinerary: Ultimate 7-day Travel Guide
                </h1>
                <p className="text-america">
                    Lush rainforest, natural hot springs, endless wildlife, and
                    tropical beaches: experience it all within one week in Costa
                    Rica. Costa Rica is a country that has got ecotourism right
                    as they put nature in first place. Fun fact: They reforested
                    about 9% of their country since 1996! It’s where wild sloths
                    can be seen at beaches and monkeys swinging trees close to
                    your hotel. Fall in love with the ‘Pura Vida’ state of mind
                    of the Costa Ricans and discover the best of Costa Rica in
                    this 7-day itinerary.
                </p>
                <div>
                    <img
                        src="/images-costa-rica/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <CostaRicaItems />
                <CostaRicaDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default CostaRica
