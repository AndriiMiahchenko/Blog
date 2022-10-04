import Reviews from 'components/Reviews/Reviews'
import './Morocco.scss'
import MoroccoDescItems from './MoroccoDescItems'
import MoroccoItems from './MoroccoItems'

type Props = {}

const Morocco = (props: Props) => {
    return (
        <>
            <div className="travel-style-africa">
                <h1 className="title-africa">
                    Morocco Travel Guide: Best Things To Do
                </h1>
                <p className="text-africa">
                    Morocco: beautiful, diverse, adventurous, and mysterious. On
                    the same day, you can walk with a camel in the Sahara at
                    sunrise, snowboard in the Atlas Mountains by the afternoon,
                    and relax in luxurious medina riads by evening. It is a
                    large country, with legendary scenery that makes it a
                    delight to travel through. Distances can be long, however,
                    the stunning destinations are worth it. Follow this 10-day
                    Morocco travel guide, to include all the amazing highlights
                    of this wonderful country!
                </p>
                <div>
                    <img
                        src="/images-morocco/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <MoroccoItems />
                <MoroccoDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Morocco
