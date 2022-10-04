import { moroccoArray } from './moroccoArray'

type Props = {}

type MoroccoProps = {
    id: number
    title: string
    text: string
    image: string
}

const MoroccoItems = (props: Props) => {
    return (
        <>
            {moroccoArray.map(({ id, title, text, image }: MoroccoProps) => (
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

export default MoroccoItems
