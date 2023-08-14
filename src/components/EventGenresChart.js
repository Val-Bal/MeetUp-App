import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const colors = ["#ffffff", "#eddcdc", "#dbbaba", "#c99797", "#b77575"];
const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

 const EventGenresChart = ({ events }) => {
     const [data, setData] = useState([]);
     

     useEffect(() => {
        setData(() => {
          const data = genres.map((genre) => {
            const value = events.filter(({ summary }) =>
              summary.split(" ").includes(genre)
            ).length;
   
            return { name: genre, value };
          });
          return data.filter((entry) => entry.value > 0);
        });
      }, [events]);

     return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart>
            <Pie
                data={data}
                dataKey="value"
                cx={200}
                cy={200}
                fill="#8884d8"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%` }
                outerRadius={130}            
            />
            {data.map((_entry, index) => (
             <Cell key={`cell-S${index}`} fill={colors[index]} />
             ))}
            </PieChart>
        </ResponsiveContainer>
     );

 };

 export default EventGenresChart;