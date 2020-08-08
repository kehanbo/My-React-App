import React from 'react';

// React.Component的由来:
// import { Component } from 'react';
// import React from 'react';
// const { Component } = React;
// const Component = React.Component;

class App extends React.Component {

  render() {
    return (
      //这里的也是jsx的语法,因为下面的标签没有用''来包裹
      <div>
         hello world
      </div>
    )
  }
    
}
  export default App;
