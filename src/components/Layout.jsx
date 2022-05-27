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

  const [mood, setMood] = useState("euphoria");
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("mood", mood);
    }
  }, [mood]);

  useEffect(() => {
    localStorage.getItem("mood")
  },[]);

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
