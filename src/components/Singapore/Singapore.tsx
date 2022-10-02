import Reviews from 'components/Reviews/Reviews'
import './Singapore.scss'
import SingaporeDescItems from './SingaporeDescItems'
import SingaporeItems from './SingaporeItems'

type Props = {}

const Singapore = (props: Props) => {
    return (
        <>
            <div className="travel-style">
                <h1 className="title">7 Best Things To Do in Singapore</h1>
                <p className="text">
                    Singapore is the smallest country in Southeast Asia.
                    Nevertheless, the capital city feels like entering a city of
                    the future. Singapore is a great mix of architecture, green
                    parks, smelling species, and altogether one of the cleanest
                    cities in the world. Until 1965 Singapore was part of
                    Malaysia. Gardens by the Bay and Marina Bay Sands are just a
                    few of the city’s iconic sights. It is super easy to get
                    around the city, so we made a 2-day guide of great things to
                    do in Singapore.
                </p>

                <div>
                    <img
                        src="/images-singapore/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <SingaporeItems />
                <SingaporeDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Singapore
