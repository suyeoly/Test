import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

const { teams } = data;

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Heading() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        Explore information about college basketball teams across the United
        States. Find details on each team's school name, mascot, and location.
      </p>
    </div>
  );
}

class Teamcard extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h2>
          School Name:<br></br>
          {oneTeam.school}
        </h2>
        <h3>
          Mascot Name:<br></br>
          {oneTeam.name}
        </h3>
        <h3>
          Location:<br></br>
          {oneTeam.city}.{oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="team-grid-container">
      {teams.map((teamNum: TeamProps) => (
        <Teamcard key={teamNum.tid} {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <Heading />
      </header>
      <TeamList />
    </div>
  );
}

export default App;
