import React from 'react';
import Layout from '../components/Layout';

export default function About() {
  
  return (

    <Layout>
      <main>
        <header>
          <h1 className='header-heading'>
            About me
          </h1>
          <h3 className='header-subheading'>
            Web developer &amp; serial tinkerer
          </h3>
          <p className='paragraph header-paragraph'>
            Hey, I&apos;m Andrew! I&apos;m a full-stack web developer based out of Halifax, Nova Scotia. Welcome to my website.<br /><br />Check out the <a className='header-paragraph-link' href='/projects'>projects</a> page to see highlights of what I&apos;ve made.
          </p>
        </header>
        <section className='projects'>
          <h2 className='heading projects-heading'>
            Project&apos;s I&apos;m working on
          </h2>
          <ul className='list projects-list'>
            <li className='list-item projects-list-item'>
              project x...
            </li>
            <li className='list-item projects-list-item'>
              chipping away at a <a className='link projects-list-link' href='https://www.amazon.ca/hz/wishlist/ls/21C3EZ68LHXV8/ref=nav_wishlist_lists_1'>CS fundamentals reading list</a>
            </li>
          </ul>
        </section>
        <section className='connect'>
          <h2 className='heading connect-heading'>
            Connect
          </h2>
          <ul className='list connect-list'>
            <li className='list-item connect-list-item'>
              <a className='link connect-list-link' href='andrew@andrewmc.ca'>Email</a>
            </li>
            <li className='list-item connect-list-item'>
              <a className='link connect-list-link' href='https://github.com/andrewlpmcneill'>GitHub</a>
            </li>
            <li className='list-item connect-list-item'>
              <a className='link connect-list-link' href='https://www.linkedin.com/in/andrewlpmcneill/'>LinkedIn</a>
            </li>
            <li className='list-item connect-list-item'>
              <a className='link connect-list-link' href='https://www.strava.com/athletes/5026433'>Strava</a>
            </li>
          </ul>
        </section>
        <section className='tools'>
          <h2 className='heading tools-heading'>
            Tools
          </h2>
          <h3 className='subheading tools-subheading'>
            Software
          </h3>
          <ul className='list tools-list software-list'>
            <li className='list-item tools-list-item software-list-item'>
              This website is hosted on <a className='link tools-link software-link' href='https://www.rochen.com/'>Rochen</a> and uses the <a className='link tools-link software-link' href='https://www.gatsbyjs.com/'>Gatsby</a> framework
            </li>
            <li className='list-item tools-list-item software-list-item'>
              <strong>Editor:</strong>&nbsp;<a className='link tools-link software-link' href='https://code.visualstudio.com/'>Visual Studio Code</a> with <a className='link tools-link software-link' href='https://marketplace.visualstudio.com/items?itemName=hugolcouto.dark-mint-vscode-theme'>Dark Mint Theme</a>
            </li>
            <li className='list-item tools-list-item software-list-item'>
              <strong>Terminal:</strong>&nbsp;<a className='link tools-link software-link' href='https://iterm2.com/'>iTerm2</a>
            </li>
          </ul>
        </section>
        <section className='misc'>
          <h2 className='heading misc-heading'>
            Misc
          </h2>
          <ul className='list misc-list'>
            <li className='list-item misc-list-item'>
              <a className='link misc-link' href='https://resume.creddle.io/resume/gfxjxtbqbf0'>Resume</a>
            </li>
          </ul>
        </section>
      </main>
    </Layout>

  )

}
