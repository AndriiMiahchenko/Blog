import { mauritiusArray } from './mauritiusArray'

type Props = {}

type MauritiusProps = {
    id: number
    title: string
    text: string
    image: string
}

const MauritiusItems = (props: Props) => {
    return (
        <>
            {mauritiusArray.map(
                ({ id, title, text, image }: MauritiusProps) => (
                    <div key={id}>
                        <h2 className="title-item-africa">{title}</h2>
                        <p className="text-africa">{text}</p>
                        <div>
                            <img
                                src={image}
                                alt=""
                                style={{ width: '800px', height: '550px' }}
                            />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

export default MauritiusItems
