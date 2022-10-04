import { egyptArray } from './egyptArray'

type Props = {}

type EgyptProps = {
    id: number
    title: string
    text: string
    image: string
}

const EgyptItems = (props: Props) => {
    return (
        <>
            {egyptArray.map(({ id, title, text, image }: EgyptProps) => (
                <div key={id}>
                    <h2 className="title-item-africa">{title}</h2>
                    <p className="text-africa">{text}</p>
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

export default EgyptItems
