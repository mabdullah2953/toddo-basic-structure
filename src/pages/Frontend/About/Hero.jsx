import { Row,Col, Typography } from "antd"
const {Title} = Typography
const About = () => {
  return (
    <div className="py-3">
      <div className="container">
        <Row>
            <Col span={24}>
            <Title className="text-center"> About</Title>
            </Col>
        </Row>
    </div>
    </div>
  )
}

export default About