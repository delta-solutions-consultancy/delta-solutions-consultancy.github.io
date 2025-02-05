import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { ContactContainer, Content, ContentWrapper } from "./styles";
import Container from "../../common/Container";

const Contact = ({ t }: any) => {
  return (
    <ContactContainer>
      <Container>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Fade direction="left">
                <h6>Contact Us</h6>
                <Content>
                  <p>Email: aoife.DeltaSolutions@gmail.com</p>
                  <p>Phone: +44 (0) 7547475259</p>
                  <p>
                    We're always happy to hear from potential clients and partners.
                    Whether you have a specific project in mind or just want to learn
                    more about how we can help your business, don't hesitate to reach out.
                  </p>
                  <p>
                    Our team typically responds within 24 hours during business days.
                    For urgent matters, please contact us by phone.
                  </p>
                </Content>
              </Fade>
            </Col>
          </ContentWrapper>
        </Row>
      </Container>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
