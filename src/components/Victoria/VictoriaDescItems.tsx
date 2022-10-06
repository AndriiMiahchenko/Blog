import { victoriaItemArray } from './victoriaArray'

type Props = {}

type VictoriaDescProps = {
    id: number
    title: string
    text: string
}

const VictoriaDescItems = (props: Props) => {
    return (
        <>
            {victoriaItemArray.map(({ id, title, text }: VictoriaDescProps) => (
                <div key={id}>
                    <h2 className="title-item-australia">{title}</h2>
                    <p className="text-australia">{text}</p>
                </div>
            ))}
        </>
    )
}

export default VictoriaDescItems
