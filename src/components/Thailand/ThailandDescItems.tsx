import { thailandItemArray } from './thailandArray'

type Props = {}

type ThailandDescProps = {
    id: number
    title: string
    text: string
}

const ThailandDescItems = (props: Props) => {
    return (
        <>
            {thailandItemArray.map(({ id, title, text }: ThailandDescProps) => (
                <div key={id}>
                    <h2 className="title-item">{title}</h2>
                    <p className="text">{text}</p>
                </div>
            ))}
        </>
    )
}

export default ThailandDescItems
