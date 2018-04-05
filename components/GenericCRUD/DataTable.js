import React from 'react'
import moment from 'moment'

const capitalize = str => str[0].toUpperCase() + str.substring(1)

const DataTable = ({ fields, data }) => (
  <div className='DataTable'>
    <div className='fields'>
      {fields
        .filter(field => !field.hide)
        .map(field => 
          <div key={field.name} className='column'>{capitalize(field.name)}</div>
        )}
    </div>

    <div className='rows'>
      {data.map(item => 
        <div key={item._id} className='row'>
          <div key={item._id + 'id'} className='row-id'>
            {item._id} - {moment(item.created).fromNow()}
          </div>

          {fields
            .filter(field => !field.hide)
            .map(field => 
              <div key={field.name} className='cell'>{item[field.name]}</div>
            )}
        </div>
      )}
    </div>

    <style jsx>{`
      .DataTable {
        display: flex;
        width: 100%;
        flex-direction: column;
        overflow: auto;
      }

      .rows {
        display: inline-flex;
        flex-direction: column;
      }

      .row {
        display: inline-flex;
        flex-direction: row;
        padding: 4px 0;
        padding-bottom: 14px;
        position: relative;
      }

      .row .row-id {
        position: absolute;
        left: 0;
        bottom: 4px;
        font-size: 10px;
        color: #888;
      }

      .row:nth-child(odd) {
        background-color: #f0f0f0;
      }

      .cell {
        display: inline-flex;
        flex-direction: column;
        flex-basis: 200px;
        flex-shrink: 0;
        overflow: hidden;
        color: #888;
        font-size: 14px;
      }

      .fields {
        display: inline-flex;
        flex-direction: row;
      }

      .column {
        display: inline-flex;
        flex-direction: column;
        font-size: 18px;
        font-weight: medium;
        color: black;
        flex-basis: 200px;
        flex-shrink: 0;
      }
    `}</style>

  </div>
)

export default DataTable
