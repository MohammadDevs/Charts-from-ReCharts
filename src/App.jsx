
import axios from 'axios';
import './App.css';
import { Suspense } from 'react';
import MarksData from './Components/MarksData/MarksData';
import StudentData from './Components/StudentData/StudentData';

function App() {
 const marksPromise = axios.get('marksData.json');
  return (
    <>
      <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
        <MarksData marksPromise={marksPromise}></MarksData>
      </Suspense>
      <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
        <StudentData marksPromise={marksPromise}></StudentData>
      </Suspense>
    </>
  )
}

export default App
