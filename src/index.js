import React, {useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);



function App() {
  const [val, setVal] = useState(1);
  return (
    <>
      <div className="left-right-button" >
        <svg onClick={() => {
          if(val > 1){
            setVal(val-1)}
          }
          } className='left button' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><polyline points="112 56 40 128 112 200" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
        <span>Previous Progression</span><div className='space'>&nbsp;</div>
        <span>Next Progression</span>
        <svg onClick={() => {
          if(val < 6){
            setVal(val+1)}
          }
          } className="left button" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
      </div>
      <div className='main-body'>
        <h2>PROGRESSION {val} | {obj[val-1]}</h2><br/>
        <code>
          
        </code>
        <SetProgression val={val}/>
      </div>
    </>
  )
}




function SetProgression(props){
  console.log(props.val);
  switch (props.val){
    case 1:
      return <Progression1 />
    case 2:
      return <Progression2 />
    case 3:
      return <Progression3 />
    case 4:
      return <Progression4 />
    case 5:
      return <Progression5 />
    case 6:
      return <Progression6 />
    default:

  }
}

const obj = [
  'UPDATE STATE USING useState',
  'MULTIPLE STATE',
  'USE OBJECT STATE',
  'INITIALIZE STATE FROM FUNCTION',
  'useEffect',
  'useContext'
]

function Progression1() {
  const [age, setAge] = useState(23);
  return (
    <div>
      Today I am {age} years or Age.
      <div>
        <button
          onClick={() => setAge(age+1)}
        >Get Older!</button>
      </div>
    </div>
  )
}

function Progression2() {
  const [age, setAge] = useState(23);
  const [siblings, setSiblings] = useState(2);
  return (
    <div>
      Today I am {age} years or Age.<br/><br/>
      I have {siblings} siblings.
      <div>
        <button
          onClick={() => setAge(age+1)}
        >Get Older!</button>
        <button
          onClick={() => setSiblings(siblings+1)}
        >More siblings!</button>
      </div>
    </div>
  )
}


function Progression3() {
  const [state, setState] = useState({age : 23, siblings : 3})
  const handleClick = (val) =>
    setState({
      ...state,
      [val]: state[val] + 1
    })
    return (
      <div>
        Today I am {state.age} years or Age.<br/><br/>
        I have {state.siblings} siblings.
        <div>
          <button
            onClick={() => handleClick('age')}
          >Get Older!</button>
          <button
            onClick={() => handleClick('siblings')}
          >More siblings!</button>
        </div>
      </div>
    )
}

function Progression4() {
  const [count, setCount] = useState(0)
  return (
    <div>
      Count value is: {count}
      <div>
        <button
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count+1)}
        >
          Plus (+)
        </button>
        <button
          onClick={() => setCount(count-1)}
        >
          Minus (-)
        </button>
      </div>
    </div>
  )

}

function Progression5() {
  const [age, setAge] = useState(0)
  const handleClick = () => setAge(age + 1)

  useEffect(() =>{
    document.title = "You are " + age + ' Years'
  })

  return <div>
    <p>
      Look at the title of the current tab in your browser<br/>
      <button
        onClick={handleClick}
      >
        Update Title!!!
      </button>
    </p>
  </div>
}

const Progression6 = () => {
  const [mTheme, setMTheme] = useState('dark');
  const ThemeContext = React.createContext(mTheme)
  const theme = useContext(ThemeContext)
  const nTheme = {
    light: 'dark',
    dark: 'light'
  }
    return (
      <>
        <div
          style={{
            backgroundColor: theme === 'dark' ? 'black' : 'palegoldenrod',
            color: theme === 'dark' ? 'palegoldenrod' : 'black',
            width: '100%',
            minHeight: '200px'
          }}
        >
          {'The theme here is ' + theme}
        </div>
        <button
          style={{
            backgroundColor: theme === 'dark' ? 'palegoldenrod' : 'black',
            color: theme === 'dark' ? 'black' : 'palegoldenrod',
            fontSize: 'large',
            cursor: 'pointer',
            margin: '20px',
            padding: '10px',
            border: 'none'
          }}
          onClick={() => {
            if(mTheme === 'dark')
              setMTheme('light')
            else
              setMTheme('dark')
          }}
        >{nTheme[mTheme]}</button>
      </>
      )
  }