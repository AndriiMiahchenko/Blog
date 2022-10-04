import Reviews from 'components/Reviews/Reviews'
import './France.scss'
import FranceDescItems from './FranceDescItems'
import FranceItems from './FranceItems'

type Props = {}

const France = (props: Props) => {
    return (
        <>
            <div className="travel-style-europe">
                <h1 className="title-europe">Best Things To Do in Paris</h1>
                <p className="text-europe">
                    Paris: named ‘the city of love’ by the greatest poets,
                    writers, actors, and musicians who found inspiration in the
                    beauty of this mesmerizing city. Whitestone townhouses ooze
                    luxury, the smell of freshly baked croissants drifts through
                    the air, and flowers hang at the sides of cobbled streets.
                    Take a trip to Paris, France, for 2-4 days, spending your
                    days visiting attractions, trendy neighborhoods, and
                    delicious restaurants. Use this Paris guide to plan your
                    trip to one of Europe’s best cities.
                </p>
                <div>
                    <img
                        src="/images-france/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <FranceItems />
                <FranceDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default France
