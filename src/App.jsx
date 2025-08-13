
import axios from 'axios';
import './App.css';
import { Suspense } from 'react';
import MarksData from './Components/MarksData/MarksData';

function App() {
 const marksPromise = axios.get('marksData.json');
  return (
    <>
      <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
        <MarksData marksPromise={marksPromise}></MarksData>
      </Suspense>
    </>
  )
}

export default App
