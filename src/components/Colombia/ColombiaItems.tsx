import { colombiaArray } from './colombiaArray'

type Props = {}

type ColombiaProps = {
    id: number
    title: string
    text: string
    image: string
}

const ColombiaItems = (props: Props) => {
    return (
        <>
            {colombiaArray.map(({ id, title, text, image }: ColombiaProps) => (
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

export default ColombiaItems
