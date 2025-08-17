import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

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
        <div>
            <BarChart width={600} height={400} data={salesChart}>
                <XAxis dataKey='month'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='sales' fill='gray'></Bar>
            </BarChart>
        </div>
    );
};

export default SaleSheet;