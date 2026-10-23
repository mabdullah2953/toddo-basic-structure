import { Row,Col, Typography } from "antd"
const {Title} = Typography
const Map = () => {
  return (
    <div className="py-3">
      <div className="container">
        <Row>
            <Col span={24}>
            <Title className="text-center"> Map</Title>
            </Col>
        </Row>
    </div>
    </div>
  )
}

export default Map