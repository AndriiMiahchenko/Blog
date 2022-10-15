import { turkeyArray } from './turkeyArray'

type Props = {}

type TurkeyProps = {
    id: number
    title: string
    text: string
    image: string
}

const TurkeyItems = (props: Props) => {
    return (
        <>
            {turkeyArray.map(({ id, title, text, image }: TurkeyProps) => (
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

export default TurkeyItems
