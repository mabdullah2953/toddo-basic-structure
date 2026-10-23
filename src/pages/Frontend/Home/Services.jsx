import { Row,Col, Typography } from "antd"
const {Title} = Typography
const Services = () => {
  return (
    <div className="py-3">
      <div className="container">
        <Row>
            <Col span={24}>
            <Title className="text-center"> Services</Title>
            </Col>
        </Row>
    </div>
    </div>
  )
}

export default Services