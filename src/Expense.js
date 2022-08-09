import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';

export default class Expense extends Component {

    constructor() {
        super();
        this.state = {
            category: "grocery",
            expense: "",
            amount: 0

        }
        this.expenseAmount=0;
    }

    handleClick = (event) => {
        event.preventDefault();

        var newState=this.state;
        newState.expense= event.target.expense.value;
        newState.amount=  parseInt(event.target.amount.value);
        console.log(newState);

        this.expenseAmount += newState.amount;
        this.setState(newState);

    }


    handleChange = (event) => {
        var newState = this.state;
        newState.category = event.target.value;
        this.setState(newState)
    }

    render() {

        console.log("render");
        console.log(this.state.amount);
        return (
            <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
                <Typography variant="h4" align="center" component="h1" gutterBottom>
                    Expense Tracker
                </Typography>
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    autoComplete="off"
                    onSubmit={this.handleClick}
                    style={{width:"50%", margin: 'auto', paddingTop:"20px"}}
                >
                        <TextField
                            required
                            id="outlined-expense"
                            label="Expense"
                            name="expense"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{width:"250px", margin:"5px"}}
                            helperText="Please enter expense"
                        />

                        <TextField
                            id="outlined-select-currency"
                            select
                            value={this.state.category}
                            label="Category"
                            onChange={this.handleChange}
                            style={{width:"250px", margin:"5px"}}
                            
                            helperText="Please select category"
                        >
                            <MenuItem value={"grocery"}>Grocery</MenuItem>
                            <MenuItem value={"Food"}>Food</MenuItem>
                            <MenuItem value={"cloths"}>Cloths</MenuItem>
                            <MenuItem value={"accessories"}>Accessories</MenuItem>
                            <MenuItem value={"medical"}>Medical</MenuItem>
                            <MenuItem value={"rent"}>Rent</MenuItem>
                            <MenuItem value={"bills"}>Bills</MenuItem>
                            <MenuItem value={"others"}>Others</MenuItem>
                        </TextField>
                        <TextField
                            id="outlined-amount"
                            label="Amount"
                            type="number"
                            name="amount"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{width:"250px", margin:"5px"}}
                            helperText="Please enter amount"
                        />

                        <TextField
                            id="outlined-read-only-input"
                            label="Total Expense"
                            value={this.expenseAmount}
                            InputProps={{
                                readOnly: true,
                            }}
                            style={{width:"250px", margin:"5px"}}
                            helperText="Total expense made till now"
                        />
                        <Button variant="outlined" type="submit"  style={{width:"250px", margin:"5px"}}>Submit Expense</Button>

                </Box>
            </div>
        );
    }
}
