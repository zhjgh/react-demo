import React from 'react';
import { Modal, Form, Input } from 'antd';

const modal = ({
  form: {
    getFieldDecorator
  },
  ...modalProps
}) => {

  const { item } = modalProps

  console.log(item)

  return (
    <Modal {...modalProps}>
      <Form>
        <Form.Item label="名称">
          {getFieldDecorator('title', {
            initialValue: item.title,
            rules: [{ required: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="类型">
          {getFieldDecorator('genres', {
            initialValue: item.genres,
            rules: [{ required: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="票房">
          {getFieldDecorator('collect_count', {
            initialValue: item.collect_count,
            rules: [{ required: true }],
          })(
            <Input />
          )}
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Form.create()(modal);