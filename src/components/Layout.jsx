import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

export const MoodContext = React.createContext("");

export default function Layout(props) {

  const {
    children,
    title,
    page
  } = props;

  const [mood, setMood] = useState(localStorage.getItem("mood") || "euphoria");

  useEffect(() => {
    localStorage.setItem("mood", mood)
  }, [mood]);

  return (

    <MoodContext.Provider
      value={mood}
    >
      <Nav
        page={page}
        mood={mood}
        setMood={setMood}
      />
      <Header
        title={title}
        mood={mood}
      />
      {children} 
      <Footer />
    </MoodContext.Provider>
  
  )
  
}
