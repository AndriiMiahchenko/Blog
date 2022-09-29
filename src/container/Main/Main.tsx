import Asia from 'components/Asia/Asia'
import Locations from 'components/Locations/Locations'
import Slider from 'components/Slider/Slider'
import { Routes, Route } from 'react-router-dom'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Slider />

            <Routes>
                <Route path="/" element={<Locations />} />
                <Route path="asia" element={<Asia />} />
            </Routes>
        </>
    )
}

export default Main
