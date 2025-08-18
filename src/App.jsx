import StudentData from './Components/StudentData/StudentData';
import axios from 'axios';
import './App.css';
import { Suspense } from 'react';
import MarksData from './Components/MarksData/MarksData';
import SaleSheet from './Components/Sales/SaleSheet';

function App() {
 const marksPromise = axios.get('marksData.json');
//  first task here
const salesPromise = axios.get('saleSheet.json');

  return (
      <div className='flex justify-around pt-10'>
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
      </div>
  )
}

export default App
