import React from 'react'
import PropTypes from 'prop-types'
import styles from './EnrollForm.module.css'
import degrees from '../data/degrees.json'

import { Form, Input, Button, InputNumber, Select, Checkbox, Radio } from 'antd'
const RadioGroup = Radio.Group
const { Option } = Select

const formItemLayout = {
  labelAlign: 'left',
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

const EnrollForm = ({ onSubmit, form }) => {
  const { getFieldDecorator } = form

  const handleSubmit = e => {
    e.preventDefault()

    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(e, values)
      }
    })
  }

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit} className={styles.form}>
      <Form.Item label="Full Name">
        {getFieldDecorator('fullname', {
          rules: [{ required: true, message: 'Full Name is required' }]
        })(<Input placeholder="First Name Last Name" />)}
      </Form.Item>
      <Form.Item label="Email">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            { required: true, message: 'Email is required' }
          ]
        })(<Input placeholder="foo@bar.com" />)}
      </Form.Item>
      <Form.Item label="Street">
        {getFieldDecorator('street', {
          rules: [{ required: true, message: 'Street is required' }]
        })(<Input placeholder="Street Address" />)}
      </Form.Item>
      <Form.Item label="City">
        {getFieldDecorator('city', {
          rules: [{ required: true, message: 'City is required' }]
        })(<Input placeholder="eg: Seattle" />)}
      </Form.Item>
      <Form.Item label="State">
        {getFieldDecorator('state', {
          rules: [{ required: true, message: 'State is required' }]
        })(<Input placeholder="eg: WA" />)}
      </Form.Item>
      <Form.Item label="Zipcode">
        {getFieldDecorator('zipcode', {
          rules: [{ required: true, message: 'Zipcode is required' }]
        })(<InputNumber placeholder="eg: 98109" />)}
      </Form.Item>
      <Form.Item label="Phone Number">
        {getFieldDecorator('phone', {
          rules: [{ required: true, message: 'Phone number is required' }]
        })(<Input placeholder="eg: XXX-XXX-XXXX" />)}
      </Form.Item>
      <Form.Item label="Date of Birth">
        {getFieldDecorator('dateOfBirth', {
          rules: [{ required: true, message: 'Date of birth is required' }]
        })(<Input placeholder="eg: YYYY-MM-DD" />)}
      </Form.Item>
      <Form.Item label="Gender">
        {getFieldDecorator('gender', {
          rules: [{ required: true, message: 'Gender is required' }]
        })(
          <RadioGroup>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
            <Radio value="prefer_not_to_say">Prefer not to say</Radio>
          </RadioGroup>
        )}
      </Form.Item>
      <Form.Item label="Preferred Pronouns">
        {getFieldDecorator('preferredPronouns', {
          rules: [{ required: true, message: 'Preferred pronouns is required' }]
        })(
          <RadioGroup>
            <Radio value="he/him">He/Him</Radio>
            <Radio value="she/her">She/Her</Radio>
            <Radio value="they/them">They/Them</Radio>
            <Radio value="other">Other</Radio>
            <Radio value="prefer_not_to_say">Prefer not to say</Radio>
          </RadioGroup>
        )}
      </Form.Item>
      <Form.Item label="Degree of Interest">
        {getFieldDecorator('degreeOfInterest', {
          rules: [{ required: true, message: 'Degree of interest is required' }]
        })(
          <Select
            mode="multiple"
            placeholder="Could choose multiple degrees of interest"
          >
            {degrees.map(degree => (
              <Option key={degree.slug}>{degree.title}</Option>
            ))}
          </Select>
        )}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </Form.Item>
    </Form>
  )
}

EnrollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

const WrappedForm = Form.create({ name: 'enroll' })(EnrollForm)

export default WrappedForm
