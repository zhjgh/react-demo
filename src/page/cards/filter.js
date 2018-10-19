import React from 'react';
import { Card, Form, Row, Col, Input, Button, Icon } from 'antd';
import styles from './style.less';

const FormItem = Form.Item;

const filter = ({
  form: {
    getFieldDecorator,
    validateFields,
    resetFields,
  },
  ...filterProps
}) => {

  const { expand, dispatch } = filterProps

  const handleSearch = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if(!err){
        console.log('Received values of form: ', values);
        dispatch({
          type: 'cards/queryList',
          payload: {
            ...values
          }
        })
      }
    });
  }

  const toggle = () => {
    
  }

  return (
    <Card className={styles.searchWrap}>
      <Form
        className="ant-advanced-search-form"
        onSubmit={handleSearch}
      >
        <Row gutter={24}>
          <Col span={8}>
            <FormItem label="城市">
              {getFieldDecorator('city', {
                /* rules: [{
                  required: true,
                  message: 'Input something!',
                }], */
              })(
                <Input placeholder="请输入城市" />
              )}
            </FormItem>
          </Col>
          {/* <Col span={8}>
            <FormItem label="描述">
              {getFieldDecorator('desc', {
                rules: [{
                  required: true,
                  message: 'Input something!',
                }],
              })(
                <Input placeholder="请输入描述" />
              )}
            </FormItem>
          </Col> */}
          <Col span={8}>
            <Button type="primary" htmlType="submit">查询</Button>
            {/* <Button style={{ marginLeft: 8 }} onClick={handleReset}>清空</Button> */}
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={toggle}>
              更多 <Icon type={expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default Form.create()(filter);

