import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { ContentBlockProps } from "../../components/ContentBlock/types";
import Container from "../../common/Container";

const Training = ({ t }: ContentBlockProps) => {
  return (
    <Container>
      <Row justify="center" align="middle">
        <Col lg={24} md={24} sm={24} xs={24}>
          <Fade direction="left">
            
            <div style={{ marginTop: "2rem" }}>
              <h2>Statistical Analysis Crash Course</h2>
              <p>
                An intensive program designed to give you a solid foundation in statistical analysis.
                From basic probability to advanced inferential statistics, this course covers essential
                concepts for data-driven decision making. Topics include hypothesis testing, regression
                analysis, and experimental design.
              </p>
              
              <h2>Python for Data Science</h2>
              <p>
                Learn Python programming with a focus on data science applications. This comprehensive
                course covers everything from basic Python syntax to advanced data manipulation using
                pandas, numpy, and scikit-learn. Perfect for beginners and intermediate programmers
                looking to enhance their data analysis skills.
              </p>

              <h2>Software Engineering Fundamentals</h2>
              <p>
                A practical course covering modern software engineering practices. Learn about version
                control, test-driven development, CI/CD pipelines, and software architecture patterns.
                This course bridges the gap between theoretical knowledge and real-world application
                development.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <p>
                  All courses are available in both intensive crash course format and extended learning
                  programs. Custom corporate training programs can be arranged to meet specific team
                  needs and objectives.
                </p>
              </div>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default withTranslation()(Training);
