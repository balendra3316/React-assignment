import React, { useState } from 'react';
import CustomerList from './components/CustomerList/CustomerList';
import CustomerDetails from './components/CustomerDetails/CustomerDetails';
import './App.css';


interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, name: 'Customer 01', title: 'Full Stack Developer with B.Tech Degree in Information technology', address: 'Address 01 satna india' },
    { id: 2, name: 'Customer 02', title: 'Software Developer with B.Tech Degree in Information technology', address: 'Address 02  india' },
    { id: 3, name: 'Customer 03', title: 'Frontend Developer with B.Tech Degree in Information technology', address: 'Address 03 chitrakoot india' },
    { id: 4, name: 'Customer 04', title: 'Backend Developer with B.Tech Degree in Information technology', address: 'Address 04 rewa india' },
    { id: 5, name: 'Customer 05', title: 'Testing Developer with B.Tech Degree in Information technology', address: 'Address 05 noida india' },
    { id: 6, name: 'Customer 06', title: 'AI Developer with B.Tech Degree in Information technology', address: 'Address 06 delhi india' },
    { id: 7, name: 'Customer 07', title: 'Java with B.Tech Degree in Information technology', address: 'Address 01 satna india ward no. 17' },


    // Add more customers here
  ]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number>(1);

  const selectedCustomer = customers.find((customer) => customer.id === selectedCustomerId) || null;

  return (
    <div className="app">
      <CustomerList customers={customers} selectedCustomerId={selectedCustomerId} onSelectCustomer={setSelectedCustomerId} />
      <CustomerDetails customer={selectedCustomer} />
    </div>
  );
};

export default App;
