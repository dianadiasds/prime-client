import * as React from 'react';

export default function Form(props) {
  return <section className='form-fields'>
    <header><h1>Prime Numbers</h1></header>
    <form onSubmit={props.onSubmit}>
      <div>
        <input className='form-control'
               type='number'
               value={props.name}
               name='number'
               placeholder='Number'
               onChange={props.onChange}
        />
      </div>
      <div className='message-error'>{props.errorMessage}</div>
      <div>
        <input className='form-control'
               type='number'
               value={props.pageSize}
               name='pageSize'
               placeholder='Results per page'
               onChange={props.onChange}/>
      </div>
      <button type='submit' className='standard-button'>Submit</button>
    </form>
  </section>
}
