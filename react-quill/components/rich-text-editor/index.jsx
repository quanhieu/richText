
import React from 'react'
import dynamic from 'next/dynamic'
import { Form, Empty } from 'antd'
import { Controller } from 'react-hook-form'
import get from 'lodash/get'

import 'react-quill/dist/quill.snow.css'

import { formats, modules } from './config'
import { StyledText, StyledRishText } from './styled'

const ReactQuill = dynamic(
  () => import('react-quill'), {
  ssr: false,
  loading: () => <Empty/>,
})

const { Item: FormItem } = Form
export default function RichTextEditor({
  name,
  control,
  defaultValue = undefined,
  className = '',
  label = '',
  selfLabel = false,
  validation = {},
  errors = null,
  placeholder = '',
  // ...props
}) {
  return <StyledRishText>
    <FormItem
      label={!selfLabel && label ? label : ''}
      validateStatus={errors?.[name] ? 'error' : 'success'}
      help={get(errors, `${name}.message`)}
      required={get(validation, 'required') || false}
    >
      {
        selfLabel && label && <StyledText className='label-form-input'>
          {label}
          {get(validation, 'required') && <span className='label-form-input-required'>*</span>}
        </StyledText>
      }
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        rules={validation}
        render={({
          field: {
            onChange,
            value
          }
        }) => (
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className}
          />
        )}
      />
    </FormItem>
  </StyledRishText>
}
