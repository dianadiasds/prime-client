import * as React from 'react';

export default function Form (props) {
    return <div>
        <form onSubmit={props.onSubmit}>
            <h1>Form</h1>
            <p>
                <label>Number</label>
                <input
                    type='text'
                    value={props.number}
                    name='number'
                    placeholder='Number'
                    onChange={props.onChange}/>
            </p>
            <button type='submit'>Submit</button>
        </form>
    </div>
}