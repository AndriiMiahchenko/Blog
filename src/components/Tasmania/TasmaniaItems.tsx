import { tasmaniaArray } from './tasmaniaArray'

type Props = {}

type TasmaniaProps = {
    id: number
    title: string
    text: string
    image: string
}

const TasmaniaItems = (props: Props) => {
    return (
        <>
            {tasmaniaArray.map(({ id, title, text, image }: TasmaniaProps) => (
                <div key={id}>
                    <h2 className="title-item-australia">{title}</h2>
                    <p className="text-australia">{text}</p>
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

export default TasmaniaItems
