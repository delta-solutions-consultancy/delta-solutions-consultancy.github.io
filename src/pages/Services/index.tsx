import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { ServicesContainer, Content, ContentWrapper, ServiceCard } from "./styles";
import Container from "../../common/Container";

const Services = ({ t }: any) => {
  return (
    <ServicesContainer>
      <Container>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Fade direction="left">
                <h6>What We Offer</h6>
                <Content>
                  <Row gutter={[24, 24]}>
                    <Col xs={24} sm={24} md={8}>
                      <ServiceCard>
                        <h3>Software Development</h3>
                        <p>Custom software solutions tailored to your business needs. From web applications to enterprise systems, we deliver high-quality, scalable software.</p>
                      </ServiceCard>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                      <ServiceCard>
                        <h3>Consulting</h3>
                        <p>Expert guidance on technology strategy, system architecture, and digital transformation. We help you make informed decisions about your tech investments.</p>
                      </ServiceCard>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                      <ServiceCard>
                        <h3>Technical Support</h3>
                        <p>Comprehensive support for your software systems. Our team ensures your applications run smoothly and efficiently, with minimal downtime.</p>
                      </ServiceCard>
                    </Col>
                  </Row>
                </Content>
              </Fade>
            </Col>
          </ContentWrapper>
        </Row>
      </Container>
    </ServicesContainer>
  );
};

export default withTranslation()(Services);
