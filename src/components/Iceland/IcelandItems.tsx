import { icelandArray } from './icelandArray'

type Props = {}

type IcelandProps = {
    id: number
    title: string
    text: string
    image: string
}

const IcelandItems = (props: Props) => {
    return (
        <>
            {icelandArray.map(({ id, title, text, image }: IcelandProps) => (
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

export default IcelandItems
