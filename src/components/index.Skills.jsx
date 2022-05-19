import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { BsArrowRepeat } from 'react-icons/bs';
import { GiChemicalDrop } from 'react-icons/gi';

export default function Skills() {

  return (

    <>
      <article className='skill skill-people'>
        <IoIosPeople />
        <h2 className='skill-header skill-header-people'>
          Effective communicator
        </h2>
        <p className='skill-paragraph skill-paragraph-people'>
          Over a decade of client-facing professional experience.
        </p>
      </article>
      <article className='skill skill-starter'>
        <BsArrowRepeat />
        <h2 className='skill-header skill-header-starter'>
          Self starter
        </h2>
        <p className='skill-paragraph skill-paragraph-starter'>
          New to development, not to problem solving.
        </p>
      </article>
      <article className='skill skill-adaptable'>
        <GiChemicalDrop />
        <h2 className='skill-header'>
          Easy to work with
        </h2>
        <p className='skill-paragraph skill-paragraph-starter'>
          Open to all of the many ways to solve a problem
        </p>
      </article>
    </>
  
  )

}
