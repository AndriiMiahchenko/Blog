import Locations from 'components/Locations/Locations'
import Slider from 'components/Slider/Slider'
import React from 'react'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Slider />
            <Locations />
        </>
    )
}

export default Main
