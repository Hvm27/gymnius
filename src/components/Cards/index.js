import styled from "styled-components";
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function Cards({ currentJourney }) {

    const currentExercise = currentJourney
    return (
        <StyledCards> 
            { currentJourney ? <CarouselCards exerciseVet={currentJourney} /> : null }
            {/* {currentJourney ? console.log('map currentJourney: ', currentJourney.map((obj) => obj.name)) : 'nada'} */}
            {/* {console.log( 'currentExercises',currentJourney )} */}
        </StyledCards> 
    )
}

function CarouselCards ( {exerciseVet} ) {

    const carousel = useRef()
    const [height, setHeight] = useState(0)
    useEffect(() => {
        console.log(carousel.current?.scrollHeight - carousel.current?.offsetHeight)
        setHeight(carousel.current?.scrollHeight - carousel.current?.offsetHeight)
    }, [])
    
    return (
        <motion.div
            className='carousel'
            whileTap={{ cursor: "grabbing" }}
            ref={carousel}
            style={{
                cursor: 'grab',
                overflow: 'hidden',
                backgroundColor: 'green',
                maxHeight: '100%'
            }}
        >
            <motion.div
            className='inner'
            drag="y"
            dragConstraints={{ top: 0, bottom: -height }}
            // initial={{ y: 100 }}
            // animate={{ y: 0 }}
            // transition={{ duration: 1.2 }}
            style={{ 
                display: 'block', 
                backgroundColor:'blue',
                boder: '1px solid black' 
            }}
            >
                {exerciseVet.map( exercise => {
                    return (
                        <motion.div 
                        className="cardExercise" 
                        key={exercise.name}
                        style={{
                            
                            padding: '14px',
                            margin: '25px 0 25px 0',
                            border: '1px solid black',
                            height: '120px',
                            width: '390px',
                            borderRadius:'15px'
                        }}
                        >
                            <div style={{
                                display:'flex',
                                backgroundColor: 'none'
                            }}>

                                <h3>{exercise.name}</h3>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
              
        </motion.div>
    )
}

export const StyledCards = styled.div`
    display: flex;
    grid-row: 2 / 4;
    grid-column: 2;
    border-left: 1px solid white;
    height: 100%;
    max-height: 700px;
    margin: auto 0;
    align-items: center;
    justify-content: center;
    background-color: red;
`



// width: 100%;
// max-width: 950px;
// /* min-height: 100vh; */
// margin: 0 0 0 30px;
// align-items: center;
// justify-content: center;
