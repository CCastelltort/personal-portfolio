'use client';

import React from 'react';
import Container from './ui/Container';
import PageTitle from './ui/PageTitle';
import ContactForm from './ContactForm';

const Contact = () => {
  
  return (
    <Container>
      <PageTitle>Contact Me</PageTitle>
      <ContactForm />
    </Container>
  )
}

export default Contact