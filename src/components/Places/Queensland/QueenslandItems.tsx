import { queenslandArray } from './queenslandArray'

type Props = {}

type QueenslandProps = {
    id: number
    title: string
    text: string
    image: string
}

const QueenslandItems = (props: Props) => {
    return (
        <>
            {queenslandArray.map(({ id, title, text, image }: QueenslandProps) => (
                <div key={id}>
                    <h2 className="title-item-australia">{title}</h2>
                    <p className="text-australia">{text}</p>
                    <div>
                        <img
                            src={image}
                            alt=""
                            style={{ width: '800px', height: '550px' }}
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default QueenslandItems
