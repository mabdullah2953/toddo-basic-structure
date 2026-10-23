import { Row,Col, Typography } from "antd"
const {Title} = Typography
const Hero = () => {
  return (
    <div className="py-3">
      <div className="container">
        <Row>
            <Col span={24}>
            <Title className="text-center"> Hero-Dashboard</Title>
            </Col>
        </Row>
    </div>
    </div>
  )
}

export default Hero