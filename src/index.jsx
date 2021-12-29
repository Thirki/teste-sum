import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';
import './global.css'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/dashboard', () => {
      return [
      {
        Communications: {
          Media: {
            EnterterinmentContent: {
              ticker: 'DIS',
              value: 890100
            }
          }
        }
      },
      {
        Communications: {
          Telecommunications: {
            Telecommunications: {
              ticker: 'T',
              value: -397200
            }
          }
        }
      },
      {
        Communications: {
          Telecommunications: {
            Telecommunications: {
              ticker: 'DTE GY',
              value: -44600
            }
          }
        }
      },
      {
        ConsumerDiscretionary: {
          ConsumerDiscretionaryProducts: {
            ApparelETextileProducts: {
              ticker: 'ADS GY',
              value: -105600
            }
          }
        }
      },
      {
        ConsumerDiscretionary: {
          ConsumerDiscretionaryProducts: {
            Automotive: {
              ticker: 'F',
              value: -638600
            }
          }
        }
      },
      {
        ConsumerDiscretionary: {
          ConsumerDiscretionaryProducts: {
            Automotive: {
              ticker: 'GM',
              value: -712900
            }
          }
        }
      },
      {
        ConsumerDiscretionary: {
          ConsumerDiscretionaryProducts: {
            Automotive: {
              ticker: 'STLA IM',
              value: 296600
            }
          }
        }
      },
      {
        ConsumerStaples: {
          ConsumerStapleProducts: {
            Food: {
              ticker: 'AGRO',
              value: -328800
            }
          }
        }
      },
      {
        TesteParaMostrarMuitasCamadas: {
          Pouco: {
            Pouco: {
              Medio: {
                Medio: {
                  QuantasCamadas: {
                    MEUDEUS: {
                      ticker: 'ContrataOHenrique',
                      value: 1000000
                    }
                  }
                }
              }
            }
          }
        }
      },
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
