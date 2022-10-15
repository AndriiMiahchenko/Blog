import { jordanArray } from './jordanArray'

type Props = {}

type JordanProps = {
    id: number
    title: string
    text: string
    image: string
}

const JordanItems = (props: Props) => {
    return (
        <>
            {jordanArray.map(({ id, title, text, image }: JordanProps) => (
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

export default JordanItems
