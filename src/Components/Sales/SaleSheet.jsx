import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SaleSheet = ({salesPromise}) => {
    const salesDataRes = use(salesPromise)
    const salesData = salesDataRes.data;

    const salesChart = salesData.map(data => {
        const sales = {
            month: data.month,
            sales: data.sales,
        }
        return sales;
    });
    return (
        <div className='mt-10'>
            <BarChart width={600} height={400} data={salesChart}>
                <XAxis dataKey='month'></XAxis>
                <YAxis></YAxis>
                <Tooltip cursor={{fill: 'transparent'}}></Tooltip>
                <Bar dataKey='sales' fill='gray'></Bar>
            </BarChart>
        </div>
    );
};

export default SaleSheet;