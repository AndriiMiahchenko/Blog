import Reviews from 'components/Reviews/Reviews'
import './Queensland.scss'
import QueenslandDescItems from './QueenslandDescItems'
import QueenslandItems from './QueenslandItems'

type Props = {}

const Queensland = (props: Props) => {
    return (
        <>
            <div className="travel-style-australia">
                <h1 className="title-australia">
                    BEST QUEENSLAND BEACHES TO SET FOOT ON
                </h1>
                <p className="text-australia">
                    My list of favourite Queensland beaches has grown over the
                    years with each visit to the sunshine state, but is still
                    far from complete. With the Queensland coast stretching over
                    7,400 kilometres, there are many beaches I’ve yet to set
                    foot on, but with summer fast approaching I thought I’d
                    share my current recommendations in case a Queensland
                    holiday is on your horizon. Queensland’s beaches rank not
                    only among the best in Australia but in the world in many
                    different categories, but for me what categorizes a great
                    beach has changed over the years now that we have young
                    kids.
                </p>
                <div>
                    <img
                        src="/images-queensland/1.jpg"
                        alt=""
                        style={{ width: '800px', height: '500px' }}
                    />
                </div>
                <QueenslandItems />
                <QueenslandDescItems />
            </div>
            <Reviews />
        </>
    )
}

export default Queensland
