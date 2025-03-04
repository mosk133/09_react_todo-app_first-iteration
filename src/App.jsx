import './App.css'
import { Header } from './components/Header'
import { ItemCard } from './components/ItemCard'
import { ListHeader } from './components/ListHeader'
import { Subheader } from './components/Subheader'

const items = [
  { 
    uuid: "7a5c8b5d-8d2f-4b3b-a6d7-1eec7f8b9b5e", 
    title: "Buy bread", 
    description: "Go to the bakery", 
    status: "done" 
  },
  { 
    uuid: "2f3e4d5a-6b7c-8d9e-0f1a-2b3c4d5e6f7g", 
    title: "Exercise", 
    description: "Run for 30 minutes", 
    status: "in-progress" 
  },
  { 
    uuid: "4b6d8f9a-0c2e-3d5f-7b1a-8c9e0d2f3g4h", 
    title: "Read a book", 
    description: "Read 10 pages", 
    status: "pending" 
  },
  { 
    uuid: "5c7e9a0b-2d4f-6g8h-1j3k-5l7m9n0o2p3q", 
    title: "Write a journal", 
    description: "Write about today's experience", 
    status: "in-progress" 
  },
  { 
    uuid: "6d8f0a2b-4c5e-7g9h-1j3k-5l7m9n0o2p3q", 
    title: "Grocery shopping", 
    description: "Buy fruits and vegetables", 
    status: "pending" 
  },
  { 
    uuid: "7e9a0b2c-4d5f-6g8h-1j3k-5l7m9n0o2p3q", 
    title: "Call mom", 
    description: "Have a quick chat with her", 
    status: "done" 
  },
  { 
    uuid: "8f0a2b4c-6d5e-7g9h-1j3k-5l7m9n0o2p3q", 
    title: "Complete project report", 
    description: "Finish the final draft", 
    status: "in-progress" 
  },
  { 
    uuid: "9a0b2c4d-6e5f-7g8h-1j3k-5l7m9n0o2p3q", 
    title: "Watch a tutorial", 
    description: "Learn something new on YouTube", 
    status: "pending" 
  },
  { 
    uuid: "0b2c4d6e-5f7g-8h9a-1j3k-5l7m9n0o2p3q", 
    title: "Clean the room", 
    description: "Organize desk and wardrobe", 
    status: "done" 
  },
  { 
    uuid: "1c3d5e7f-9g0a-2b4h-6j8k-5l7m9n0o2p3q", 
    title: "Meditate", 
    description: "10 minutes of mindfulness", 
    status: "in-progress" 
  }
];

function App() {

  return (
    <>
      <Header/>
      <Subheader subtitle="Todo List Manager"/>
      <ListHeader content="Todo List"/>
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </>
  )
}

export default App
