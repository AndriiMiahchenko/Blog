import { malaysiaItemArray } from './malaysiaArray'

type Props = {}

type MalaysiaDescProps = {
    id: number
    title: string
    text: string
}

const MalaysiaDescItems = (props: Props) => {
    return (
        <>
            {malaysiaItemArray.map(({ id, title, text }: MalaysiaDescProps) => (
                <div key={id}>
                    <h2 className="title-item">{title}</h2>
                    <p className="text">{text}</p>
                </div>
            ))}
        </>
    )
}

export default MalaysiaDescItems
