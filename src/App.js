import React, { Component } from 'react'
import Button from '@mui/material/Button';
export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={count:0}
  }
  handleIncrement = () =>{
    this.setState(prevState =>({count:prevState.count+1}));
  }
  render() {
    return (
    
      <div>
      <center>
      <table>
      <tbody>
      <tr size='200px'> <h1>Count: {this.state.count}</h1>
      </tr>
      <tr size='300px'> 

      <Button onClick ={this.handleIncrement} variant="contained" color="success" height='100px' width='200px' sx={{ mt: 3, mb: 2 }}
      >
  Increment
</Button></tr>
      </tbody>
      </table>
</center>
      
      </div>
    )
  }
}
