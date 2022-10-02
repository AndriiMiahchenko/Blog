import Africa from 'components/Africa/Africa'
import America from 'components/America/America'
import Asia from 'components/Asia/Asia'
import Australia from 'components/Australia/Australia'
import Bali from 'components/Bali/Bali'
import Europe from 'components/Europe/Europe'
import Locations from 'components/Locations/Locations'
import MiddleEast from 'components/MiddleEast/MiddleEast'
import Singapore from 'components/Singapore/Singapore'
import Slider from 'components/Slider/Slider'
import Thailand from 'components/Thailand/Thailand'
import Vietnam from 'components/Vietnam/Vietnam'
import { Routes, Route } from 'react-router-dom'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Slider />

            <Routes>
                <Route path="/" element={<Locations />} />
                <Route path="asia" element={<Asia />}></Route>
                <Route path="asia/bali" element={<Bali />} />
                <Route path="asia/vietnam" element={<Vietnam />} />
                <Route path="asia/singapore" element={<Singapore />} />
                <Route path="asia/thailand" element={<Thailand />} />
                <Route path="europe" element={<Europe />} />
                <Route path="africa" element={<Africa />} />
                <Route path="america" element={<America />} />
                <Route path="middle-east" element={<MiddleEast />} />
                <Route path="australia" element={<Australia />} />
            </Routes>
        </>
    )
}

export default Main
