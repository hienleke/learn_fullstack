import React, { useEffect } from 'react';
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
    "https://remoteok.com/cdn-cgi/image/height=60,quality=85/https://remoteok.com/assets/intercom.png?1524913324"]

  useEffect(() => {
  
  }, []); // Run on component mount

  return (
    <div class='notification' >
          <div class='notification-text'>
    <p>
    👉 Hiring remotely? <span class="hide-on-mobile">Reach <span>1,900,000+ remote workers</span> on the 🏆 #1 Remote Job Board</span></p>
    <div className='button-nav button-nav-2'> <a href="#home" className="link">Post a remote job</a></div>
    <div className='button-nav button-nav-1'> <a href="#home" className="link">Hide this</a></div>
          </div>
          <div class='logos'>
            <p>trusted by</p>
          {imageSources.map((src, index) => (
        <img 
          key={index} 
          src={src} 
          alt={`Customer ${index + 1}`} 
        />
      ))}
            </div>
    </div>
  );
};

export default Notification;
