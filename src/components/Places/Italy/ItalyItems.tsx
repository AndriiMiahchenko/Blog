import { italyArray } from './italyArray'

type Props = {}

type ItalyProps = {
    id: number
    title: string
    text: string
    image: string
}

const ItalyItems = (props: Props) => {
    return (
        <>
            {italyArray.map(({ id, title, text, image }: ItalyProps) => (
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

export default ItalyItems
