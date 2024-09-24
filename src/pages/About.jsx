import React from 'react';
import './Home.css';
import BreadCrumb  from './components/BreadCrumb';
import {WhyChose}  from './components/WhyChose';
import ServiceWithIcons from './components/ServiceWIthIcons';
import History from './components/History'

export default function HandymanLanding() {
  return (
    <div>
    <BreadCrumb />
    <History />
    <ServiceWithIcons />
    <WhyChose />
    
  </div>
  );
}




