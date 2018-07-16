import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Icon } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import Header from './components/Header'
import Form from './components/AddAVehicleForm'
import VehicleList from './components/VehicleList'
import VehicleDetails from './components/VehicleDetails'

import { Modal, Paper, Button } from '@material-ui/core'

import withVehiclesProp from './hocs/withVehiclesProp'
import withVehicleFromParams from './hocs/withVehicleFromParams'

import './styles.css'

const PopulatedVehicleList = withVehiclesProp(VehicleList)

const store = createStore(reducers)

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="navigation">
          <PopulatedVehicleList />
        </div>
        <div className="addButton">
          <Link to="/vehicles/new">
            <Button color="primary" fullWidth={true} variant="contained">
              Add a vehicle
            </Button>
          </Link>
        </div>
        <div className="content">
          <Route
            path="/vehicles/details/:reg"
            component={withVehicleFromParams(VehicleDetails)}
          />
        </div>
        <Route
          path="/vehicles/new"
          component={() => (
            <Modal open={true} className="modal">
              <Paper
                style={{
                  padding: '5px',
                  height: '100%',
                  width: '100%',
                  'box-sizing': 'border-box'
                }}
              >
                <Form style={{ 'padding-left': '10px' }} />
              </Paper>
            </Modal>
          )}
        />
      </div>
    </Router>
  </Provider>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
