import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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

  const [mood, setMood] = useState("Euphoria");
  
  useEffect(() => {
    if (typeof window !== 'undefined' && mood !== "Euphoria") {
      localStorage.setItem("mood", mood);
    }
  }, [mood]);

  useEffect(() => {
    if (localStorage.getItem("mood")) setMood(localStorage.getItem("mood"));
  },[]);

  return (

    <MoodContext.Provider
      value={mood}
    >
      <Helmet>
        <meta
          charSet="utf-8"
        />
        <title>
          {`Andrew McNeill | ${page.slice(0,1).toUpperCase() + page.slice(1)}`}
        </title>
      </Helmet>
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
