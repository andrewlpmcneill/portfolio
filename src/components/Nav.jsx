import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Dropdown from './Nav.Dropdown';
import Hamburger from './Nav.Hamburger';
import { Header, Navbar, Div, HamburgerWrapper, TitleLink, Link, LinkIcon, H1, H2, Span, NavbarWrapper } from './Nav.styles';
import Select from 'react-select';
import PulseLoader from 'react-spinners/PulseLoader';

const moods = {
  Euphoria: {
    color1: "#ed4546",
    color2: "#4180f0",
  },
  euphoria: {
    color1: "#ed4546",
    color2: "#4180f0",
  },
  drupe: {
    color1: "#F6EA41",
    color2: "#F048C6",
  },
  marcaribe: {
    color1: "#D9ECC7",
    color2: "#07A3B2",
  },
  viking: {
    color1: "#DBD65C",
    color2: "#5614B0",
  },
  opa: {
    color1: "#1fddff",
    color2: "#ff4b1f",
  },
  dusk: {
    color1: "#ffd89b",
    color2: "#19547b",
  },
};

const options = [
  { value: 'euphoria', label: 'Euphoria', color: "#ed4546", color2: "#4180f0" },
  { value: 'drupe', label: 'Drupe', color: "#F6EA41", color2: "#F048C6" },
  { value: 'mar caribe', label: 'Mar Caribe', color: "#D9ECC7", color2: "#07A3B2"},
  { value: 'viking', label: 'Viking', color: "#DBD65C", color2: "#5614B0"},
  { value: 'opa', label: 'Opa', color: "#1fddff", color2: "#ff4b1f"},
  { value: 'dusk', label: 'Dusk', color: "#ffd89b", color2: "#19547b"},
];

const dot = (color1, color2) => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    background: `linear-gradient(to right, ${color1}, ${color2})`,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  
  control: (base) => ({
    ...base,
    backgroundColor: '#29292a',
    borderRadius: 6,
    boxShadow: 'none',
    border: 0,
  }),
  option: (base, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...base,
      backgroundColor: isSelected
        ? '#4a4a4a'
        : isFocused
        ? '#3a3a3a'
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? '#f3f4f6'
        : '#f3f4f6',
      cursor: isDisabled
        ? 'not-allowed'
        : 'default',
      ':active': {
        ...base[':active'],
        background: !isDisabled
          ? isSelected
            ? `linear-gradient(to right, ${data.color}, ${data.color2})`
            : `linear-gradient(to right, ${data.color}, ${data.color2})`
          : undefined,
        color: !isDisabled
          ? isSelected
            ? '#29292a'
            : '#29292a'
          : undefined,
      },
    }
  },
  singleValue: (base, { data }) => ({
    ...base, 
    ...dot(data.color, data.color2), 
    color: '#f3f4f6',
  }),
  container: (base) => ({
    ...base,
    width: 156,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: 'white',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#29292a',
    borderRadius: 6,
  }),
  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: '#29292a',
  })
};

export default function Nav(props) {

  const {
    page,
    mood,
    setMood
  } = props;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700)
  }, []);

  return (

    <Header>
      <NavbarWrapper>
        <Navbar>
          <TitleLink
            href='/'
          >
            <H1>
              andrew
            </H1>
            <H1>
              <Span
                mood={mood}
              >
                mc
              </Span>
            </H1>
          </TitleLink>
          <Div>
            <Link
              href='/about'
            >
              <H2
                page={page === 'about' ? true : false}
              >
                About
              </H2>
            </Link>
            <Link
              href='/projects'
            >
              <H2
                page={page === 'projects' ? true : false}
              >
                Projects
              </H2>
            </Link>
            <Link
              href='/contact'
            >
              <H2
                page={page === 'contact' ? true : false}
              >
                Contact
              </H2>
            </Link>
            {loading 
              ? <div style={{width: "156px", height: "38px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <PulseLoader size={10} loading={true} color={"#f3f4f6"} />
                </div>
              : <Select
                  id="mood-select"
                  options={options}
                  defaultValue={{
                    value: mood,
                    label: mood === 'mar caribe' 
                      ? 'Mar Caribe' 
                      : mood
                        ? (mood.slice(0,1).toUpperCase() + mood.slice(1))
                        : "Euphoria",
                    color: mood ? moods[(mood.split(' ').join(''))].color1 : 'black',
                    color2: mood ? moods[(mood.split(' ').join(''))].color2 : 'black',
                  }}
                  onChange={event => {
                    setMood(event.value)
                  }}
                  styles={colourStyles}
                  isSearchable={false}
                />
            }
            <LinkIcon
              href='https://github.com/andrewlpmcneill'
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </LinkIcon>
            <LinkIcon
              href='https://www.linkedin.com/in/andrewlpmcneill/'
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </LinkIcon>
            <HamburgerWrapper>
              <Hamburger
                open={open}
                setOpen={setOpen}
              />
            </HamburgerWrapper>
          </Div>
        </Navbar>
      </NavbarWrapper>
      <Dropdown
        open={open}
        page={page}
      />
    </Header>
  
  )

}
