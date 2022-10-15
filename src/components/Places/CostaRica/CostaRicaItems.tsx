import { costaRicaArray } from './costaRicaArray'

type Props = {}

type CostaRicaProps = {
    id: number
    title: string
    text: string
    image: string
}

const CostaRicaItems = (props: Props) => {
    return (
        <>
            {costaRicaArray.map(({ id, title, text, image }: CostaRicaProps) => (
                <div key={id}>
                    <h2 className="title-item-america">{title}</h2>
                    <p className="text-america">{text}</p>
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

export default CostaRicaItems
