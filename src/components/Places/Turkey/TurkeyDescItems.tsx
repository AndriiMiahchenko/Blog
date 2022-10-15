import { turkeyItemArray } from './turkeyArray'

type Props = {}

type TurkeyDescProps = {
    id: number
    title: string
    text: string
}

const TurkeyDescItems = (props: Props) => {
    return (
        <>
            {turkeyItemArray.map(({ id, title, text }: TurkeyDescProps) => (
                <div key={id}>
                    <h2 className="title-item-middle-east">{title}</h2>
                    <p className="text-middle-east">{text}</p>
                </div>
            ))}
        </>
    )
}

export default TurkeyDescItems
