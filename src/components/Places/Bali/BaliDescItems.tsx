import { baliItemArray } from './baliArray'

type Props = {}

type BaliDescProps = {
    id: number
    title: string
    text: string
}

const BaliDescItems = (props: Props) => {
    return (
        <>
            {baliItemArray.map(({ id, title, text }: BaliDescProps) => (
                <div key={id}>
                    <h2 className="title-item">{title}</h2>
                    <p className="text">{text}</p>
                </div>
            ))}
        </>
    )
}

export default BaliDescItems
