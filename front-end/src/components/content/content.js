import React from 'react';
import Notification from './notification/notification';
import './content.css'; // Import the CSS file
const Content = ({ children }) => {
  return (
    <div class='page'>
      <Notification></Notification>
    </div>
  );
};

export default Content;
