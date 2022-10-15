import { thailandArray } from './thailandArray'

type Props = {}

type ThailandProps = {
    id: number
    title: string
    text: string
    image: string
}

const ThailandItems = (props: Props) => {
    return (
        <>
            {thailandArray.map(({ id, title, text, image }: ThailandProps) => (
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

export default ThailandItems
