import { franceArray } from './franceArray'

type Props = {}

type FranceProps = {
    id: number
    title: string
    text: string
    image: string
}

const FranceItems = (props: Props) => {
    return (
        <>
            {franceArray.map(({ id, title, text, image }: FranceProps) => (
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

export default FranceItems
