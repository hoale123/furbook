import { useState } from 'react';
import GoToTop from './GoToTop'
// import './CSS/editProfileForm.css'
import EmailUpdater from './Updaters/EmailUpdater'
import NameUpdater from './Updaters/NameUpdater'
// import UsernameUpdater from './Updaters/UsernameUpdater'
import UserImgUpdater from './Updaters/UserImgUpdater'
import PhoneUpdater from './Updaters/PhoneUpdater'
import BirthdateUpdater from './Updaters/BirthdateUpdater'


function EditProfileForm({ user, setUser, edit, setEdit }) {
    const { username, email, phone_number, birthdate, profile_picture } = user
    const [ editEmail, setEditEmail ] = useState(email)
    const [ editUsername, setEditUsername ] = useState(username)
    const [ editPhone, setEditPhone ] = useState(phone_number)
    const [ editUserImg, setEditUserImg ] = useState(profile_picture)
    const [ editBirthdate, setEditBirthdate ] = useState(birthdate)

    return(
        <>
        {user ? (
         <div className="wrapper">
            <div className="left">
                <img src={profile_picture ? profile_picture : "https://lh3.googleusercontent.com/proxy/PCiNxg9rwTImVYlPonbg-HMCGwM0kjUFnjs2TMVuINQSKyqMS8cY8dIExX_qecVJvyXw8jFBKBFRQ74vkEihUvpEP5v9Uy63B7caVHBaR4WUj6GJ8IYW3nVnT-SBDIWdJMiAiTdcLw"} alt="user" style={{width:"70%"}} />
                
                { editUserImg ? <UserImgUpdater editUserImg={editUserImg} setEditUserImg={setEditUserImg} user={user} setUser={setUser}/>
                :
                <div className="form-group">
                <span><button onClick={()=>setEditUserImg(!editUserImg)} className="ui primary button">Edit Image</button></span>
                </div> }
                <div className="done-edit">
                    <button style={{backgroundColor: 'orange'}} onClick={()=>setEdit(!edit)} className="ui primary button">Done Edit</button>
                </div>
            </div>
            <div className="right">
                <div className="info">
                    <h3>Information</h3> 
                    <div className="info_data">
                        { editEmail ? 
                            <EmailUpdater editEmail={editEmail} setEditEmail={setEditEmail} user={user} setUser={setUser} /> 
                        :
                        <div className="data">
                            <h4>Email
                                <span style={{paddingLeft: '20px'}}><button onClick={()=>setEditEmail(!editEmail)} className="ui primary button">Edit</button></span>
                            </h4>
                            <p style={{fontSize: '20px'}}>{email}</p> 
                        </div> }
                        
                        { editPhone ? 
                            <PhoneUpdater editPhone={editPhone} setEditPhone={setEditPhone} user={user} setUser={setUser} /> 
                        :
                        <div className="data">
                            <h4>Phone<span style={{paddingLeft: '20px'}}><button onClick={()=>setEditPhone(!editPhone)} className="ui primary button">Edit</button></span></h4>
                            <p style={{fontSize: '20px'}}>{ phone_number? phone_number : "Add Phone Number"}</p>
                        </div> }

                        { editBirthdate ? 
                            <BirthdateUpdater editBirthdate={editBirthdate} setEditBirthdate={setEditBirthdate} user={user} setUser={setUser} /> 
                        :
                        <div className="data">
                            <h4>BirthDay <span style={{paddingLeft: '20px'}}><button onClick={()=>setEditBirthdate(!editBirthdate)} className="ui primary button">Edit</button></span></h4>
                            <p style={{fontSize: '20px'}}>{birthdate ? birthdate : " Add Birthday"}</p>
                        </div>}

                    </div>
                </div>  

                <div className="info position">
                    <h3></h3> 
                    <div className="info_data">
                        
                       { editUsername ? 
                            <NameUpdater editUsername={editUsername} setEditUsername={setEditUsername} user={user} setUser={setUser} /> 
                        :
                        <div className="data">
                            <h4>Name<span style={{paddingLeft: '20px'}}><button onClick={()=>setEditUsername(!editUsername)} className="ui primary button">Edit</button></span></h4>
                            <p style={{fontSize: '20px'}}>{username ? username : "Add Name"}</p>
                        </div>}
                    </div>
                </div>  
            </div>
        </div>
        ) : null}
        <GoToTop />
    </>

    )
}

export default EditProfileForm;