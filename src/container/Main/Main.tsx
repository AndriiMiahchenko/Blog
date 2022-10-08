import CategoryRoutes from 'components/Category/CategoryRoutes'
import LocationsRoutes from 'components/LocationsRoutes/LocationsRoutes'
import Slider from 'components/Slider/Slider'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Slider />
            <CategoryRoutes />
            <LocationsRoutes />
        </>
    )
}

export default Main
