import StudentData from './Components/StudentData/StudentData';
import axios, { Axios } from 'axios';
import './App.css';
import { Suspense } from 'react';
import MarksData from './Components/MarksData/MarksData';
import SaleSheet from './Components/Sales/SaleSheet';
import WorldData from './Components/WorldData/WorldData';

function App() {
 const marksPromise = axios.get('marksData.json');
//  first task here
const salesPromise = axios.get('saleSheet.json');
// world data
const worldDataPromise = axios.get('world.json');
  return (
      <div className='grid grid-cols-2'>
        <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
        <MarksData marksPromise={marksPromise}></MarksData>
      </Suspense>
      <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
        <StudentData marksPromise={marksPromise}></StudentData>
      </Suspense>
      {/* First task */}
      <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
        <SaleSheet salesPromise={salesPromise}></SaleSheet>
      </Suspense>

      <Suspense fallback={<span>Wait a minute</span>}>
        <WorldData worldDataPromise={worldDataPromise}></WorldData>
      </Suspense>
      </div>
  )
}

export default App
