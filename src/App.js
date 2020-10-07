import React from 'react';
import styles from './App.module.css';
import Clock from './components/Clock'
import WorkHours from './components/WorkHours/index'
import ItemNumber from './components/ItemNumber/index'
import DeadLineDisplay from './components/DeadLineDisplay/index'
import TaskDisplay from './components/TaskDisplay/index'

const data = [{
  "id": 49384,
  "description": "Посмотреть лекции по Матану",
  "items": [
    {
      "text": "1 лекция",
      "is_done": true
    },
    {
      "text": "2 лекция",
      "is_done": false
    }
  ],
  "deadline": new Date(2020, 10, 12, 22, 7),
  "hours_to_do": 5.7,
  "notes": "Нужно зайти на youtube и зайти на канал Лекторий ФПМИ"
},
{
  "id": 33,
  "description": "Сделайть что-нибудь и так далее и тому подобное с пунктами",
  "items": [
    {
      "text": "1 лекция",
      "is_done": true
    },
    {
      "text": "2 лекция",
      "is_done": false
    }
  ],
  "deadline": new Date(2020, 12, 12, 2, 7),
  "hours_to_do": 51.7,
  "notes": "Нужно зайти на youtube и зайти на канал Лекторий ФПМИ"
}]

function App() {
  return (
    <div className={styles.page}>
      <Clock />
      <div>
        <WorkHours value={5.5}/>{" "}<ItemNumber number_of_tasks={77} number_of_done_tasks={100}/>
        {" "} <DeadLineDisplay deadline={new Date()} />
      </div>
      <div>
        <TaskDisplay data={data[0]}/>
        <TaskDisplay data={data[1]}/>
      </div>
    </div>
  );
}

export default App;
