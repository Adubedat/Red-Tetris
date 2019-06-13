import React from "react";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route } from "react-router-dom";
import EventListener from "react-event-listener";
import { connect } from "react-redux";
import Home from "./Home";
import Header from "./Header";
import ErrorPage from "./ErrorPage";
import socketIOClient from "socket.io-client";
import { setHashError } from "../actions/actions";

import { setConfig } from "react-hot-loader"; //to remove

setConfig({
  reloadHooks: false
});

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       endpoint: "localhost:4001",

//       ///
//       color: "white"
//       ///
//     };
//   }

//   // sending sockets
//   send = () => {
//     const socket = socketIOClient(this.state.endpoint);
//     socket.emit("change color", this.state.color); // change 'red' to this.state.color
//   };
//   ///

//   // adding the function
//   setColor = color => {
//     this.setState({ color });
//   };

//   componentDidMount = () => {
//     const socket = socketIOClient(this.state.endpoint);
//     setInterval(this.send(), 1000);
//     socket.on("change color", col => {
//       document.body.style.backgroundColor = col;
//     });
//   };

//   render() {
//     // testing for socket connections

//     const socket = socketIOClient(this.state.endpoint);

//     return (
//       <div style={{ textAlign: "center" }}>
//         <button onClick={() => this.send()}>Change Color</button>

//         <button id="blue" onClick={() => this.setColor("blue")}>
//           Blue
//         </button>
//         <button id="red" onClick={() => this.setColor("red")}>
//           Red
//         </button>
//       </div>
//     );
//   }
// }
// export default App;

let App = ({ hashError, setHashError }) => {
  //const socket = socketIOClient("localhost:4001");

  const handleHashChange = () => {
    const regexp = /\w{1,12}\[\w{1,12}\]/;
    const hash = window.location.hash.substr(1);
    console.log(hash);
    const found = hash.match(regexp);
    console.log(found);
    if (!found || found.length !== 1 || found[0] !== hash) {
      setHashError(true);
      return;
    }
    setHashError(false);
  };

  const render = () => {
    if (hashError) {
      return (
        <div>
          <EventListener target="window" onHashChange={handleHashChange} />
          <ErrorPage />;
        </div>
      );
    } else {
      return (
        <div>
          <EventListener target="window" onHashChange={handleHashChange} />
          <Header />
          <Router hashType="noslash">
            <Route path="/" component={Home} />
          </Router>
        </div>
      );
    }
  };

  handleHashChange();
  return render();
};

const mapStateToProps = state => {
  return {
    hashError: state.hashError
  };
};

const actionCreators = { setHashError };

App = connect(
  mapStateToProps,
  actionCreators
)(App);

export default hot(module)(App);
