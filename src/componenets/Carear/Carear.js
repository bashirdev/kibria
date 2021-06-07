import React from 'react';


import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom'




import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { dataTable } from '../../fakedata';
import Footer from '../Footer/Footer';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
   
  },
});

const Carear = () => {
    const classes = useStyles();
    return (
        <div className='container' style={{marginTop:'200px', position:'relative'}}>
   <div className="text-center mb-5">
   <h1>Our Income Table For all Time</h1>
   </div>
            <TableContainer className='table__container'  component={Paper}>
    <Table data-aos='fade-up' className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
        <TableCell align=""></TableCell>
          <TableCell>Date</TableCell>
          <TableCell align="">Description </TableCell>
          <TableCell align="">Reciver</TableCell>
          <TableCell align="">Amount</TableCell>
          <TableCell align="">Over all</TableCell>
          <TableCell align="">Delete</TableCell>
        </TableRow>
      </TableHead>
      
        
        

      <TableBody>
        {dataTable.map((row, index) => (
       <>   <TableRow key={row._id}>
            <TableCell align=""><Link to='/'><span style={{color:'goldenrod'}}><EditIcon   /></span>  </Link> </TableCell>
            <TableCell align="">{row.date.getDate()} </TableCell>
            <TableCell align="">{row.description}</TableCell>
            <TableCell align="">{row.reciver}</TableCell>
            <TableCell align="">{row.amount}</TableCell>
            <TableCell align="">{row.total}</TableCell>
          
           
            
            <TableCell align=""><span style={{color:'red'}}><DeleteForeverIcon  /></span></TableCell>
            
          </TableRow>
        
         </> 
        ))}
        
       
      </TableBody>
    
    </Table>
  
 
         
  </TableContainer>
 <div style={{marginTop:'300px'}}>
 <Footer />
 </div>
        </div>
    );
};

export default Carear;