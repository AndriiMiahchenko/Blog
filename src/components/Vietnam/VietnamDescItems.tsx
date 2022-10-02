import { vietnamItemArray } from './vietnamArray'

type Props = {}

type VietnamDescProps = {
    id: number
    title: string
    text: string
}

const VietnamDescItems = (props: Props) => {
    return (
        <>
            {vietnamItemArray.map(({ id, title, text }: VietnamDescProps) => (
                <div key={id}>
                    <h2 className="title-item">{title}</h2>
                    <p className="text">{text}</p>
                </div>
            ))}
        </>
    )
}

export default VietnamDescItems
