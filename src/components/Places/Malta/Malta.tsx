import Reviews from 'components/Reviews/Reviews'
import './Malta.scss'
import MaltaDescItems from './MaltaDescItems'
import MaltaItems from './MaltaItems'

type Props = {}

const Malta = (props: Props) => {
    return (
        <>
            <div className="travel-style-europe">
                <h1 className="title-europe">11 Best Things To Do in Malta</h1>
                <p className="text-europe">
                    For a small archipelago, Malta has so much to offer. Whether
                    it’s driving among dramatic landscapes, taking photos of
                    ancient buildings, or snorkeling on the fringes of paradise
                    beaches, there’s a surprise around every corner. Head to the
                    capital of Valletta for the perfect city weekend trip or
                    spend a summer vacation traveling by boat between the
                    islands, seeing spectacular nature and marine life. Enjoy
                    all the top things to do in Malta with this complete travel
                    guide.
                </p>
                <div>
                    <img
                        src="/images-malta/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <MaltaItems />
                <MaltaDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Malta
