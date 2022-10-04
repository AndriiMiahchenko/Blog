import Reviews from 'components/Reviews/Reviews'
import './Colombia.scss'
import ColombiaDescItems from './ColombiaDescItems'
import ColombiaItems from './ColombiaItems'

type Props = {}

const Colombia = (props: Props) => {
    return (
        <>
            <div className="travel-style-america">
                <h1 className="title-america">
                    Colombia Itinerary: The Complete 3-Week Travel Guide
                </h1>
                <p className="text-america">
                    Discover the unexpected in extraordinary Colombia! In a
                    country of two sides, expect to find steel skyscrapers
                    bordering colorful pueblos, beaches backing onto snow-capped
                    mountains, and dense green jungle merging into red deserts.
                    Travel this immense country with our 3-week Colombia
                    itinerary, eating plenty of arepas as you go and always
                    saying ‘yes’ to every adventure—whether that’s dancing in
                    the street or tubing down roaring rivers.
                </p>
                <div>
                    <img
                        src="/images-colombia/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <ColombiaItems />
                <ColombiaDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Colombia
