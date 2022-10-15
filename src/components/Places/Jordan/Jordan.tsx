import Reviews from 'components/Reviews/Reviews'
import './Jordan.scss'
import JordanDescItems from './JordanDescItems'
import JordanItems from './JordanItems'

type Props = {}

const Jordan = (props: Props) => {
    return (
        <>
            <div className="travel-style-middle-east">
                <h1 className="title-middle-east">
                    Visiting Petra in Jordan: Ultimate Guide to the Ancient City
                </h1>
                <p className="text-middle-east">
                    Hidden in a valley surrounded by desert and mountains is an
                    entire city carved out of stone. The lost city of Petra is
                    one of the seven wonders of the world. It has been
                    rediscovered only 200 years ago because it was buried due to
                    the effects of an earthquake. Plan at least one entire day
                    wandering around in Petra. The valley is over 6 kilometers
                    long and offers 15 sights. Even more mind-blowing, is the
                    fact that 85% of Petra is still buried. Use this Petra
                    Jordan Travel Guide to plan your time in Petra.
                </p>
                <div>
                    <img
                        src="/images-jordan/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <JordanItems />
                <JordanDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Jordan
