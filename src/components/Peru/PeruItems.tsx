import { peruArray } from './peruArray'

type Props = {}

type PeruProps = {
    id: number
    title: string
    text: string
    image: string
}

const PeruItems = (props: Props) => {
    return (
        <>
            {peruArray.map(({ id, title, text, image }: PeruProps) => (
                <div key={id}>
                    <h2 className="title-item-america">{title}</h2>
                    <p className="text-america">{text}</p>
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

export default PeruItems
