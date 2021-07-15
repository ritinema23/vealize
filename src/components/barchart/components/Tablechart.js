import React, { useState } from 'react';
import {TableContainer, TableBody,TableCell,TableHead,TextField,TableRow,Table,Button} from '@material-ui/core';
import Chart from './Chart'


export default function Tablechart() {
    const[subData,setSubrData]=useState([]);
    const[finalData,setFinalData]=useState([]);

    function submitData(subData){
        setFinalData(finalData=>[...finalData,subData]);
        setSubrData(subData={});
        document.myform.reset();
}
  return (
    <div >
       <form name="myform">
       <TableContainer style={{display:'flex',justifycontent :'center' }}>
      <Table style= {{width:'50%',justifycontent :'center'}} size='small'>
        <TableHead>
          <TableRow>
            <TableCell><TextField value={subData['sub']} onChange={(e)=>setSubrData({...subData,"sub": e.target.value})} label ="Employee Name" margin="normal" variant="outlined" color="secondary"/></TableCell>
            <TableCell><TextField value={subData['sem']} onChange={(e)=>setSubrData({...subData,"sem":e.target.value})} label ="Performance / 10" margin="normal" variant="outlined" color="secondary"/></TableCell>

            <TableCell><Button variant="contained" onClick={()=>submitData(subData)} color="primary">Add </Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {finalData.map((data) => (
            <TableRow>
              <TableCell >{data.sub}</TableCell>
              <TableCell >{data.sem}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
       </form>
       <br/>
       <Chart data={finalData}/>
    </div>
  );
}