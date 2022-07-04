import React from 'react'

const container = ({children,title}) => {
  return (
    <div>
      <h2>{title}</h2>

      {children}
    </div>
  );
}

export default container