import CategoryRoutes from 'components/Category/CategoryRoutes'
import LocationsRoutes from 'components/LocationsRoutes/LocationsRoutes'
import Slider from 'components/Slider/Slider'

type Props = {
    locationsLikeState: {
        [id: number]: boolean
    }
    toggleLikeState: (id: number) => void
}

const Main = ({ locationsLikeState, toggleLikeState }: Props) => {
    return (
        <>
            <Slider />
            <CategoryRoutes
                locationsLikeState={locationsLikeState}
                toggleLikeState={toggleLikeState}
            />
            <LocationsRoutes
                locationsLikeState={locationsLikeState}
                toggleLikeState={toggleLikeState}
            />
        </>
    )
}

export default Main
