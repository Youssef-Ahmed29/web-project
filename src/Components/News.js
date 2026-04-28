import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./News.css";
export const News = ({ onValidated }) => {
  const [email, setEmail] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  if (email && email.indexOf("@") > -1) {
    if (onValidated) {
      onValidated({
        EMAIL: email
      });
    }
    setEmail('');
  }
};

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter
              <br />
              & Never miss latest updates
            </h3>
          </Col>

          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};