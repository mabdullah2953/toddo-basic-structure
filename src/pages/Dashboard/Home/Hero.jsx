import { Row,Col, Typography, Space } from "antd"
import { Link } from "react-router-dom"
const {Title} = Typography
const Hero = () => {
  return (
    <div className="py-3">
      <div className="container">
        <Row>
            <Col span={24} className="text-center">
            <Title > Hero-Dashboard</Title>
          <Space>
            <Link to="/" className="btn btn-primary"> Home </Link>   
             <Link to="/dashboard/todos" className="btn btn-primary"> Todos </Link>
          </Space>
            </Col>
        </Row>
    </div>
    </div>
  )
}

export default Hero