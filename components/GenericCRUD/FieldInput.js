import React from 'react'

const FieldInput = ({ name, label, type, value, onChange }) => (
  <div className='FieldInput'>
    <div className='input'>
      {type === 'string' &&
        <input
          type='text'
          value={value}
          placeholder={name}
          onChange={onChange}
        />
      }
    </div>
    <style jsx>{`
      .FieldInput {
        display: inline-flex;
        flex-direction: column;
        flex-basis: 200px;
        flex-shrink: 0;
      }

      .input {
        display: inline-flex;
        flex-direction: column;
      }

      .input input {
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        border: none;
        background-color: #f8f8f8;
        padding: 4px;
        outline: none;
      }
    `}</style>
  </div>
)

export default FieldInput 
