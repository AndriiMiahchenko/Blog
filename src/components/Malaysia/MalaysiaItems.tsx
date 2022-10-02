import { malaysiaArray } from './malaysiaArray'

type Props = {}

type MalaysiaProps = {
    id: number
    title: string
    text: string
    image: string
}

const MalaysiaItems = (props: Props) => {
    return (
        <>
            {malaysiaArray.map(({ id, title, text, image }: MalaysiaProps) => (
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

export default MalaysiaItems
