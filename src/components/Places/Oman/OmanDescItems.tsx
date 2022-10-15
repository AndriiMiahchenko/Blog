import { omanItemArray } from './omanArray'

type Props = {}

type OmanDescProps = {
    id: number
    title: string
    text: string
}

const OmanDescItems = (props: Props) => {
    return (
        <>
            {omanItemArray.map(({ id, title, text }: OmanDescProps) => (
                <div key={id}>
                    <h2 className="title-item-middle-east">{title}</h2>
                    <p className="text-middle-east">{text}</p>
                </div>
            ))}
        </>
    )
}

export default OmanDescItems
