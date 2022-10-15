import { queenslandItemArray } from './queenslandArray'

type Props = {}

type QueenslandDescProps = {
    id: number
    title: string
    text: string
}

const QueenslandDescItems = (props: Props) => {
    return (
        <>
            {queenslandItemArray.map(
                ({ id, title, text }: QueenslandDescProps) => (
                    <div key={id}>
                        <h2 className="title-item-australia">{title}</h2>
                        <p className="text-australia">{text}</p>
                    </div>
                )
            )}
        </>
    )
}

export default QueenslandDescItems
