import { victoriaArray } from './victoriaArray'

type Props = {}

type VictoriaProps = {
    id: number
    title: string
    text: string
    image: string
}

const VictoriaItems = (props: Props) => {
    return (
        <>
            {victoriaArray.map(({ id, title, text, image }: VictoriaProps) => (
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

export default VictoriaItems
