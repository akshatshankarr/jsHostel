import { useState } from "react"
import Button from 'react-bootstrap/Button';
import './profile.css'

function Profile(){
    document.body.style = 'background: #393E46';  //343541
    
    const [cor, setcor] = useState(false);
    function Editable(){
        setcor(false);
    }

    function Save(){
        setcor(true);
    }

    return(
        <div>
                <form className="ProfForm">
                    <label>Name: 
                        <input type="text" defaultValue={'Akshat'} disabled={cor}/>
                        </label><br/>
                    <label>Room Number: 
                        <input type="number" defaultValue={'233'} disabled={cor}/>
                        </label><br/>
                    <label>Section: 
                        <input type="text" defaultValue={'E'} disabled={cor}/>
                        </label><br/>
                    <label>Contact Number: 
                        <input type="number" defaultValue={'69'} disabled={cor}/>
                        </label><br/>
                    <label>Email: 
                        <input defaultValue={'akshat2.mitblr2022@learner.manipal.edu'} disabled/>
                        </label><br/><br/>
                    <Button variant="dark" className="subButton" onClick={Editable}>Edit Profile</Button>{' '}
                    <Button variant="dark" className="subButton" onClick={Save}>Save Changes</Button>{' '}
                </form>
        </div>

        );
}

export default Profile
