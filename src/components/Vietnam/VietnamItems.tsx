import { vietnamArray } from './vietnamArray'

type Props = {}

type VietnamProps = {
    id: number
    title: string
    text: string
    image: string
}

const VietnamItems = (props: Props) => {
    return (
        <>
            {vietnamArray.map(({ id, title, text, image }: VietnamProps) => (
                <div key={id}>
                    <h2 className="title-item">{title}</h2>
                    <p className="text">{text}</p>
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

export default VietnamItems
