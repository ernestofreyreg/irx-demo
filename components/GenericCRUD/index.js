import React from 'react'
import connect from 'react-setstate-connect'
import manageState from './state'
import Title from './Title'
import Form from './Form'
import DataTable from './DataTable'

class GenericCRUDView extends React.Component {
  
  componentDidMount() {
    this.props.loadData()
  }

  render () { 
    const { 
      model: { name, nameSingular, fields },
      handleChangeForm,
      handleSubmitForm,
      form,
      data
     } = this.props

    return (
      <div className='CRUD'>
        <Title name={name} count={data.length}/>

        <DataTable fields={fields} data={data} />


        <Form 
          fields={fields} 
          singular={nameSingular} 
          onChange={handleChangeForm}
          onSubmit={handleSubmitForm} 
          form={form}
        />

        <style jsx>{`
          .CRUD {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 20px;
          }

        `}</style>
      </div>
    )
  }
}

export default connect(GenericCRUDView, manageState())
