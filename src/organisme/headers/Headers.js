import React, { Component } from 'react'
import {Layout,Menu,Input, Row, Col, Button} from 'antd'
import './headers.css'
const {Header} = Layout
const {Search} = Input
const onSearch = (value) => console.log(value);

export default class Headers extends Component {
    render() {
        return (
          <Layout classname="layout">
            <Header>
              <Row>
                <Col lg={2}>
                  <h4 style={{ color: "#a6adb4" }}>Qtemu App</h4>
                </Col>
                <Col lg={12}>
                  <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">Create Meetup</Menu.Item>
                    <Menu.Item key="2">Explore</Menu.Item>
                  </Menu>
                </Col>
                <Col lg={10}>
                  <Button type="link" className="search">
                    Login
                  </Button>
                </Col>
              </Row>
            </Header>
          </Layout>
        );
    }
}
