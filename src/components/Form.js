import * as React from 'react';

export default function Form (props) {
    return <div>
        <form onSubmit={props.onSubmit}>
            <h1>Prime Numbers</h1>
            <p>
                <label>Number</label>
                <input
                    type='text'
                    value={props.number}
                    name='number'
                    placeholder='Number'
                    onChange={props.onChange}/>
            </p>
            <p>
                <label>Results per page</label>
                <input
                    type='text'
                    value={props.pageSize}
                    name='pageSize'
                    placeholder='Results per page'
                    onChange={props.onChange}/>
            </p>
            <button type='submit'>Submit</button>
        </form>
    </div>
}