import Reviews from 'components/Reviews/Reviews'
import './Malaysia.scss'
import MalaysiaDescItems from './MalaysiaDescItems'
import MalaysiaItems from './MalaysiaItems'

type Props = {}

const Malaysia = (props: Props) => {
    return (
        <>
            <div className="travel-style">
                <h1 className="title">
                    Malaysia Travel Guide: Tips for the Ultimate Itinerary
                </h1>
                <p className="text">
                    Malaysia, a country of incredible landscapes, colonial
                    towns, delicious food, tropical islands, and friendly
                    people. Because of its rich cultural history, Malaysia is
                    now famous for its cuisine, a mix of Chinese, Indian, and
                    Indonesian traditions. As a holiday destination, Malaysia is
                    still under the radar compared to its neighbors Singapore
                    and Thailand. Its infrastructure is well-developed, which
                    makes for an effortless travel experience. Here’s the
                    complete 2-Week Malaysia Travel Guide.
                </p>

                <div>
                    <img
                        src="/images-malaysia/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <MalaysiaItems />
                <MalaysiaDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Malaysia
