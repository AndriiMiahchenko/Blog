import { icelandItemArray } from './icelandArray'

type Props = {}

type IcelandDescProps = {
    id: number
    title: string
    text: string
}

const IcelandDescItems = (props: Props) => {
    return (
        <>
            {icelandItemArray.map(({ id, title, text }: IcelandDescProps) => (
                <div key={id}>
                    <h2 className="title-item-europe">{title}</h2>
                    <p className="text-europe">{text}</p>
                </div>
            ))}
        </>
    )
}

export default IcelandDescItems
