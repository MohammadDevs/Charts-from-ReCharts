import React, { use } from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksData = ({marksPromise}) => {

    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data;


    // data processing for the charts
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math,
        }
        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;
        return student;
    })
    // console.log(marksChartData);
    return (
        <div>
            <BarChart width={500} height={400} data={marksChartData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='math' fill='green'></Bar>
                <Bar dataKey='physics' fill='red'></Bar>
                <Bar dataKey='avg' fill='purple'></Bar>
                <Tooltip cursor={{fill: "transparent"}} content={<div className='bg-amber-50 p-2 rounded-2xl text-xl shadow-xl'>This is Marks data</div>}></Tooltip>
            </BarChart>
            <LineChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' fill='purple' stroke='purple'></Line>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default MarksData;