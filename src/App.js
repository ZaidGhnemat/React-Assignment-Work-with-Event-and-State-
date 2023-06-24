import './App.css'
import Expenses from './components/Expenses/Expenses'
import PracticeOne from './components/Exercis/PracticeOne'
import componentsImage from './components/Exercis/images/components.png'
import stateImage from './components/Exercis/images/state.png'
import eventsImage from './components/Exercis/images/events.png'
import keyConceptsImage from './components/Exercis/images/key-concepts.png'
import NewExpense from './components/NewExpense/NewExpense'
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

const headerContent = [
  {
    headTitle: 'Key React Concepts',
    breifTitle: 'Selected key React concepts you should know about',
  },
]
const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
]

const addExpenseHandler = (expense) => {
  console.log("App.js");
  console.log(expense);
}
const App = () => {
  return (
    <div className="App">
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>{headerContent[0].headTitle}</h1>
        <p>{headerContent[0].breifTitle}</p>
      </header>
      <ul id="concepts">
        <PracticeOne
          title={concepts[0].title}
          image={concepts[0].image}
          description={concepts[0].description}
        ></PracticeOne>
        <PracticeOne
          title={concepts[1].title}
          image={concepts[1].image}
          description={concepts[1].description}
        ></PracticeOne>
        <PracticeOne
          title={concepts[2].title}
          image={concepts[2].image}
          description={concepts[2].description}
        ></PracticeOne>
      </ul>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses newData={expenses} />
    </div>
  )
}
export default App
