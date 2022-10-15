import { spainArray } from './spainArray'

type Props = {}

type SpainProps = {
    id: number
    title: string
    text: string
    image: string
}

const SpainItems = (props: Props) => {
    return (
        <>
            {spainArray.map(({ id, title, text, image }: SpainProps) => (
                <div key={id}>
                    <h2 className="title-item-europe">{title}</h2>
                    <p className="text-europe">{text}</p>
                    <div>
                        <img
                            src={image}
                            alt=""
                            style={{ width: '800px', height: '550px' }}
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default SpainItems
