import Header from './components/Header'
import Restaurants from './components/Restaurants';
import AddRestaurant from './components/AddRestaurant';
import Randomize from './components/Randomize';
import Shuffle from './components/Shuffle';
import { useState } from 'react'

function App() {
  const [showAddMenu, setShowAddMenu] = useState(false)
  const [showRandomMenu, setShowRandomMenu] = useState(true)

  const [restaurants, setRestaurants] = useState(
    [
      {
          id: 1,
          text: 'Taco Bell'
      },
      {
          id: 2,
          text: 'McDonalds'
      },
      {
        id: 3,
        text: 'Burger King'
      },
      {
        id: 4,
        text: 'Chipotle'
      },
      {
        id: 5,
        text: 'Subway'
      }
    ]
  )

  // Add Restaurant
  const addRestaurant = (restaurant) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newRestaurant = { id, ...restaurant}
    setRestaurants([...restaurants, newRestaurant])
  }

  return (
    <div className="container">
      <Header title='Dining Option' 
      onAdd={() => {setShowAddMenu(true); setShowRandomMenu(false)}} 
      onRandomize={() => {setShowRandomMenu(true); setShowAddMenu(false)}}
      />

      {!showRandomMenu && showAddMenu && <AddRestaurant onAdd={addRestaurant}/>}
      {!showRandomMenu && showAddMenu && <Restaurants restaurants={restaurants}/>}
      {!showAddMenu && showRandomMenu && <Randomize restaurants={restaurants} />}

    </div>
  );
}

export default App;

//() => {restaurants[Math.floor(Math.random() * restaurants.length)].text}
