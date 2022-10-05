import { omanArray } from './omanArray'

type Props = {}

type OmanProps = {
    id: number
    title: string
    text: string
    image: string
}

const OmanItems = (props: Props) => {
    return (
        <>
            {omanArray.map(({ id, title, text, image }: OmanProps) => (
                <div key={id}>
                    <h2 className="title-item-middle-east">{title}</h2>
                    <p className="text-middle-east">{text}</p>
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

export default OmanItems
