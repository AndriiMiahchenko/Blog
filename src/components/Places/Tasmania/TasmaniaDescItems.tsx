import { tasmaniaItemArray } from './tasmaniaArray'

type Props = {}

type TasmaniaDescProps = {
    id: number
    title: string
    text: string
}

const TasmaniaDescItems = (props: Props) => {
    return (
        <>
            {tasmaniaItemArray.map(({ id, title, text }: TasmaniaDescProps) => (
                <div key={id}>
                    <h2 className="title-item-australia">{title}</h2>
                    <p className="text-australia">{text}</p>
                </div>
            ))}
        </>
    )
}

export default TasmaniaDescItems
