import Africa from 'components/Africa/Africa'
import America from 'components/America/America'
import Asia from 'components/Asia/Asia'
import Australia from 'components/Australia/Australia'
import Bali from 'components/Bali/Bali'
import Colombia from 'components/Colombia/Colombia'
import CostaRica from 'components/CostaRica/CostaRica'
import Egypt from 'components/Egypt/Egypt'
import Europe from 'components/Europe/Europe'
import France from 'components/France/France'
import Iceland from 'components/Iceland/Iceland'
import Italy from 'components/Italy/Italy'
import Jordan from 'components/Jordan/Jordan'
import Locations from 'components/Locations/Locations'
import Malaysia from 'components/Malaysia/Malaysia'
import Malta from 'components/Malta/Malta'
import Mauritius from 'components/Mauritius/Mauritius'
import MiddleEast from 'components/MiddleEast/MiddleEast'
import Morocco from 'components/Morocco/Morocco'
import Oman from 'components/Oman/Oman'
import Peru from 'components/Peru/Peru'
import Singapore from 'components/Singapore/Singapore'
import Slider from 'components/Slider/Slider'
import Spain from 'components/Spain/Spain'
import Thailand from 'components/Thailand/Thailand'
import Turkey from 'components/Turkey/Turkey'
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
                <Route path="asia/malaysia" element={<Malaysia />} />
                <Route path="europe" element={<Europe />} />
                <Route path="europe/iceland" element={<Iceland />} />
                <Route path="europe/spain" element={<Spain />} />
                <Route path="europe/france" element={<France />} />
                <Route path="europe/italy" element={<Italy />} />
                <Route path="europe/malta" element={<Malta />} />
                <Route path="africa" element={<Africa />} />
                <Route path="africa/egypt" element={<Egypt />} />
                <Route path="africa/mauritius" element={<Mauritius />} />
                <Route path="africa/morocco" element={<Morocco />} />
                <Route path="america" element={<America />} />
                <Route path="america/colombia" element={<Colombia />} />
                <Route path="america/costa-rica" element={<CostaRica />} />
                <Route path="america/peru" element={<Peru />} />
                <Route path="middle-east" element={<MiddleEast />} />
                <Route path="middle-east/jordan" element={<Jordan />} />
                <Route path="middle-east/oman" element={<Oman />} />
                <Route path="middle-east/turkey" element={<Turkey />} />
                <Route path="australia" element={<Australia />} />
            </Routes>
        </>
    )
}

export default Main
