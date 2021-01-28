import React, { Component } from 'react'
import {Layout,Menu,Breadcrumb,Col,Row, Image, Card, Descriptions, Button} from 'antd'
import Headers from '../organisme/headers/Headers';
import pict from './../assets/image/forest.png'
import { connect } from 'react-redux';
import {addAction,subAction} from '../redux/action'
const { Header, Content,Footer } = Layout;

class Home extends Component {
  render() {
    return (
      <>
        <Layout className="layout">
          <Headers />
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <Row>
                <Col lg={24}>
                  <Card style={{ "max-width": "100%" }}>
                    <Row>
                      <Col lg={5}>
                        <Image src={pict} className="square-img" />
                      </Col>
                      <Col lg={14}>
                        <Descriptions title="Hacktiv8 Meetup">
                          <Descriptions.Item>
                            Location : Jakarta,Indonesia
                            <br />
                            Members : 1078
                            <br />
                            Organizers : Adhy Wiranata
                          </Descriptions.Item>
                        </Descriptions>
                        <br />
                        <Button type="primary" size="large">
                          Join Us
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row>
                <strong>Next Meetup</strong>
              </Row>
              <Row>
                <Card style={{ width: "100%" }}>
                  <strong>
                    <h3>Awesome Meetup event</h3>
                  </strong>
                  <small>28 January 2019</small>
                  <br />
                  <br />
                  <p>
                    Lorem Ipsum sir dolor amet Aliquam erat volutpat. Curabitur
                    risus justo, viverra quis magna sed, posuere mattis lectus.
                    Etiam quis sollicitudin velit. Nulla sed volutpat nisl.
                    Vestibulum quis tortor commodo, luctus tortor aliquam,
                    condimentum lacus. Ut magna augue, eleifend et turpis nec,
                    bibendum mollis libero. Cras sit amet ligula sodales,
                    laoreet purus eget, consequat mi. Quisque sit amet est vel
                    dolor auctor congue. Quisque molestie nisl ac ligula
                    fringilla, et commodo dolor suscipit.
                  </p>
                  <br />
                  ...
                  <br />
                  See you there
                  <br />
                  <br />
                  <strong>Best, Hengki dkk</strong>
                </Card>
              </Row>
              <br />
              <Row>
                <strong>About Meetup</strong>
              </Row>
              <br />
              <Row>
                <p>
                  Come and met other developers interested in the javascript and
                  it's library in the Greater Jakarta area
                  <br />
                  <br />
                  <strong>Twitter</strong> @jakartaJS and we use the hastag
                  <strong style={{ color: "blue" }}> #jakartaJS</strong>
                </p>
              </Row>
              <br />
              <Row>
                <Col lg={22}>
                  <strong>Members</strong>
                </Col>
                <Col>
                  <Button type="link">
                    <strong>See all</strong>
                  </Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Card style={{ width: "100%" }}>
                  <Row>
                    <Col lg={3}>
                      <Image src={pict} className="square-img-rounded" />
                    </Col>
                    <Col lg={2}>
                      <p>
                        <strong>Organizers</strong>
                        <br />
                        <br />
                        Adhy W
                      </p>
                    </Col>
                    <Col lg={1}>
                      <p>
                        <br />
                        <br />4 More
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Row>
              <br />
              <Row>
                <Col lg={22}>
                  <strong>Past Meetups</strong>
                </Col>
                <Col>
                  <Button type="link">
                    <strong>See all</strong>
                  </Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg={24}>
                  <div className="site-card-wrapper">
                    <Row gutter={16}>
                      <Col span={8}>
                        <Card title="27 November 2019">
                          <p>
                            <strong>#39</strong>
                            JakartaJS April meetup with kumparan
                            <br />
                            <br />
                            <small>
                              <strong>139</strong> went
                            </small>
                          </p>
                          <br />
                          <Button type="primary">View</Button>
                        </Card>
                      </Col>
                      <Col span={8}>
                        <Card title="27 Oktober 2019">
                          <p>
                            <strong>#38</strong>
                            JakartaJS April meetup with Blibli
                            <br />
                            <br />
                            <small>
                              <strong>139</strong> went
                            </small>
                          </p>
                          <br />
                          <Button type="primary">View</Button>
                        </Card>
                      </Col>
                      <Col span={8}>
                        <Card title="27 September 2019">
                          <p>
                            <strong>#39</strong>
                            JakartaJS April meetup with Hacktiv8
                            <br />
                            <br />
                            <small>
                              {" "}
                              <strong>139</strong> went
                            </small>
                          </p>
                          <br />
                          <Button type="primary">View</Button>
                        </Card>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <strong>Redux Counter</strong>
                    </Row>
                    <br />
                    <Row>
                      <Col md={2}>
                        <div>number: {this.props.number}</div>
                      </Col>
                      <Col md={2}>
                        <Button
                          type="primary"
                          onClick={() => this.props.addAction(10)}
                        >
                          Add
                        </Button>
                      </Col>
                      <Button
                        type="primary"
                        onClick={() => this.props.subAction()}
                      >
                        Sub
                      </Button>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}> &copy; Hacktiv8 2018</Footer>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state)=>({
  number:state.num
})

const mapDispatchToProps={addAction,subAction}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

