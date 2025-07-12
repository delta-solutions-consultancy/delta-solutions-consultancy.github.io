import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { ContentBlockProps } from "../../components/ContentBlock/types";
import Container from "../../common/Container";

const PrivacyPolicy = ({ t }: ContentBlockProps) => {
  return (
    <Container>
      <Row justify="center" align="middle">
        <Col lg={20} md={24} sm={24} xs={24}>
          <Fade direction="left">
            <h1>Privacy Policy</h1>
            <p><strong>Effective Date:</strong> {new Date().toLocaleDateString('en-GB')}</p>
            
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy describes how we collect, use, and protect your information when you use our language learning application.
              We are committed to protecting your privacy and ensuring you have a positive experience on our platform.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <p>
              We do not collect or store any personal data. Our language learning app operates without requiring personal information from users.
            </p>

            <h3>2.2 Automatically Collected Information</h3>
            <p>
              We do not automatically collect personal information. Any technical data that may be processed is handled locally on your device
              and is not transmitted to our servers.
            </p>

            <h2>3. How We Use Information</h2>
            <p>
              Since we do not collect personal data, we do not use your information for any purpose other than providing the core functionality
              of the language learning application on your device.
            </p>

            <h2>4. Information Sharing</h2>
            <p>
              We do not share, sell, or distribute any personal information as we do not collect such information.
            </p>

            <h2>5. Data Security</h2>
            <p>
              While we do not collect personal data, we are committed to ensuring that any technical operations of our app are secure.
              All app functionality operates locally on your device.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              Under UK data protection laws, including the UK GDPR and Data Protection Act 2018, you have rights regarding your personal data.
              Since we do not collect personal data, these rights are not applicable to our service, but we respect your privacy preferences.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our application is suitable for users of all ages. We do not knowingly collect personal information from children or any users.
              Parents can be confident that no personal data is collected when their children use our app.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted within the app and will be effective immediately
              upon posting. We encourage you to review this policy periodically.
            </p>

            <h2>9. Third-Party Services</h2>
            <p>
              Our app may integrate with third-party services (such as app stores). We are not responsible for the privacy practices of these
              third parties. We encourage you to read their privacy policies.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us through the app's support features
              or through our official website.
            </p>

            <p>
              <strong>Data Controller:</strong> Delta Solutions Consultancy<br/>
              <strong>Location:</strong> United Kingdom
            </p>

            <p>
              This Privacy Policy complies with UK data protection requirements and Apple App Store guidelines.
              By using our language learning application, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default withTranslation()(PrivacyPolicy);