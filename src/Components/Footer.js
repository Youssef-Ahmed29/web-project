import { Container, Row, Col } from "react-bootstrap";
import { News } from "./News";
import "./Footer.css";
import logo from "../Assets/Fue-removebg.png";
import navIcon1 from "../Assets/nav-icon1.svg";
import navIcon2 from "../Assets/nav-icon2.svg";
import navIcon3 from "../Assets/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>\
        <News />
        <Row className="align-items-center">
         
          <Col size={12}  xs={12} md={12} lg={5}>
          
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12}  xs={12} md={12} lg={7}className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
           <p> Project completed:)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}