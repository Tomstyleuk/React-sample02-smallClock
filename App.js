
import React from 'react';
import './App.css';

function App() {
  //Tomsta Lesson04
  //JSON 定義
  // let items = [
  //   {"name": "strawberry", "price": "100"},
  //   {"name": "Apple", "price": "200"},
  //   {"name": "Banana", "price": "300"}
  // ]

  // return (
  //   <div className="App container">
  //     <table className="table table-striped">
  //       <tbody>
  //         {items.map((value) => (
  //           <tr>
  //           <th scope="row">{value.name}</th>
  //             <td>{value.price}Yen</td>
  //         </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // )

  ////////////// Lesson5 //////////////
  return (
    <div className="container text-center">
      <h1 style={{color: 'red', fontSize: '30px'}}>This is a small clock. </h1>
      <p>
      when you click the time, it will update. Let's try it :)
      </p>
      <Clock />
    </div>
    )

}

class Clock extends React.Component {
  //constructor => classが作成された時に呼び出される関数・method
  constructor(props) {
    super(props); // super class = React.Component, superで受け取った引数を呼び出す
    this.now = new Date();

    //定義したstateの内容は表示されて、Reactで常に監視されている。
    this.state = {
      time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
    }

    //stateを使用するためには、bindを定義する必要がある
    this.refresh = this.refresh.bind(this);
  }

  //Definition Event here
  refresh() {
    this.now = new Date();

    //定義したstateの内容が変更されたら、setStateを呼び出して自動的に内容も更新される。ここではクリックしたら、現在時刻が更新される
    this.setState((state) => ({
      time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
    }));
  }

  render() {
    return <p onClick={this.refresh}>{this.state.time}</p>
  }
}

export default App;
