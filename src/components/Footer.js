import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import icon1 from '../assets/img/icon1.svg';
import icon2 from '../assets/img/icon2.svg';
import icon3 from '../assets/img/icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={icon1} alt="" /></a>
              <a href="#"><img src={icon2} alt="" /></a>
              <a href="#"><img src={icon3} alt="" /></a>
            </div>
            <p>Copyright@ 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
