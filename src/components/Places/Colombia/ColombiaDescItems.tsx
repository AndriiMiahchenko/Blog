import { colombiaItemArray } from './colombiaArray'

type Props = {}

type ColombiaDescProps = {
    id: number
    title: string
    text: string
}

const ColombiaDescItems = (props: Props) => {
    return (
        <>
            {colombiaItemArray.map(({ id, title, text }: ColombiaDescProps) => (
                <div key={id}>
                    <h2 className="title-item-america">{title}</h2>
                    <p className="text-america">{text}</p>
                </div>
            ))}
        </>
    )
}

export default ColombiaDescItems
