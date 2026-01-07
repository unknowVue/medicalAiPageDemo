import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/index'
import { MantineProvider } from '@mantine/core'

function App() {
  const element = useRoutes(routes)

  return (
    <>
    <MantineProvider>
      {element}
    </MantineProvider>
    </>
  )
}

export default App
