import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, TextArea} from "semantic-ui-react";


function ProfileUpdate({ user, setUser }) {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);
  const [profilePicture, setProfilePicture] = useState(user.profile_picture);
  const [bio, setBio] = useState(user.bio);
  const [birthdate, setBirthdate] = useState(user.birthda);
  const [email, setEmail] = useState(user.email);
  const [phone_number, setPhone_number] = useState(user.phone_number);

  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        profile_picture: profilePicture,
        bio: bio,
        birthdate:birthdate,
        email:email,
        phone_number:phone_number
      }),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.errors) {
          setErrors(user.errors);
        } else {
          console.log(user);
          setUser(user);
          history.push("/profile-edit");
        }
      });
  }

  return (
    <div
      style={{
        marginLeft:"auto",
        marginRight:"auto" ,
        paddingLeft:"150px",
        paddingRight:"150px",
        paddingBottom: "100px",
        disply: "flex",
      }}
    >
      <Form onSubmit={onSubmit}>
        <Form.Field
          label="Username"
          value={username}
          control={Input}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Form.Field
          label="Password"
          value={password}
          type="password"
          name="password"
          control={Input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Form.Field
          label="Profile Picture"
          value={profilePicture}
          autoComplete="on"
          control={Input}
          onChange={(e) => setProfilePicture(e.target.value)}
        />

        <Form.Field
          label="phone_number"
          value={phone_number}
          autoComplete="on"
          control={Input}
          onChange={(e) => setPhone_number(e.target.value)}
        />  

        <Form.Field
          label="Bio"
          value={bio}
          autoComplete="off"
          control={TextArea}
          onChange={(e) => setBio(e.target.value)}
        />

        <input className='edit-input' 
        onChange={(e)=> setBirthdate(e.target.value)} 
        value={birthdate} 
        type="date" 
        name="birthdate" 
        required/>
        <label htmlFor="birthdate">Birthday</label>  

        <Form.Field
          label="Email"
          value={email}
          autoComplete="off"
          control={Input}
          onChange={(e) => setEmail(e.target.value)}
        />
           

        <Button>Update</Button>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </Form>
    </div>
  );
}

export default ProfileUpdate;
