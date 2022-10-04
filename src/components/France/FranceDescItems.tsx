import { franceItemArray } from './franceArray'

type Props = {}

type FranceDescProps = {
    id: number
    title: string
    text: string
}

const FranceDescItems = (props: Props) => {
    return (
        <>
            {franceItemArray.map(({ id, title, text }: FranceDescProps) => (
                <div key={id}>
                    <h2 className="title-item-europe">{title}</h2>
                    <p className="text-europe">{text}</p>
                </div>
            ))}
        </>
    )
}

export default FranceDescItems
