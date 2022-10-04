import { spainItemArray } from './spainArray'

type Props = {}

type SpainDescProps = {
    id: number
    title: string
    text: string
}

const SpainDescItems = (props: Props) => {
    return (
        <>
            {spainItemArray.map(({ id, title, text }: SpainDescProps) => (
                <div key={id}>
                    <h2 className="title-item-europe">{title}</h2>
                    <p className="text-europe">{text}</p>
                </div>
            ))}
        </>
    )
}

export default SpainDescItems
