import { egyptItemArray } from './egyptArray'

type Props = {}

type EgyptDescProps = {
    id: number
    title: string
    text: string
}

const EgyptDescItems = (props: Props) => {
    return (
        <>
            {egyptItemArray.map(({ id, title, text }: EgyptDescProps) => (
                <div key={id}>
                    <h2 className="title-item-africa">{title}</h2>
                    <p className="text-africa">{text}</p>
                </div>
            ))}
        </>
    )
}

export default EgyptDescItems
