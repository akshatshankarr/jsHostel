import Button from 'react-bootstrap/Button'
import './directory.css';

function Directory(){
    document.body.style = 'background: #393E46';
    
    return(
        <div>
            <form className='DirectForm'>
                <label> Enter the name:
                    <input type="text" className='DirectInput' id='NameInput'/>
                </label>
                <label> Enter year: 
                    <input type='text' className='' id='YearInput'/>
                </label>
                <label> Enter branch or section:
                    <input type="text" className='DirectInput'/>
                    <Button as='input' type='submit' id='DirectButton' value={'Search'}
                    onClick/>
                </label>
                <label>Enter the room number:
                    <input type="number" className='DirectInput'/>
                </label>
            </form>
        </div>
    )
}

export default Directory