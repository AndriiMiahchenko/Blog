import Reviews from 'components/Reviews/Reviews'
import './Tasmania.scss'
import TasmaniaDescItems from './TasmaniaDescItems'
import TasmaniaItems from './TasmaniaItems'

type Props = {}

const Tasmania = (props: Props) => {
    return (
        <>
            <div className="travel-style-australia">
                <h1 className="title-australia">
                    11 TOWNS IN TASMANIA YOU MUST SET FOOT IN
                </h1>
                <p className="text-australia">
                    If you’re planning an upcoming visit to Tasmania get
                    excited. It’s a unique part of Australia with stunning
                    scenery, unmatched history, and a food and wine scene that
                    will make your taste buds EXPLODE. Just one favour to ask if
                    you don’t mind, please don’t visit for a weekend. Give
                    Tassie at least a week, or three! You can’t do Tasmania on
                    the fly, if you do, you’ll be missing out on seeing some
                    amazing towns. So plan on a good old fashioned road trip,
                    and below are my 11 favourite towns I suggest you highlight
                    on your map to plot your journey.
                </p>
                <div>
                    <img
                        src="/images-tasmania/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <TasmaniaItems/>
                <TasmaniaDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Tasmania
