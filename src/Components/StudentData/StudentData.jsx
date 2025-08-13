import React, { use } from 'react';

const StudentData = ({marksPromise}) => {
    const studentMarksRes = use(marksPromise)
    const studentMarks = studentMarksRes.data;

    const chartData = studentMarks.map(data => {
        const student ={
            id: data.student_id,
            name: data.name,
            math: data.marks.math,
        }

        return student;
    })
    console.log(chartData);
    return (
        <div>
            
        </div>
    );
};

export default StudentData;