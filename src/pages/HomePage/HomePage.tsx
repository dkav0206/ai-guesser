import { Container } from "@mui/material";
import "./homepage.scss"
import MenuComponent from "../../components/MenuComponent/MenuComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

function HomePage(){
    return(
        <div>
            <div className="d-flex justify-content-center">
                <h1 className="homepage-header">ai.guesser</h1>
            </div>
            <Container maxWidth='xl'>
                <MenuComponent/>
            </Container>

            
            <FooterComponent/>
        </div>
    )
}

export default HomePage