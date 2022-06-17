import React, { useState } from 'react'
import modelContext from './ModelContext'

const ModelProvider = props => {

  const [objectRotationRight, setObjectRotationRight] = useState(false)
  const [objectRotationLeft, setObjectRotationLeft] = useState(false)
  const [objectMovementRight, setObjectMovementRight] = useState(false)
  const [objectMovementLeft, setObjectMovementLeft] = useState(false)

  return (
    <modelContext.Provider 
      value={{
        objectRotationRight,
        objectRotationLeft,
        setObjectRotationRight,
        setObjectRotationLeft,
        objectMovementRight,
        objectMovementLeft,
        setObjectMovementLeft,
        setObjectMovementRight
      }}
    >
      {props.children}
    </modelContext.Provider>
  )
}

export default ModelProvider