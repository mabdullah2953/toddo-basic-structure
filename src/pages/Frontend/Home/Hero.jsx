import { Row,Col, Typography } from "antd"
import { useAuth } from "../../../context/Auth"
const {Title} = Typography
const Hero = () => {
  const {user} =useAuth()
  return (
    <div className="py-3">
      <div className="container">
        <Row>
            <Col span={24}>
            <Title className="text-center" level={1}> Home-Hero</Title>
            <Title level={2}  className="text-center" > Name:{user.name}</Title>
            <Title level={2} className="text-center" > Email: {user.email}</Title>
            <Title level={2} className="text-center" >UID: {user.uid} </Title>
 
            </Col>
        </Row>
    </div>
    </div>
  )
}

export default Hero