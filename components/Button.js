import React from 'react'

const Button = ({ label, onClick }) => (
  <a href='#' onClick={onClick}>
    {label}

    <style jsx>{`
      a { 
        padding: 6px;
        background: #f8f8f8;
        color: #656565;
        border-radius: 6px;
        text-decoration: none;
        margin-right: 10px;
      }

      a:hover {
        background: #646464;
        color: white;
      }  
    `}</style>
  </a>
)

export default Button
