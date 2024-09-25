import { StyledMain } from './styles'
import { motion } from 'framer-motion'
import config from '../../../config.json'
import { useState, useEffect, useRef } from 'react'

export default function Main({setCurrentJourney}) {
    return (
        <StyledMain> 
            <Carousel carousel={config.carousel} setCurrentJourney={setCurrentJourney} />
        </StyledMain>
    )
}

//  note: A estilização das tags .motion estão no formato de propriedade temporariamente. Obrigado pela compreensão <3
function Carousel( { setCurrentJourney, ...props} ) {

    const setJourney = setCurrentJourney
    const carouselNames = Object.keys(props.carousel)
    // console.log('props.carousel',carouselNames)
    // console.log('carrosselNames: ',carouselNames)
    const carousel = useRef()
    const [width, setWidth] = useState(0)
    useEffect(() => {
        // console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
    return (
        <motion.div
            className='carousel'
            whileTap={{ cursor: "grabbing" }}
            ref={carousel}
            style={{
                cursor: 'grab',
                overflow: 'hidden',
                // backgroundColor: 'red',
                maxHeight: '100%'
            }}
        >
            {carouselNames.map( carouselName => {
                const itens = props.carousel[carouselName]

                // console.log('carrossel[name]',itens)
                return (
                    <motion.div
                        className='inner'
                        key={carouselName}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.2 }}
                        style={{ display: 'flex', backgroundColor:'none' }}
                        
                    >

                        {itens.map(journey => {
                            return (

                                <motion.div
                                    className='item'
                                    key={journey.name}
                                    style={{
                                        minWidth: '300px',
                                        padding: '14px',
                                        // backgroundColor: "red"
                                    }}
                                    onClick={() => {
                                        setJourney([])
                                        setJourney(journey.exercises)
                                    }} 
                                >
                                    <div style={{
                                        display: 'flex',
                                        backgroundImage: `url("${journey.image}")`,
                                        backgroundPosition: 'center',
                                        // minWidth: '80%',
                                        height: '450px',
                                        borderRadius: '14px',
                                        pointerEvents: 'none',
                                        alignItems: 'end',
                                        justifyContent: 'center',
                                        // backgroundColor: 'red'
                                        }}
                                        //add um hoverOver effect
                                        // onMouseEnter
                                        // onMouseLeave
                                        >
                                        <div style={{
                                            color: 'white',
                                            backgroundColor: 'black',
                                            margin: '15px',
                                            borderRadius: '10px',
                                            width: '80%',
                                            textAlign: 'center',
                                            padding: '3px 0 3px 0'
                                        }}> 
                                            <h3>
                                                {journey.name}
                                            </h3>
                                        </div>
                                        
                                    </div>


                                </motion.div>

                            )
                        })}

                    </motion.div>
                )
            })}
        </motion.div>
    )
}