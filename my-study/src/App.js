import React, { Component } from 'react';
import './App.css';



export default class App extends Component {
  state = {
    //id : "",
    testbody : "",
    data : "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  submitid = () => {
    const post = {
      //plzid : this.state.id,
      test : this.state.testbody,
    };

    fetch("http://localhost:3001/idplz", { // 우리가 데이터를 보낼 주소
      method : "post", //통신방법
      headers : { //API 응답에 대한 정보를 담음
        "content-type" : "application/json",
      },
      body : JSON.stringify(post), // 전달할 내용, 통신할 때는 객체로 통신하기에 객체 타입으로 작성해야함
    })
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        //id: json.text,
        testbody : json.text,
      });
    });
  };

  onCall = () => {
    fetch("http://localhost:3001/callbody", {
      method : "post",
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(),
    })
    .then((res) => res.json())
    .then((json) => {

      //코드 추가 작성
      let testList;
      console.log('json = ', json);
      console.log('json.length = ', json.length);
      
      testList = json.map((jsonData, index) => {
        console.log('jsonData = ', jsonData);
        return <p>{index+1}번 {jsonData.test_body}</p>;
      }); /* 내가 json을 list로 꺼내오기 위해서 작성한 코드 */

      this.setState({
        data : testList,
        /* data : json.test_body  기존코드임( 서버 쪽에 row[0]로 보낼 때) */
      });
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} name ="testbody" /> 
        <button onClick={this.submitid}>Submit</button>
        <h1>{this.state.testbody}</h1>
        <br/><br/><br/><br/>
        <h2>데이터 가져오기</h2>
        <h3>{this.state.data}</h3>
        <button onClick={this.onCall}>가져오기</button>
      </div>
    );
  }
};
