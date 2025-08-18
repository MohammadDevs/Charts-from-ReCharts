import React, { use } from 'react';
import { Bar, BarChart, Radar, RadarChart, XAxis, YAxis } from 'recharts';

const StudentData = ({marksPromise}) => {
    const studentMarksRes = use(marksPromise)
    const studentMarks = studentMarksRes.data;

    const chartData = studentMarks.map(data => {
        const student ={
            id: data.student_id,
            name: data.name,
            math: data.marks.math,
        }
const mine = student.math + 25
student.mine = mine;
        return student;
    })
    // console.log(chartData);
    return (
        <div>
            <BarChart width={600} height={400} data={chartData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='math' fill='green'></Bar>
            </BarChart>

            <RadarChart outerRadius={100} width={500} height={400} data={chartData}>
                <Radar name='Mike' dataKey='math' stroke="gray" fill="skyblue" fillOpacity={0.6}></Radar>
                <Radar name="Lily" dataKey="mine" stroke="red" fill="gray" fillOpacity={0.6} />
            </RadarChart>
        </div>
    );
};

export default StudentData;