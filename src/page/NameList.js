import React, { Component } from 'react'
import {Layout,Col,Row,List,Button} from 'antd'
import '../assets/css/style.css'
import axios from 'axios'
const {Content} = Layout
const data=[
    {name:"name 1"},
    {name:"name 2"}
]
export default class NameList extends Component {
  state = {
    num: null,
    person: [],
    detail: [],
  };
  componentDidMount() {
    axios.get(`https://swapi.dev/api/people`).then((res) => {
      this.setState({ person: res.data.results });
    });
  }
  getDetail(index) {
    index = index+1;
    this.setState({
      num: index,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevState:", prevState.num);
    console.log("this.state.num:", this.state.num);
    if (this.state.num !== prevState.num) {
      axios
        .get(`https://swapi.dev/api/people/${this.state.num}/`)
        .then((res) => {
          this.setState({
            detail: res.data,
          });
        });
    }
  }
  render() {
      console.log("this.state.detail:", this.state.detail);
    return (
      <Layout className="layout">
        <Content style={{ overflow: "hidden" }}>
          <div className="section-container">
            <Row>
              <Col lg={24}>
                {this.state.person.map((data, i) => (
                  <Row>
                    <div className="dist">
                      <Button type="primary" onClick={() => this.getDetail(i)}>
                        {data.name}
                      </Button>
                    </div>
                  </Row>
                ))}
              </Col>
              <Col lg={12}>
                <div>
                  <h1>Detail</h1>
                  {this.state.num == null ? (
                    "Not Selected"
                  ) : (
                    <div>
                      {Object.keys(this.state.detail).map((val) => (
                        <p>
                          {val} : {this.state.detail[val]}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}
