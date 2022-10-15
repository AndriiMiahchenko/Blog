import { jordanItemArray } from './jordanArray'

type Props = {}

type JordanDescProps = {
    id: number
    title: string
    text: string
}

const JordanDescItems = (props: Props) => {
    return (
        <>
            {jordanItemArray.map(({ id, title, text }: JordanDescProps) => (
                <div key={id}>
                    <h2 className="title-item-middle-east">{title}</h2>
                    <p className="text-middle-east">{text}</p>
                </div>
            ))}
        </>
    )
}

export default JordanDescItems
