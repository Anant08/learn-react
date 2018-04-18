// More Practice with State
import React from 'react'

// 🐨 you'll want these styles to make things look nice :)

// eslint-disable-next-line no-unused-vars
const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}
// eslint-disable-next-line no-unused-vars
const labelStyles = {
  fontSize: '5em',
  display: 'block',
}

class StopWatch extends React.Component {
  // 🐨 You'll need to initialize your state here. You need
  // to keep track of how much time has lapsed (so you can
  // display that number) as well as whether the stopwatch
  // is running (so you can change the "Start/Stop" text)
  state = {lapse: 0, running: false}

  // 🐨 You'll need a bound click handler for the Start/Stop button
  // you can call it `handleRunClick`. If the stopwatch
  // is not in a running state, then you'll want to start things
  // off running and store a startTime variable
  // 💰 const startTime = Date.now() - this.state.lapse
  //
  // 🐨 Then you'll use setInterval to update the lapse state repeatedly
  // as quickly as possible. You'll want to store the setInterval ID
  // so you can clear it later
  // 💰 `this.intervalId = setInterval(/* more code */)`
  // 💰 Put this in the setInterval: this.setState({lapse: Date.now() - startTime})
  //
  // If the stopwatch is in a running state, then you'll want to clear the
  // currently running interval.
  // 💰 `clearInterval(this.intervalId)`
  //
  // 🐨 finally, you'll want to use this.setState with an updater function
  // to toggle the running state.

  // 🐨 You'll need a bound `handleClearClick` function here that's responsible
  // for clearing `this.intervalId` and setting state back to the initial state

  // if the component is "unmounted" (removed from the page), then we want to make sure
  // we clear any active interval so we don't continue to call setState on a component
  // that is no longer on the page.
  // 🐨 Add a `componentWillUnmount` method here that simply clears `this.intervalId`
  render() {
    // 🐨 here you'll need to render the stopwatch. It should have the following structure:
    // <div>
    //   <label>{/* Render the lapsed time with the suffix `ms` */}</label>
    //   <button>{/* Render start or stop depending on whether it's running */}</button>
    //   <button>Clear</button>
    // </div>
    return 'todo'
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
function Usage() {
  return (
    <div style={{textAlign: 'center'}}>
      <StopWatch />
    </div>
  )
}
Usage.title = 'More State'

export default Usage
