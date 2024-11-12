// app/SetCookieButton.js
'use client';
import React from 'react';

export default function SetCookieButton() {
  const handleSetCookie = async () => {
    try {
      const response = await fetch('http://localhost:3000/set-cookie', { credentials: 'include' });
      const message = await response.text();
      alert(message);
    } catch (error) {
      console.error('Error setting cookie:', error);
    }
  };

  return (
    <button onClick={handleSetCookie}>
      Set Cookie
    </button>
  );
}
