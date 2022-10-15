import { singaporeArray } from './singaporeArray'

type Props = {}

type SingaporeProps = {
    id: number
    title: string
    text: string
    image: string
}

const SingaporeItems = (props: Props) => {
    return (
        <>
            {singaporeArray.map(
                ({ id, title, text, image }: SingaporeProps) => (
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
                )
            )}
        </>
    )
}

export default SingaporeItems
