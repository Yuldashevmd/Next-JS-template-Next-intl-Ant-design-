'use client'
import { FC, FormEvent } from 'react'
import { Card } from '@/@core/components/Card'
import { Button, Form, Input } from 'antd'
import './style.scss'
import { setCookie } from '@/@core/service/helper'

const LoginPage: FC = () => {
  const [form] = Form.useForm()

  // handleLogin
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    console.log(e, 'e')
    setCookie('access_token', true, { 'max-age': 3600, secure: true, sameSite: 'strict' })
    window.location.replace('/dashboard')
  }

  return (
    <main className='login-page w-100 d-flex align-center justify-center'>
      <Card width='500px' height='350px' title='Login'>
        <Form form={form} onFinish={handleLogin} layout='vertical'>
          <Form.Item name='login' label='Login'>
            <Input type='text' id='login' name='login' />
          </Form.Item>
          <Form.Item name='password' label='Password'>
            <Input type='password' id='password' name='password' />
          </Form.Item>
          <Button htmlType='submit' type='primary' className='w-100 send-btn'>
            Send
          </Button>
        </Form>
      </Card>
    </main>
  )
}

export default LoginPage
