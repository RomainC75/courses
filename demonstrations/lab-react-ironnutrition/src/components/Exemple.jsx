// EXAMPLE
// To start using the pre-made Ant Design components we must first import them:

import { Card, Row, Col, Divider, Input, Button } from 'antd';



function Example({element}) {
  // After importing the components we can render them directly:
  return (
    <div>
      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={''} onChange={() => {}} />
        </Col>

        <Col>
          <Card title={'Fancy Card'}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}


export default Example