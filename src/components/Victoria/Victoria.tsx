import Reviews from 'components/Reviews/Reviews'
import './Victoria.scss'
import VictoriaDescItems from './VictoriaDescItems'
import VictoriaItems from './VictoriaItems'

type Props = {}

const Victoria = (props: Props) => {
    return (
        <>
            <div className="travel-style-australia">
                <h1 className="title-australia">
                    10 of the best secret beaches in Victoria
                </h1>
                <p className="text-australia">
                    Any Victorian worth their coffee beans knows you’d be silly
                    to go north during summer… not with that stunning local
                    coastline to explore.
                </p>
                <div>
                    <img
                        src="/images-victoria/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <VictoriaItems />
                <VictoriaDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Victoria
