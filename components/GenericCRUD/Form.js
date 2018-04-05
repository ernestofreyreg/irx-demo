import React from 'react'
import FieldInput from './FieldInput'
import Button from '../Button'

const Form = ({ 
  fields, 
  singular, 
  form, 
  onSubmit, 
  onChange 
}) => (
  <div className='Form'>
    <div className='fields'>
      {fields
        .filter(field => !field.hide)
        .map(field => 
          <FieldInput 
            key={field.name} 
            value={form[field.name] || ''} 
            onChange={onChange(field.name)}
            {...field} 
          />
        )}
    </div>
    <div className='cta'>
      <Button label={`Add ${singular}`} onClick={onSubmit} />
    </div>
    <style jsx>{`
      .Form {
        display: inline-flex;
        flex-direction: column;  
        margin-top: 10px;   
        border-top: solid 1px #ccc;  
        overflow: auto;    
      }

      .fields {
        display: inline-flex;
        flex-direction: row;
      }

      .cta {
        display: inline-flex;
        flex-direction: row;
        margin-top: 4px;
      }
    `}</style>
  </div>
)

export default Form 
