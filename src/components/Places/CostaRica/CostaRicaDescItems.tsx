import { costaRicaItemArray } from './costaRicaArray'

type Props = {}

type CostaRicaDescProps = {
    id: number
    title: string
    text: string
}

const CostaRicaDescItems = (props: Props) => {
    return (
        <>
            {costaRicaItemArray.map(
                ({ id, title, text }: CostaRicaDescProps) => (
                    <div key={id}>
                        <h2 className="title-item-america">{title}</h2>
                        <p className="text-america">{text}</p>
                    </div>
                )
            )}
        </>
    )
}

export default CostaRicaDescItems
