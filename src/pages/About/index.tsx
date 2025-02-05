import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { ContentBlockProps } from "../../components/ContentBlock/types";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

const About = ({ t }: ContentBlockProps) => {
  return (
    <Container>
      <Row justify="center" align="middle">
        <Col lg={24} md={24} sm={24} xs={24}>
          <Fade direction="left">
            <h6>About Me</h6>
            <h1>Dr. Aoife Hughes</h1>
            <div style={{ marginBottom: "2rem" }}>
              <img src="img/svg/me.png" alt="Dr. Aoife Hughes" style={{ maxWidth: "300px", borderRadius: "10px" }} />
            </div>
            <p>
              As a Data Scientist and Software Engineer with extensive experience in both academia and industry,
              I bring a unique blend of theoretical knowledge and practical expertise to every project.
              With a Ph.D. in Statistical Analysis, I've developed a deep understanding of complex data structures
              and analytical methodologies.
            </p>
            <p>
              My expertise spans across various domains including statistical analysis, machine learning,
              and software development. I've successfully led numerous projects that bridge the gap between
              data science and practical business solutions.
            </p>
            <p>
              Throughout my career, I've been passionate about sharing knowledge and helping others develop
              their technical skills. This has led me to create comprehensive training programs in Python,
              statistical analysis, and software engineering principles.
            </p>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default withTranslation()(About);
