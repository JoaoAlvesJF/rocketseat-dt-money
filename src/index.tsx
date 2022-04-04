import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela',
          amount: 600,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'aluguel',
          amount: 400,
          type: 'withdraw',
          category: 'food',
          createdAt: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
