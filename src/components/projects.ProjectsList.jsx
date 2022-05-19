import React from 'react'

export default function ProjectsList() {
  
  return (

    <main>
      <article className='result result-fun'>
        <div className='writeup'>
          <h1 className='writeup-heading'>
            Fun with AI
          </h1>
          <h2 className='writeup-subheading'>
            React | NodeJS | Express | OpenAI API | imgur API | Multer | TesseractJS | Netlify | Heroku
          </h2>
          <h3 className='writeup-paragraph-heading'>
            PROJECT DESCRIPTION:
          </h3>
          <p className='writeup-paragraph'>
            This project is a simple interface for interacting with OpenAI&apos;s powerful GPT-3 model. Users can create their own prompt or choose one of six presets. They can also select their engine and temperature (randomness) before submitting their prompt. If a user receives a hex color code back, the color theme of the app will automatically reflect this. Additionally, users can upload images of printed text. The backend will first perform OCR text extraction via the TesseractJS library, then send to GPT-3 for grammar correction and cleanup, and finally send the result back to the user.
          </p>
          <h3 className='writeup-paragraph-heading'>
            WHAT I LEARNED:
          </h3>
          <p className='writeup-paragraph'>
            While it&apos;s a relatively straightforward app on the surface, this was a challenge for me to design and make fully responsive. Working with semantic HTML and WAI-ARIA standards in a React app was also new to me.
          </p>
          <a className='writeup-link' href='https://fun-with-ai-am.netlify.app/'>visit demo</a>
          <br />
          <a className='writeup-link' href='https://github.com/andrewlpmcneill/fun-with-AI'>visit repository</a>
        </div>
        <div className='image'>
          image(s) here
        </div>
      </article>
      <article className='result result-guessfm'>
        <div className='writeup'>
          <h1 className='writeup-heading'>
            GuessFM
          </h1>
          <h2 className='writeup-subheading'>
            React | MaterialUI | NodeJS | Express | PostgreSQL | Sequelize | Cypress | Netlify | Heroku
          </h2>
          <h3 className='writeup-paragraph-heading'>
            PROJECT DESCRIPTION:
          </h3>
          <p className='writeup-paragraph'>
            Guess FM is a game where users are played a random radio station and have to guess what country it is from.<br /><br />Inspired by the trend of simple online games like Wordle, Guess FM combines the functionality of GeoGuessr - a game where users guess where in the world a Google Street View image is - with the API of Radio Garden — an app that aggregates radio stations from all over the world. This project was created for the Lighthouse Labs Web Development Bootcamp final project.
          </p>
          <h3 className='writeup-paragraph-heading'>
            WHAT I LEARNED:
          </h3>
          <p className='writeup-paragraph'>
            Collaborating with two awesome fellow bootcamp students, this project was as much about communication and teamwork as it was technical. From scraping an API for over 36,000 data points, to using an ORM with JavaScript for the first time, to integrating reverse geocoding and the Google Maps API, to my first deployment, there was a lot to learn here.
          </p>
          <a className='writeup-link' href='https://guessfm.netlify.app/'>visit demo</a>
          <br />
          <a className='writeup-link' href='https://github.com/andrewlpmcneill/guess-fm'>visit repository</a>
        </div>
        <div className='image'>
          image(s) here
        </div>
      </article>
      <article className='result result-jungle'>
        <div className='writeup'>
          <h1 className='writeup-heading'>
            Jungle E-Commerce
          </h1>
          <h2 className='writeup-subheading'>
            Ruby on Rails | Stripe | PostgreSQL | RSpec | Capybara
          </h2>
          <h3 className='writeup-paragraph-heading'>
            PROJECT DESCRIPTION:
          </h3>
          <p className='writeup-paragraph'>
            Jungle is a mock e-commerce application where users can browse items, add to cart, and checkout using Stripe.
          </p>
          <h3 className='writeup-paragraph-heading'>
            WHAT I LEARNED:
          </h3>
          <p className='writeup-paragraph'>
            This project is the result of my first experience with Ruby and Ruby on Rails. It served as a great introduction to the MVC pattern, Active Record ORM, and of course the Ruby programming language. The highly opinionated experience of Rails was a huge contrast to my prior experiences with open-ended NodeJS and Express.
          </p>
          <a className='writeup-link' href='https://github.com/andrewlpmcneill/jungle-rails'>visit repository</a>
        </div>
        <div className='image'>
          image(s) here
        </div>
      </article>
      <article className='result result-scheduler'>
        <div className='writeup'>
          <h1 className='writeup-heading'>
            Scheduler
          </h1>
          <h2 className='writeup-subheading'>
            React | NodeJS | Storybook | Axios | Jest | Cypress
          </h2>
          <h3 className='writeup-paragraph-heading'>
            PROJECT DESCRIPTION:
          </h3>
          <p className='writeup-paragraph'>
            Scheduler is a single-page interview appointment application. Users can browse the calendar by day of the week, see existing appointments, and book new appointments in empty time slots.
          </p>
          <h3 className='writeup-paragraph-heading'>
            WHAT I LEARNED:
          </h3>
          <p className='writeup-paragraph'>
            This project is the result of my first experience with React. I gained an understanding of how React renders elements, of properly updating state, custom hooks, and how important unit, integration, and end-to-end testing is in development.  
          </p>
          <a className='writeup-link' href='https://github.com/andrewlpmcneill/scheduler'>visit repository</a>
        </div>
        <div className='image'>
          image(s) here
        </div>
      </article>
      <article className='result result-password'>
        <div className='writeup'>
          <h1 className='writeup-heading'>
            PasswordKeepR
          </h1>
          <h2 className='writeup-subheading'>
            jQuery | NodeJS | Express | PostgreSQL | Sass
          </h2>
          <h3 className='writeup-paragraph-heading'>
            PROJECT DESCRIPTION:
          </h3>
          <p className='writeup-paragraph'>
            PasswordKeepR is an all-in-one password manager where organizations and users can generate and store their passwords. Organizations can add users, who can view, add, and edit passwords. This project was created for the Lighthouse Labs Web Development Bootcamp mid-term project.
          </p>
          <h3 className='writeup-paragraph-heading'>
            WHAT I LEARNED:
          </h3>
          <p className='writeup-paragraph'>
            I built this project with two fellow cohort members, and it was my first experience with a SPA. Using a popular legacy library, this project taught me a lot about application flow, RESTful APIs, and the ways a full-stack application shares data across the front end, back end, and database.
          </p>
          <a className='writeup-link' href='https://github.com/andrewlpmcneill/PasswordKeepR'>visit repository</a>
        </div>
        <div className='image'>
          image(s) here
        </div>
      </article>
    </main>

  )

}
