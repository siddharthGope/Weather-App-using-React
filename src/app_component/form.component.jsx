import React from 'react';
import './form.style.css';

const Form = props => {
    return (
        <div className='container h-100'>
            <form onSubmit={props.loadweather}>
                <div> {props.error ? error() : ''} </div>
                <div className='row'>
                    <div className='col-md-3 offset-md-2'>
                        <input type='text' 
                        className='form-control' 
                        name='city' autoComplete='off' 
                        placeholder='City'/>
                    </div>
                    <div className='col-md-3'>
                        <input type='text' 
                        className='form-control' 
                        name='country' 
                        autoComplete='off' 
                        placeholder='Country'/>
                    </div>
                    <div className='col-md-3 mt-md-0 text-md-left'>
                        <button className='btn btn-warning'>Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

const error = props => {
    return (
        <div className="alert alert-danget mx-5" role='alert'>
            Please enter city and country</div>
    );
}

export default Form;