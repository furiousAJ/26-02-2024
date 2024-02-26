import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseUrl from '../../../Api';

import { Box, Button, FormControl, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Buffer} from 'buffer';
const Productedit = (props) => {
  const [inputs, setInputs] = useState(props.data);
  const [category, setCategory] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const savedata = () => {
    const formdata = new FormData();
    formdata.append('Productname', inputs.Productname);
    formdata.append('Productprice', inputs.Productprice);
    formdata.append('Quantity', inputs.Quantity);
    formdata.append('Photo', selectedImage);
    formdata.append('Expiredate', inputs.Expiredate);
    formdata.append('Cid', inputs.Cid);
    formdata.append('Status', inputs.Status);

    fetch(`http://localhost:5000/editproduct/${inputs._id}`, {
      method: 'put',
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Record saved');
      })
      .catch((err) => {
        console.log('Error:', err);
      });

    navigate('/productlist');
  };

  useEffect(() => {
    axios.get(baseUrl + '/category/categoryview')
      .then(response => {
        console.log(response.data);
        setCategory(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='new'>
      <div className="newContainer">
        <div className="top">
          <h1>Edit</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt='Selected'
                className='imgupload'
              />
            ) : (
              <img src={`data:image/jpeg;base64,${Buffer.from(inputs.Photo.data)}`} className='imgpro' alt='Error' />
            )}
          </div>
          <div className="right">
            <div className='alignform'>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1.6, width: '29ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="filephoto">
                  <label htmlFor='file'>
                    Image:
                  </label>
                  <input
                    type='file'
                    className='icon'
                    onChange={handleImage}
                  />
                  <br/><br/>
                  <TextField
                    id='productname'
                    label='eg:Apple'
                    type='text'
                    name='Productname'
                    value={inputs.Productname}
                    onChange={inputHandler}
                  />
                  <br></br>
                  <TextField
                    id='Price'
                    label='eg:260'
                    type='text'
                    name='Productprice'
                    value={inputs.Productprice}
                    onChange={inputHandler}
                  />
                  <br></br>
                  <TextField
                    id='Quantity'
                    label='Quantity Kg / Lr'
                    type='text'
                    name='Quantity'
                    value={inputs.Quantity}
                    onChange={inputHandler}
                  />
                  <br></br>
                  <TextField
                    id='expiredate'
                    label='Expire Date'
                    type='date'
                    name='Expiredate'
                    value={inputs.Expiredate}
                    onChange={inputHandler}
                    InputLabelProps={{ shrink: true }}
                  />
                  <br></br>
                  <FormControl sx={{ m: 1, width: '25ch' }}>
                    <select className='boxcategory' name="Cid" defaultValue='select' value={inputs.Cid} onChange={inputHandler}>
                      {category.map((value, index) => (
                        <option key={index} value={value._id}>{value.Categoryname}</option>
                      ))}
                    </select>
                    <br></br>
                  </FormControl>
                  <br></br>
                  <select className='boxact' name="Status" value={inputs.Status} onChange={inputHandler}>
                    <option value="Active">Active</option>
                    <option value="InActive">InActive</option>
                  </select>
                  <br/><br/>
                  <div className='button'>
                    <Button type='submit' variant='contained' color='success' onClick={savedata}>
                      Submit
                    </Button>
                    <Button type='button'>Reset</Button>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productedit;