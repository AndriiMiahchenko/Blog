import Reviews from 'components/Reviews/Reviews'
import './Thailand.scss'
import ThailandDescItems from './ThailandDescItems'
import ThailandItems from './ThailandItems'

type Props = {}

const Thailand = (props: Props) => {
    return (
        <>
            <div className="travel-style">
                <h1 className="title">5 Best Things To Do in Thailand</h1>
                <p className="text">
                    From the tropical islands and flavourful cuisine to the
                    stunning temples and famed martial arts. A traveler's
                    favorite!
                </p>

                <div>
                    <img
                        src="/images-thailand/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <ThailandItems />
                <ThailandDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Thailand
