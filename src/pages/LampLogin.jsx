import React from 'react'
import { useState, useEffect } from 'react';
// import './Lamp.css';

export default function LampLogin({showLogin, setShowLogin}) {

  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // marginLeft: "100px",
        height: "80vh",
        backgroundColor: "#111827", // Optional background
      }}
    >
        <iframe src='../../Lamp/index.html' title="Login Page"
          className='bg-white dark:bg-gray-900'
          style={{
          width: "100%",
          maxWidth: "500px", // Limit width for better look on large screens
          height: "100%",
          maxHeight: "500px", // Optional max height
          border: "none" }}></iframe>
    </div>
  )
}
