import Button from 'react-bootstrap/Button';
import './cabrec.css'
import { useState } from 'react';

function CabRec(){
    const [FormVisible, setFormVisible]=useState(false);

    const changevis = () => {
        setFormVisible(!FormVisible);
    };
    
    document.body.style = 'background: #393E46';

    return(
        <div>
            <div>
            <form className='searchForm'>
                <label> Enter time of departure
                    <input type='time' placeholder='Enter time of flight'/>
                </label><br/>
                <label> Enter date you're leaving
                <input type='date' placeholder="DD-MM-YYYY"/>
                </label><br/>
            </form>
            </div>

            <div className='d-flex justify-content-end'>
            <Button
            type='submit' 
            variant='dark' 
            className='subButton'
            > Search </Button>

            <Button 
            variant='dark' 
            className='subButton' 
            onClick={changevis}> New Trip </Button><br/>
            </div>

            <div/>
            {FormVisible && (
                <div>
                <form className='searchForm'>
                    <label>
                        <span className='inputPrompt'>Enter flight departure </span><input type='time'/>
                    </label><br/>
                    <label>
                        Date you're leaving <input type='date'/>
                    </label><br/>
                    <Button as='input'
                    type='submit'
                    className='subButton'
                    id="newFormSubmit"
                    value={'Submit'}
                    onClick/>
                </form>
                </div>
            )}
            </div>
    )


}

export default CabRec