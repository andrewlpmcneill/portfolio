import React from 'react';
import { Skill, H2, P, Circle, A } from './index.Skills.styles';
import { IoIosPeople } from 'react-icons/io';
import { BsArrowRepeat, BsBookHalf } from 'react-icons/bs';
import { GiChemicalDrop } from 'react-icons/gi';
import { RiTestTubeFill } from 'react-icons/ri';
import { FaLightbulb } from 'react-icons/fa';

export default function Skills() {

  return (

    <>
      <Skill>
        <Circle>
          <IoIosPeople/>
        </Circle>
        <H2>
          Effective communicator
        </H2>
        <P>
          Over a decade of client-facing professional experience.
        </P>
      </Skill>
      <Skill>
        <Circle>
          <BsArrowRepeat />
        </Circle>
        <H2>
          Self starter
        </H2>
        <P>
          New to development, not to problem solving.
        </P>
      </Skill>
      <Skill>
        <Circle>
          <GiChemicalDrop />
        </Circle>
        <H2>
          Easy to work with
        </H2>
        <P>
          Open to all of the many ways to solve a problem.
        </P>
      </Skill>
      <Skill>
        <Circle>
          <FaLightbulb />
        </Circle>
        <H2>
          Curious by nature
        </H2>
        <P>
          Fascinated by the possible solutions programming and technology can provide.
        </P>
      </Skill>
      <Skill>
        <Circle>
          <RiTestTubeFill />
        </Circle>
        <H2>
          Test-driven developer
        </H2>
        <P>
          Believes in unit, integration, and end-to-end testing in balance.
        </P>
      </Skill>
      <Skill>
        <Circle>
          <BsBookHalf />
        </Circle>
        <H2>
          Not just frameworks
        </H2>
        <P>
          Committed to a life-long study of <A href="https://teachyourselfcs.com/" target="_blank" rel="noreferrer">computer science</A>.
        </P>
      </Skill>
    </>
  
  )

}
