import Reviews from 'components/Reviews/Reviews'
import './Spain.scss'
import SpainDescItems from './SpainDescItems'
import SpainItems from './SpainItems'

type Props = {}

const Spain = (props: Props) => {
    return (
        <>
            <div className="travel-style-europe">
                <h1 className="title-europe">
                    Best Things To Do in Barcelona (Travel Guide)
                </h1>
                <p className="text-europe">
                    Barcelona is the perfect getaway in Europe. It offers great
                    public transport, beautiful architecture, city life, and the
                    best part: A beautiful beach. A city trip of about 3-4 days
                    should be enough to cover most of the highlights. These are
                    the things you can do in Barcelona.
                </p>
                <div>
                    <img
                        src="/images-spain/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <SpainItems />
                <SpainDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Spain
