import { italyItemArray } from './italyArray'

type Props = {}

type ItalyDescProps = {
    id: number
    title: string
    text: string
}

const ItalyDescItems = (props: Props) => {
    return (
        <>
            {italyItemArray.map(({ id, title, text }: ItalyDescProps) => (
                <div key={id}>
                    <h2 className="title-item-europe">{title}</h2>
                    <p className="text-europe">{text}</p>
                </div>
            ))}
        </>
    )
}

export default ItalyDescItems
