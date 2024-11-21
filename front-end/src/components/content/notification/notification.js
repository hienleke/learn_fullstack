import React, { useEffect, useState } from 'react';
import './notification.css'; // 
const Notification = ({ children }) => {
  const imageSources = ["https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/microsoft.png?1708185060",
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/ibm.png?1708185059",
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/amazon.png?1708185059",
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/scale-ai.png?1708185060",
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/cloudflare.png?1708185059",
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/stripe.png?1708185060",
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/shopify.png?1708185060",
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/ycombinator.png?1708185060",
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/github.png?1633381266",
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/intercom.png?1524913324",
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/upwork.png?1708185060",
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/angellist.png?1708185059",]

  useEffect(() => {
  
  }, []); // Run on component mount

  return (
    <div class='notification' >
          <div class='notification-text'><h1>asdfs</h1></div>
          <div class='logos'>
          {imageSources.map((src, index) => (
        <img 
          key={index} 
          src={src} 
          alt={`Customer ${index + 1}`} 
          style={{ margin: "10px", height: "60px", width: "auto" }} 
        />
      ))}
            </div>
    </div>
  );
};

export default Notification;
