import React, { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";

const App = (props) => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  // This hook will be used to set and select the items in the array.
  const [selected, setSelected] = useState(0)
  // This hook will update the points that will be added into the hooks.
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])

  // Generate a random number based on the length of the array.
  const getRandom = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  // Handle the click and pass the random number. This will allow for different anecdotes.
  const handleClick = () => {
    setSelected(getRandom)
  }

  // This method will add the points.
  const handlePoints = () => {
    // Create a copy of all of the votes using the spread operator.
    const copy = [...votes]
    // This will select the random anecdotes and increment the by one point.
    copy[selected] += 1 
    // Update the setVotes and be displayed.
    setVotes(copy)
  }

  console.log(...votes)

  return ( 
    <div>
      <Display text="Anecdote of the day"/>
      <div>
        {anecdotes[selected]}
        <p>has {votes[selected]} votes</p>
        </div>
      <Button onClick={handlePoints} label="vote"/>
      <Button onClick={handleClick} label="next anecdote"/>
      <Display text="Anecdote with most votes"/>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>{votes[votes.indexOf(Math.max(...votes))]}</p>
    </div>
   );
}
 
export default App;