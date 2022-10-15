import { maltaArray } from './maltaArray'

type Props = {}

type MaltaProps = {
    id: number
    title: string
    text: string
    image: string
}

const MaltaItems = (props: Props) => {
    return (
        <>
            {maltaArray.map(({ id, title, text, image }: MaltaProps) => (
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

export default MaltaItems
