import React from 'react';
import {Bar} from 'react-chartjs-2'

export default function Chart(data) {

  const Labels=data.data.map(emp=>emp.sub)
  const dataVal=data.data.map(val=>val.sem)
  const ChartData={
      labels:Labels,
      datasets:[
          {
              label:"EMP PERFORMANCE",
              backgroundColor:'rgba(75,192,192,1)',
              borderColor:'rgba(0,0,0,1)',
              borderWidth:1,
              data:dataVal
          }
      ]
  }

  return (
    <div >
      <div style={{width:'70%',height :"400px",display:"inline-flex",backgroundColor:"antiquewhite"}}>
      <Bar 
      options={{
          maintainAspectRatio : false,
          title :{
              display:true,
              text:"emp performance chart",
              fontsize:25,
          },
          scales :{
              yAxes:[{
                  ticks:{
                      beginAtZero:true,
                      fontsize:15,
                      fontColor:'#000'
                  }
                }],
                xAxes:[{
                    ticks:{
                        beginAtZero:true,
                        fontsize:16,
                        fontColor:'#000'
                    }
                  }]
            }
        }}
      data={ChartData}
      >
      </Bar>
      </div>
    </div>
  );
}