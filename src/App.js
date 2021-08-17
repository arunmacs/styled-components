import React from 'react'
import {Heading, CustomButton} from './styledComponents'
import './App.css'

const App = () => {
  console.log(React.version)

  return (
    <>
      <Heading>Hello World</Heading>
      <CustomButton type="button" font>
        Like
      </CustomButton>
      <CustomButton type="button" outline>
        Like
      </CustomButton>
    </>
  )
}

export default App
