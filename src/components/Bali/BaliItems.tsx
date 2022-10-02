import { baliArray } from './baliArray'

type Props = {}

type BaliProps = {
    id: number
    title: string
    text: string
    image: string
}

const BaliItems = (props: Props) => {
    return (
        <>
            {baliArray.map(({ id, title, text, image }: BaliProps) => (
                <div key={id}>
                    <h2 className="title-item">{title}</h2>
                    <p className="text">{text}</p>
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

export default BaliItems
