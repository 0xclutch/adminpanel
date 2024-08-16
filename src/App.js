import logo from './logo.svg';
import './App.css';
import { Button, Input } from 'antd';
import { useState } from 'react';

import { supabase } from './components/supabaseClient';

function App() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [type, setType] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postCode, setPostCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [photo, setPhoto] = useState("");

  const confirmOptions = async () => {
    // sign user up with auth
    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if(error) {
      alert("Cannot continue with process! Error Encountered!: " + error);
    } else {
      // Add a new row 
      alert(user.id);
      const { error, data } = await supabase
        .from('users')
        .insert({ 
          pin: pin,
          email: email,
          uuid: user.id,
          photo: photo,
          firstname: firstName,
          middlename: middleName,
          lastname: lastName,
          age: age,
          month: birthMonth,
          day: birthDate,
          houseNumber: houseNumber.toUpperCase(),
          street: street.toUpperCase(),
          type: type.toUpperCase(),
          suburb: suburb.toUpperCase(),
          state: state.toUpperCase(),
          postCode: postCode,
      });

      if(error) {
        alert('Uh oh! ', error);
      } else {
        console.log(data);
      }


    }

  }

  return (
    <>
      <div className="bomboclatt">
        <h1>Gov ID Creator</h1>
        <Input onChange={(e) => setFirstName(e.target.value)} style={{ width: '200px'}} placeholder='Enter First Name' /><br></br><br></br>
        <Input onChange={(e) => setMiddleName(e.target.value)} style={{ width: '200px'}} placeholder='Enter Middle Name' /><br></br><br></br> 
        <Input onChange={(e) => setLastName(e.target.value)} style={{ width: '200px'}} placeholder='Enter Last Name' /><br></br><br></br>
        <br></br>


        <Input onChange={(e) => setAge(e.target.value)} style={{ width: '200px'}} placeholder='Assign age' /><br></br>
        <Input onChange={(e) => setBirthMonth(e.target.value)} style={{ width: '200px'}} placeholder='Enter a birth month (1-12)' /><br></br>
        <Input onChange={(e) => setBirthDate(e.target.value)} style={{ width: '200px'}} placeholder='Enter birth date/day' /><br></br>

        <br></br>
        <Input onChange={(e) => setHouseNumber(e.target.value)} style={{ width: '200px'}} placeholder='Enter House Number' /><br></br>
        <Input onChange={(e) => setStreet(e.target.value)} style={{ width: '200px'}} placeholder='Enter House Street Name' /><br></br>
        <Input onChange={(e) => setType(e.target.value)} style={{ width: '200px'}} placeholder='Enter street suffix (St/Rd/Pd)' /><br></br>
        <Input onChange={(e) => setSuburb(e.target.value)} style={{ width: '200px'}} placeholder='Enter Suburb Name' /><br></br>
        <Input onChange={(e) => setState(e.target.value)} style={{ width: '200px'}} placeholder='Enter State Name (QLD)' /><br></br>
        <Input onChange={(e) => setPostCode(e.target.value)} style={{ width: '200px'}} placeholder='Enter Postcode' /><br></br>
        <Input onChange={(e) => setEmail(e.target.value)} style={{ width: '200px'}} placeholder='Assign email' /><br></br>
        <Input onChange={(e) => setPassword(e.target.value)} style={{ width: '200px'}} placeholder='Assign Password' /><br></br>
        <Input onChange={(e) => setPin(e.target.value)} style={{ width: '200px'}} placeholder='Assign a 6 digit PIN' /><br></br>
        <Input onChange={(e) => setPhoto(e.target.value)} style={{ width: '300px'}} placeholder='Paste Image Address for ID Photo' /><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Button onClick={() => confirmOptions()} type='primary'>Confirm and Signup</Button>
      </div>
    </>
  );
}

export default App;
