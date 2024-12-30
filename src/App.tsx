import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Navbar } from "./components/Navbar"
import{ StudentList } from "./components/StudentList"
import{ AddStudent } from "./components/AddStudent"
import{ EditStudent } from "./components/EditStudent"

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/Add" element={<AddStudent />} />
          <Route path="/Edit/:id" element={<EditStudent />} />
        </Routes>
     
      </Container>
      </>
  
  )
}

export default App