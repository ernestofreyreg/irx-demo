import React from 'react'

const Title = ({ name, count }) => (
  <div className='title'>
    {count > 0
      ? `${count} ${name}`
      : name
    }
    <style jsx>{`
      .title {
        display: inline-flex;
        flex-direction: column;
        flex-shrink: 0;
        font-size: 24px;
        color: #656565;
      }
    `}</style>  
  </div>
)

export default Title
