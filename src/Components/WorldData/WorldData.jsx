import React, { use } from 'react';
import { BarChart, Pie, PieChart, Tooltip } from 'recharts';

const WorldData = ({worldDataPromise}) => {
    const worldDataRes = use(worldDataPromise)
    const worldData = worldDataRes.data;
    return (
        <div>
            <PieChart width={500} height={500} data={worldData}>
                <Pie dataKey='population' nameKey='country' outerRadius={150} cx='50%'cy='50%' fill='#8884d8' label></Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default WorldData;