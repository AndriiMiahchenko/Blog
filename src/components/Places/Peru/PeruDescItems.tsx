import { peruItemArray } from './peruArray'

type Props = {}

type PeruDescProps = {
    id: number
    title: string
    text: string
}

const PeruDescItems = (props: Props) => {
    return (
        <>
            {peruItemArray.map(({ id, title, text }: PeruDescProps) => (
                <div key={id}>
                    <h2 className="title-item-america">{title}</h2>
                    <p className="text-america">{text}</p>
                </div>
            ))}
        </>
    )
}

export default PeruDescItems
