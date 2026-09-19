import Home from './Home'
import About from './About'
import NotFound from './NotFound'
import Students from './Students'
import StudentInfo from './StudentInfo'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const students = [
  { id: 1, name: "Harsh Raj", age: 21, course: "Computer Science", year: 3, email: "harsh@example.com", marks: 85 },
  { id: 2, name: "Rahul Sharma", age: 20, course: "Information Technology", year: 2, email: "rahul@example.com", marks: 78 },
  { id: 3, name: "Priya Singh", age: 21, course: "Computer Science", year: 3, email: "priya@example.com", marks: 92 },
  { id: 4, name: "Aman Kumar", age: 19, course: "Electronics", year: 1, email: "aman@example.com", marks: 74 },
  { id: 5, name: "Sneha Verma", age: 20, course: "Information Technology", year: 2, email: "sneha@example.com", marks: 88 },
  { id: 6, name: "Rohit Mehta", age: 22, course: "Mechanical Engineering", year: 4, email: "rohit@example.com", marks: 81 },
  { id: 7, name: "Ananya Gupta", age: 20, course: "Computer Science", year: 2, email: "ananya@example.com", marks: 95 },
  { id: 8, name: "Vikas Yadav", age: 21, course: "Civil Engineering", year: 3, email: "vikas@example.com", marks: 69 },
  { id: 9, name: "Neha Kapoor", age: 19, course: "Information Technology", year: 1, email: "neha@example.com", marks: 87 },
  { id: 10, name: "Arjun Malhotra", age: 22, course: "Computer Science", year: 4, email: "arjun@example.com", marks: 91 },

  { id: 11, name: "Karan Joshi", age: 20, course: "Electronics", year: 2, email: "karan@example.com", marks: 76 },
  { id: 12, name: "Pooja Sharma", age: 21, course: "Computer Science", year: 3, email: "pooja@example.com", marks: 89 },
  { id: 13, name: "Aditya Singh", age: 19, course: "Mechanical Engineering", year: 1, email: "aditya@example.com", marks: 72 },
  { id: 14, name: "Simran Kaur", age: 22, course: "Information Technology", year: 4, email: "simran@example.com", marks: 94 },
  { id: 15, name: "Mohit Agarwal", age: 21, course: "Civil Engineering", year: 3, email: "mohit@example.com", marks: 68 },
  { id: 16, name: "Riya Sharma", age: 20, course: "Computer Science", year: 2, email: "riya@example.com", marks: 96 },
  { id: 17, name: "Nikhil Verma", age: 19, course: "Electronics", year: 1, email: "nikhil@example.com", marks: 79 },
  { id: 18, name: "Isha Gupta", age: 21, course: "Information Technology", year: 3, email: "isha@example.com", marks: 84 },
  { id: 19, name: "Sahil Khan", age: 22, course: "Mechanical Engineering", year: 4, email: "sahil@example.com", marks: 73 },
  { id: 20, name: "Megha Jain", age: 20, course: "Computer Science", year: 2, email: "megha@example.com", marks: 90 },

  { id: 21, name: "Dev Patel", age: 21, course: "Civil Engineering", year: 3, email: "dev@example.com", marks: 77 },
  { id: 22, name: "Kavya Reddy", age: 19, course: "Information Technology", year: 1, email: "kavya@example.com", marks: 93 },
  { id: 23, name: "Yash Thakur", age: 22, course: "Computer Science", year: 4, email: "yash@example.com", marks: 86 },
  { id: 24, name: "Aditi Mishra", age: 20, course: "Electronics", year: 2, email: "aditi@example.com", marks: 82 },
  { id: 25, name: "Manish Kumar", age: 21, course: "Mechanical Engineering", year: 3, email: "manish@example.com", marks: 71 },
  { id: 26, name: "Tanya Roy", age: 19, course: "Computer Science", year: 1, email: "tanya@example.com", marks: 97 },
  { id: 27, name: "Varun Bansal", age: 22, course: "Information Technology", year: 4, email: "varun@example.com", marks: 80 },
  { id: 28, name: "Nisha Patel", age: 20, course: "Civil Engineering", year: 2, email: "nisha@example.com", marks: 75 },
  { id: 29, name: "Akash Sharma", age: 21, course: "Computer Science", year: 3, email: "akash@example.com", marks: 88 },
  { id: 30, name: "Divya Singh", age: 19, course: "Electronics", year: 1, email: "divya@example.com", marks: 91 },

  { id: 31, name: "Rajat Gupta", age: 22, course: "Mechanical Engineering", year: 4, email: "rajat@example.com", marks: 67 },
  { id: 32, name: "Muskan Verma", age: 20, course: "Information Technology", year: 2, email: "muskan@example.com", marks: 85 },
  { id: 33, name: "Abhishek Jain", age: 21, course: "Computer Science", year: 3, email: "abhishek@example.com", marks: 93 },
  { id: 34, name: "Sakshi Mehta", age: 19, course: "Civil Engineering", year: 1, email: "sakshi@example.com", marks: 78 },
  { id: 35, name: "Gaurav Yadav", age: 22, course: "Electronics", year: 4, email: "gaurav@example.com", marks: 83 },
  { id: 36, name: "Pallavi Sharma", age: 20, course: "Computer Science", year: 2, email: "pallavi@example.com", marks: 89 },
  { id: 37, name: "Rishabh Kapoor", age: 21, course: "Information Technology", year: 3, email: "rishabh@example.com", marks: 74 },
  { id: 38, name: "Shreya Gupta", age: 19, course: "Mechanical Engineering", year: 1, email: "shreya@example.com", marks: 92 },
  { id: 39, name: "Varsha Nair", age: 22, course: "Computer Science", year: 4, email: "varsha@example.com", marks: 87 },
  { id: 40, name: "Tarun Singh", age: 20, course: "Electronics", year: 2, email: "tarun@example.com", marks: 70 },

  { id: 41, name: "Ayush Mishra", age: 21, course: "Information Technology", year: 3, email: "ayush@example.com", marks: 81 },
  { id: 42, name: "Komal Verma", age: 19, course: "Computer Science", year: 1, email: "komal@example.com", marks: 94 },
  { id: 43, name: "Deepak Kumar", age: 22, course: "Civil Engineering", year: 4, email: "deepak@example.com", marks: 66 },
  { id: 44, name: "Nandini Rao", age: 20, course: "Mechanical Engineering", year: 2, email: "nandini@example.com", marks: 88 },
  { id: 45, name: "Rohan Das", age: 21, course: "Computer Science", year: 3, email: "rohan@example.com", marks: 90 },
  { id: 46, name: "Aarushi Jain", age: 19, course: "Information Technology", year: 1, email: "aarushi@example.com", marks: 96 },
  { id: 47, name: "Suresh Patel", age: 22, course: "Electronics", year: 4, email: "suresh@example.com", marks: 76 },
  { id: 48, name: "Mansi Shah", age: 20, course: "Computer Science", year: 2, email: "mansi@example.com", marks: 84 },
  { id: 49, name: "Kunal Arora", age: 21, course: "Civil Engineering", year: 3, email: "kunal@example.com", marks: 79 },
  { id: 50, name: "Shivani Gupta", age: 20, course: "Information Technology", year: 2, email: "shivani@example.com", marks: 91 }
];
  return (
    <div className="app-shell">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/student' element={<Students students={students} />}/>
      <Route path='/student/:id' element={<StudentInfo students={students} />}/>
      <Route path='/about' element={<About />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </div>
  )
}

export default App
