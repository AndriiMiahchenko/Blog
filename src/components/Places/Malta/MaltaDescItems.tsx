import { maltaItemArray } from './maltaArray'

type Props = {}

type MaltaDescProps = {
    id: number
    title: string
    text: string
}

const MaltaDescItems = (props: Props) => {
    return (
        <>
            {maltaItemArray.map(({ id, title, text }: MaltaDescProps) => (
                <div key={id}>
                    <h2 className="title-item-europe">{title}</h2>
                    <p className="text-europe">{text}</p>
                </div>
            ))}
        </>
    )
}

export default MaltaDescItems
