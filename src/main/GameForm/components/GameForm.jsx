import React from 'react';
import { Form, Input, Button } from 'antd';

const GameForm = ({ onSubmit }) => {
  const onFinish = (values) => {
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.error('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="1st Place"
        name="firstPlace"
        rules={[
          {
            required: true,
            message: 'Please input first place player!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="2nd Place"
        name="secondPlace"
        rules={[
          {
            required: true,
            message: 'Please input first place player!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="3rd Place" name="thirdPlace">
        <Input />
      </Form.Item>
      <Form.Item label="4th Place" name="forthPlace">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GameForm;
