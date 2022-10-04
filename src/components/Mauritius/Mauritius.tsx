import Reviews from 'components/Reviews/Reviews'
import './Mauritius.scss'
import MauritiusDescItems from './MauritiusDescItems'
import MauritiusItems from './MauritiusItems'

type Props = {}

const Mauritius = (props: Props) => {
    return (
        <>
            <div className="travel-style-africa">
                <h1 className="title-africa">
                    7 Best Things To Do in Mauritius
                </h1>
                <p className="text-africa">
                    Mauritius is known as the ultimate destination to relax on
                    paradise looking beaches with azure blue waters. The island
                    is small, yet it has so much to offer. Mauritian resorts and
                    hotels are top of the bill but it gets even better when we
                    start exploring the island a little more.
                </p>
                <div>
                    <img
                        src="/images-mauritius/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <MauritiusItems />
                <MauritiusDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Mauritius
