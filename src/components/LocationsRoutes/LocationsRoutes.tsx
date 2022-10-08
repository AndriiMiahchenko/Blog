import Bali from 'components/Bali/Bali'
import Colombia from 'components/Colombia/Colombia'
import CostaRica from 'components/CostaRica/CostaRica'
import Egypt from 'components/Egypt/Egypt'
import France from 'components/France/France'
import Iceland from 'components/Iceland/Iceland'
import Italy from 'components/Italy/Italy'
import Jordan from 'components/Jordan/Jordan'
import Locations from 'components/Locations/Locations'
import Malaysia from 'components/Malaysia/Malaysia'
import Malta from 'components/Malta/Malta'
import Mauritius from 'components/Mauritius/Mauritius'
import Morocco from 'components/Morocco/Morocco'
import Oman from 'components/Oman/Oman'
import Peru from 'components/Peru/Peru'
import Queensland from 'components/Queensland/Queensland'
import Singapore from 'components/Singapore/Singapore'
import Spain from 'components/Spain/Spain'
import Tasmania from 'components/Tasmania/Tasmania'
import Thailand from 'components/Thailand/Thailand'
import Turkey from 'components/Turkey/Turkey'
import Victoria from 'components/Victoria/Victoria'
import Vietnam from 'components/Vietnam/Vietnam'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

type Props = {}

const LocationsRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<Locations />} />
            {/* <Route path="asia" element={<Asia />}></Route> */}
            <Route path="bali" element={<Bali />} />
            <Route path="vietnam" element={<Vietnam />} />
            <Route path="singapore" element={<Singapore />} />
            <Route path="thailand" element={<Thailand />} />
            <Route path="malaysia" element={<Malaysia />} />
            {/* <Route path="europe" element={<Europe />} /> */}
            <Route path="iceland" element={<Iceland />} />
            <Route path="spain" element={<Spain />} />
            <Route path="france" element={<France />} />
            <Route path="italy" element={<Italy />} />
            <Route path="malta" element={<Malta />} />
            {/* <Route path="africa" element={<Africa />} /> */}
            <Route path="egypt" element={<Egypt />} />
            <Route path="mauritius" element={<Mauritius />} />
            <Route path="morocco" element={<Morocco />} />
            {/* <Route path="america" element={<America />} /> */}
            <Route path="colombia" element={<Colombia />} />
            <Route path="costa-rica" element={<CostaRica />} />
            <Route path="peru" element={<Peru />} />
            {/* <Route path="middle-east" element={<MiddleEast />} /> */}
            <Route path="jordan" element={<Jordan />} />
            <Route path="oman" element={<Oman />} />
            <Route path="turkey" element={<Turkey />} />
            {/* <Route path="australia" element={<Australia />} /> */}
            <Route path="queensland" element={<Queensland />} />
            <Route path="victoria" element={<Victoria />} />
            <Route path="tasmania" element={<Tasmania />} />
        </Routes>
    )
}

export default LocationsRoutes
