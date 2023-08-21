import React, { useState } from 'react';
import './App.css';
import PlayerCard from './components/playerCard/PlayerCard';
import PlayerDetails from './components/playerDetails/PlayerDetails';
import UniversalModal from './components/UniversalModal/UniversalModal';
import { IvoleyStats } from './components/interfaces';

function App() {
  const [theme, setTheme] = useState('Dark')
  const [gender, setGender] = useState('Female')
  const [selectedPlayer, setSelectedPlayer] = useState<number | undefined>(undefined)

  const rand = (range: number): number => Math.floor(Math.random() * range)
  const players = [{
    id: 1,
    name: 'Valter',
    position: 'Central',
    gender: randomiseGender(),
    handPreference: 'Right'
  },
  {
    id: 2,
    name: 'Albert',
    position: 'Oposite',
    gender: randomiseGender(),
    handPreference: 'Left',
    seasonStats: generatePlayerStats()
  },
  {
    id: 3,
    name: 'Mapet',
    position: 'Exterior',
    gender: randomiseGender(),
    handPreference: 'Right',
    seasonStats: generatePlayerStats()
  },]
  const Modal = () => {
    if (! selectedPlayer) return null
    const player = players.find(p => p.id === selectedPlayer )
    if (!player) return null
    return (
      <UniversalModal theme={ theme } closeModal={ () => setSelectedPlayer(undefined) }>
        <PlayerDetails player={ player } key={ player.id }/> 
      </UniversalModal>
      )
  }
  function selectTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    if(event.currentTarget.value) setTheme(event.currentTarget.value)
  }
  function selectGender(event: React.ChangeEvent<HTMLSelectElement>) {
    if(event.currentTarget.value) setGender(event.currentTarget.value)
  }

  // function generatePlayers() {
  //   return players.map(p => <PlayerCard theme={ theme } player={ p } selected={ p.id === selectedPlayer } onSelected={ (v: number) => setSelectedPlayer(v) } key={ p.id }/>)
  // }
  function randomiseGender() {
    const GENDER = ['Female', 'Male']
    return (gender !== 'Mix') ? gender : GENDER[rand(GENDER.length)]
  }

  function generatePlayerStats(): IvoleyStats {
    const ABILITIES = ['attack', 'recieve', 'set', 'block', 'serve']
    return ABILITIES.reduce((accum, curr) => {
      let good = rand(10)
      let bad = rand(10)
      const p = { good, bad, total: good + bad }

      good += rand(10)
      bad += rand(10)
      const c = { good: good, bad: bad, total: good + bad }

      accum[curr as keyof IvoleyStats] = { current: c, prev: p }
      return accum
    }, {} as IvoleyStats)
  }
  return (
    <div>
      <div id='card-list'>
        { players.map(p => <PlayerCard theme={ theme } player={ p } selected={ p.id === selectedPlayer } onSelected={ (v: number) => setSelectedPlayer(v) } key={ p.id }/>) }
      </div>
      <fieldset id='options'>
        <legend>Options</legend>
        <label>Gender:
          <select value={ gender } onChange={ selectGender }>
            <option>Female</option>
            <option>Male</option>
            <option>Mix</option>
          </select>
        </label>
        <label>Theme:
          <select value={ theme } onChange={ selectTheme }>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </label>
      </fieldset>
      <Modal/>
    </div>
  );
}

export default App;
