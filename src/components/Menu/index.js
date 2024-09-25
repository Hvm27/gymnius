import DarkModeSwitch from './components/DarkModeSwitch'
import { StyledLogo, StyledMenu } from './styles'

export default function Menu () {
    return (
        <StyledMenu>
            <StyledLogo>
                <span>Gymnius</span>
            </StyledLogo>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: "130px",
                alignItems:"center"
            }}>
                <p style={{
                    fontSize:"15px"
                }}>
                    <>Sobre</>
                </p>
                <DarkModeSwitch />
            </div>
        </StyledMenu>
    )
}

