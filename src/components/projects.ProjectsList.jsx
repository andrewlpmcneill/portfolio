import React from 'react';
import { Main, Project, Description, Screenshots, Heading, Stack, SubHeading, P, A } from '../components/projects.ProjectsList.styles';
import Image from './Image';

export default function ProjectsList(props) {

  const {
    mood
  } = props;
  
  return (

    <Main>
      <Project>
        <Description>
          <Heading>
            Fun with AI
          </Heading>
          <Stack>
            React | NodeJS | Express | OpenAI API | imgur API | Multer | TesseractJS | Netlify | Heroku
          </Stack>
          <SubHeading>
            PROJECT DESCRIPTION:
          </SubHeading>
          <P>
            This project is a simple app for interacting with OpenAI&apos;s powerful GPT-3 model. Users can create their own prompt or choose one of six presets. They can also select their engine and temperature (randomness) before submitting their prompt. If a user receives a hex color code back, the color theme of the app will automatically reflect this. Additionally, users can upload images of printed text. The backend will first perform OCR text extraction via the TesseractJS library, then send to GPT-3 for grammar correction and cleanup, and finally send the result back to the user.
          </P>
          <SubHeading>
            WHAT I LEARNED:
          </SubHeading>
          <P>
            While it&apos;s a relatively straightforward app on the surface, this was a challenge for me to design and make fully responsive. Working with semantic HTML and WAI-ARIA standards in a React app was also new to me.
          </P>
          <A href='https://fun-with-ai-am.netlify.app/' target="_blank" rel="noreferrer" mood={mood}>visit demo</A>
          <br />
          <A href='https://github.com/andrewlpmcneill/fun-with-AI' target="_blank" rel="noreferrer" mood={mood}>visit repository</A>
        </Description>
        <Screenshots>
          {/* <img src={funWithAiOne} alt="One" /> */}
          <Image
            src="fun1.jpg"
            alt="Fun with AI 1"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="fun2.jpg"
            alt="Fun with AI 2"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="fun3.jpg"
            alt="Fun with AI 3"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="fun4.jpg"
            alt="Fun with AI 4"
            style={{borderRadius: "6px"}}
          />
        </Screenshots>
      </Project>
      <Project>
        <Description>
          <Heading>
            GuessFM
          </Heading>
          <Stack>
            React | MaterialUI | NodeJS | Express | PostgreSQL | Sequelize | Cypress | Netlify | Heroku
          </Stack>
          <SubHeading>
            PROJECT DESCRIPTION:
          </SubHeading>
          <P>
            Guess FM is a game where users are played a random radio station and have to guess what country it is from.<br /><br />Inspired by the trend of simple online games like Wordle, Guess FM combines the functionality of GeoGuessr - a game where users guess where in the world a Google Street View image is - with the API of Radio Garden — an app that aggregates radio stations from all over the world. This project was created for the Lighthouse Labs Web Development Bootcamp final project.
          </P>
          <SubHeading>
            WHAT I LEARNED:
          </SubHeading>
          <P>
            Collaborating with two awesome fellow bootcamp students, this project was as much about communication and teamwork as it was technical. From scraping an API for over 36,000 data points, to using an ORM with JavaScript for the first time, to integrating reverse geocoding and the Google Maps API, to my first deployment, there was a lot to learn here.
          </P>
          <A href='https://guessfm.netlify.app/' target="_blank" rel="noreferrer" mood={mood}>visit demo</A>
          <br />
          <A href='https://github.com/andrewlpmcneill/guess-fm' target="_blank" rel="noreferrer" mood={mood}>visit repository</A>
        </Description>
        <Screenshots>
          <Image
            src="guess1.jpg"
            alt="GuessFM 1"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="guess2.jpg"
            alt="GuessFM 2"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="guess3.jpg"
            alt="GuessFM 3"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="guess4.jpg"
            alt="GuessFM 4"
            style={{borderRadius: "6px"}}
          />
        </Screenshots>
      </Project>
      <Project>
        <Description>
          <Heading>
            Jungle E-Commerce
          </Heading>
          <Stack>
            Ruby on Rails | Stripe | PostgreSQL | RSpec | Capybara
          </Stack>
          <SubHeading>
            PROJECT DESCRIPTION:
          </SubHeading>
          <P>
            Jungle is a mock e-commerce application where users can browse items, add to cart, and checkout using Stripe.
          </P>
          <SubHeading>
            WHAT I LEARNED:
          </SubHeading>
          <P>
            This project is the result of my first experience with Ruby and Ruby on Rails. It served as a great introduction to the MVC pattern, Active Record ORM, and of course the Ruby programming language. The highly opinionated experience of Rails was a huge contrast to my prior experiences with open-ended NodeJS and Express.
          </P>
          <A href='https://github.com/andrewlpmcneill/jungle-rails' target="_blank" rel="noreferrer" mood={mood}>visit repository</A>
        </Description>
        <Screenshots>
          <Image
            src="jungle1.jpg"
            alt="Jungle 1"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="jungle2.jpg"
            alt="Jungle 2"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="jungle3.jpg"
            alt="Jungle 3"
            style={{borderRadius: "6px"}}
          />
        </Screenshots>
      </Project>
      <Project>
        <Description>
          <Heading>
            Scheduler
          </Heading>
          <Stack>
            React | NodeJS | Storybook | Axios | Jest | Cypress
          </Stack>
          <SubHeading>
            PROJECT DESCRIPTION:
          </SubHeading>
          <P>
            Scheduler is a single-page interview appointment application. Users can browse the calendar by day of the week, see existing appointments, and book new appointments in empty time slots.
          </P>
          <SubHeading>
            WHAT I LEARNED:
          </SubHeading>
          <P>
            This project is the result of my first experience with React. I gained an understanding of how React renders elements, of properly updating state, custom hooks, and how important unit, integration, and end-to-end testing is in development.  
          </P>
          <A href='https://github.com/andrewlpmcneill/scheduler' target="_blank" rel="noreferrer" mood={mood}>visit repository</A>
        </Description>
        <Screenshots>
          <Image
            src="scheduler1.jpg"
            alt="Scheduler 1"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="scheduler2.jpg"
            alt="Scheduler 2"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="scheduler3.jpg"
            alt="Scheduler 3"
            style={{borderRadius: "6px"}}
          />
        </Screenshots>
      </Project>
      <Project>
        <Description>
          <Heading>
            PasswordKeepR
          </Heading>
          <Stack>
            jQuery | NodeJS | Express | PostgreSQL | Sass
          </Stack>
          <SubHeading>
            PROJECT DESCRIPTION:
          </SubHeading>
          <P>
            PasswordKeepR is an all-in-one password manager where organizations and users can generate and store their passwords. Organizations can add users, who can view, add, and edit passwords. This project was created for the Lighthouse Labs Web Development Bootcamp mid-term project.
          </P>
          <SubHeading>
            WHAT I LEARNED:
          </SubHeading>
          <P>
            I built this project with two fellow cohort members, and it was my first experience with a SPA. Using a popular legacy library, this project taught me a lot about application flow, RESTful APIs, and the ways a full-stack application shares data across the front end, back end, and database.
          </P>
          <A href='https://github.com/andrewlpmcneill/PasswordKeepR' target="_blank" rel="noreferrer" mood={mood}>visit repository</A>
        </Description>
        <Screenshots>
          <Image
            src="password1.jpg"
            alt="PasswordKeepr 1"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="password2.jpg"
            alt="PasswordKeepr 2"
            style={{borderRadius: "6px"}}
          />
          <Image
            src="password3.jpg"
            alt="PasswordKeepr 3"
            style={{borderRadius: "6px"}}
          />
        </Screenshots>
      </Project>
    </Main>

  )

}
