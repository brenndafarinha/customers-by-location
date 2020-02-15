import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import App from './App'

import './index.css'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
})

const MainApp = () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)


render(<MainApp />, document.getElementById('root'))

