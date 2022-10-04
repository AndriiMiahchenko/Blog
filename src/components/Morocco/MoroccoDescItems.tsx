import { moroccoItemArray } from './moroccoArray'

type Props = {}

type MoroccoDescProps = {
    id: number
    title: string
    text: string
}

const MoroccoDescItems = (props: Props) => {
    return (
        <>
            {moroccoItemArray.map(({ id, title, text }: MoroccoDescProps) => (
                <div key={id}>
                    <h2 className="title-item-africa">{title}</h2>
                    <p className="text-africa">{text}</p>
                </div>
            ))}
        </>
    )
}

export default MoroccoDescItems
