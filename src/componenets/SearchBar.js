import React, {useState} from 'react'
import {Paper, TextField, Button } from '@material-ui/core'

function SearchBar({onFormSubmit}) {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => setSearchTerm(event.target.value);

    const handleClick = () => {
        onFormSubmit(searchTerm);
    }
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onFormSubmit(searchTerm);
    }
  }

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
      <Button variant="contained" color="primary" onClick={handleClick} style={{marginTop:"10px"}}>Search</Button>
    </Paper>
  );
}


export default SearchBar
