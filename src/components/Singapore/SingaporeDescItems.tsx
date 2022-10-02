import { singaporeItemArray } from './singaporeArray'

type Props = {}

type SingaporeDescProps = {
    id: number
    title: string
    text: string
}

const SingaporeDescItems = (props: Props) => {
    return (
        <>
            {singaporeItemArray.map(
                ({ id, title, text }: SingaporeDescProps) => (
                    <div key={id}>
                        <h2 className="title-item">{title}</h2>
                        <p className="text">{text}</p>
                    </div>
                )
            )}
        </>
    )
}

export default SingaporeDescItems
