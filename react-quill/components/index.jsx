
import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Card, Form, Button } from 'antd'

import RichTextEditor from './rich-text-editor'
import { COMMON_MESSAGE } from './constants'

export default function QuillComponent() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    getValues,
  } = useForm()

  useEffect(() => {
    reset({
      test: ''
    })
  }, [])

  const onSubmit = useCallback((val) => {
    console.log('val ', val)
    console.log('value-------- ', getValues())
  }, [])

  return <Card>
    <Form
      name="demo-form"
      onFinish={handleSubmit(onSubmit)}
    >
      <RichTextEditor
        label="Test"
        control={control}
        name="test"
        selfLabel
        className='form-item-test'
        errors={errors}
        validation={{
          required: COMMON_MESSAGE.REQUIRE.INPUT('test'),
        }}
      />

      <Button
        className="update-profile-btn"
        type="primary"
        block
        htmlType="submit"
      >
        Create
      </Button>
    </Form>
  </Card>
}