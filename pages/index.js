import Menu from '../src/components/Menu'
import Main from '../src/components/Main'
import { CSSReset } from '../src/components/CSSReset'
import Cards  from '../src/components/Cards'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'
// import config from '../config.json'

function HomePage () {

    const [currentJourney, setCurrentJourney] = useState([])
    const [visibleJourney, setVisibleJourney] = useState(false)
    
    return (
        <>
            <CSSReset />
            <StyledGrid> 
                <Menu />
                <Banner /> 
                <Main setCurrentJourney={setCurrentJourney} />
                <Cards currentJourney={currentJourney} />
            </StyledGrid>
        </>
    )
}

function Banner() {
    return(
        <StyledBanner className="banner" > 
            <h2>Escolha sua jornada <br />fitness <br />
                {/* <motion.hr 
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}/> */}
            </h2>
        </StyledBanner>
    )
}


const StyledBanner = styled.div`
    display: flex;
    width: 100%;
    margin-left: 35px;
    align-items: center;
    font-size: 45px;
    color: white;
   /* background-color: red; */
`
const StyledGrid = styled.div`
    display: grid;
    grid-template-rows: 0.1fr 0.1fr 0.8fr;   
    grid-template-columns: 2fr 1fr;
    color: black;
    height: 100hv;
    width: 100vw;
    
    aside {
        background-color: red;
        grid-row: 2 / 4;
        grid-column: 2;
    }

    .banner {
        grid-row: 2;
        grid-column: 1;
    }
`
export default HomePage

