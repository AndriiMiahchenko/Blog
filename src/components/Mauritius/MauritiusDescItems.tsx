import { mauritiusItemArray } from './mauritiusArray'

type Props = {}

type MauritiusDescProps = {
    id: number
    title: string
    text: string
}

const MauritiusDescItems = (props: Props) => {
    return (
        <>
            {mauritiusItemArray.map(({ id, title, text }: MauritiusDescProps) => (
                <div key={id}>
                    <h2 className="title-item-africa">{title}</h2>
                    <p className="text-africa">{text}</p>
                </div>
            ))}
        </>
    )
}

export default MauritiusDescItems
