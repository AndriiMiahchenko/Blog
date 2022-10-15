import Bali from 'components/Places/Bali/Bali'
import Colombia from 'components/Places/Colombia/Colombia'
import CostaRica from 'components/Places/CostaRica/CostaRica'
import Egypt from 'components/Places/Egypt/Egypt'
import France from 'components/Places/France/France'
import Iceland from 'components/Places/Iceland/Iceland'
import Italy from 'components/Places/Italy/Italy'
import Jordan from 'components/Places/Jordan/Jordan'
import Locations from 'components/Locations/Locations'
import Malaysia from 'components/Places/Malaysia/Malaysia'
import Malta from 'components/Places/Malta/Malta'
import Mauritius from 'components/Places/Mauritius/Mauritius'
import Morocco from 'components/Places/Morocco/Morocco'
import Oman from 'components/Places/Oman/Oman'
import Peru from 'components/Places/Peru/Peru'
import Queensland from 'components/Places/Queensland/Queensland'
import Singapore from 'components/Places/Singapore/Singapore'
import Spain from 'components/Places/Spain/Spain'
import Tasmania from 'components/Places/Tasmania/Tasmania'
import Thailand from 'components/Places/Thailand/Thailand'
import Turkey from 'components/Places/Turkey/Turkey'
import Victoria from 'components/Places/Victoria/Victoria'
import Vietnam from 'components/Places/Vietnam/Vietnam'
import { Route, Routes } from 'react-router-dom'

type Props = {
    addPostToCart: (id: number, count: number) => void
    removePostFromCart: (id: number) => void
}

const LocationsRoutes = ({ addPostToCart, removePostFromCart }: Props) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Locations
                        addPostToCart={addPostToCart}
                        removePostFromCart={removePostFromCart}
                    />
                }
            />

            <Route path="bali" element={<Bali />} />
            <Route path="vietnam" element={<Vietnam />} />
            <Route path="singapore" element={<Singapore />} />
            <Route path="thailand" element={<Thailand />} />
            <Route path="malaysia" element={<Malaysia />} />

            <Route path="iceland" element={<Iceland />} />
            <Route path="spain" element={<Spain />} />
            <Route path="france" element={<France />} />
            <Route path="italy" element={<Italy />} />
            <Route path="malta" element={<Malta />} />

            <Route path="egypt" element={<Egypt />} />
            <Route path="mauritius" element={<Mauritius />} />
            <Route path="morocco" element={<Morocco />} />

            <Route path="colombia" element={<Colombia />} />
            <Route path="costa-rica" element={<CostaRica />} />
            <Route path="peru" element={<Peru />} />

            <Route path="jordan" element={<Jordan />} />
            <Route path="oman" element={<Oman />} />
            <Route path="turkey" element={<Turkey />} />

            <Route path="queensland" element={<Queensland />} />
            <Route path="victoria" element={<Victoria />} />
            <Route path="tasmania" element={<Tasmania />} />
        </Routes>
    )
}

export default LocationsRoutes
