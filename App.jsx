// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//importation des composants
import ClientList from './components/ClientLists';
import CreateClient from './components/CreateClients';
import ClientDetails from './components/ClientsDetail';
import UpdateClient from './components/UpdateClient';
const App = () => {
return (
<Router>
<Routes>
<Route path="/clients" element={<ClientList/>} />
<Route path="/clients/create" element={<CreateClient/>} />
<Route path="/clients/:id" element={<ClientDetails/>} />
<Route path="/clients/:id/update" element={<UpdateClient/>} />
</Routes>
</Router>
)};
export default App;