import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { siteData } from './Data';


const Contact = () => {

  return (
    <>

      <p>{siteData.pages[2] && siteData.pages[2].content && siteData.pages[2].content.heading}</p>
      <p>{siteData.pages[2] && siteData.pages[2].content && siteData.pages[2].content.description}</p>
    </>
  )
};

export default Contact;