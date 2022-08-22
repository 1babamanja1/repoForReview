import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import UseEffectShow from './Components/hooks/UseEffectShow';
import UseStateShow from './Components/hooks/UseStateShow';
import UseContextShow from './Components/hooks/UseContext/UseContextShow';
import UseRefShow from './Components/hooks/UseRefShow';
import UseImperativeHandleShow from './Components/hooks/UseImperativeHandle/UseImperativeHandleShow';
import UseReducerShow from './Components/hooks/UseReducerShow';
import UseCallbackShow from './Components/hooks/useCallbackShow';
import UseMemoShow from './Components/hooks/UseMemoShow';
import UseLayoutEffectShow from './Components/hooks/UseLayoutEffectShow';
import UseCustomShow from './Components/hooks/UseCustomShow';
import UseDeferredValueShow from './Components/hooks/UseDeferredValueShow';
import UseTransitionShow from './Components/hooks/UseTransitionShow';
import UseIdShow from './Components/hooks/UseIdShow';
import Init from './Components/patterns/Init';
import { useEffect, useState } from 'react';
import PreHoc from './Components/patterns/PreHoc';
import StateFullLess from './Components/patterns/StatefullLess';

const App = () => {
  const [comments, setComments] = useState([]) 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(setComments)
},[])

  return (
    <div className="App">
<Router>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    alignItems: 'flex-start',
    padding: '20px',
  }}>
<h4>Hooks</h4>
<NavLink to="/useState"> useState </NavLink>
<NavLink to="/useEffect"> useEffect </NavLink>
<NavLink to="/useLayoutEffect"> useLayoutEffect </NavLink>
<NavLink to="/useContext"> useContext </NavLink>
<NavLink to="/useCallback"> useCallback </NavLink>
<NavLink to="/useMemo"> useMemo </NavLink>
<NavLink to="/useRef"> useRef </NavLink>
<NavLink to="/useImperativeHandle"> useImperativeHandle </NavLink>
<NavLink to="/useReducer"> useReducer </NavLink>
<NavLink to="/useCustom"> useCustom, useDebugValue </NavLink>
<h4>React 18 hooks</h4>
<NavLink to="/useDeferredValue"> useDeferredValue </NavLink>
<NavLink to="/useTransition"> useTransition </NavLink>
<NavLink to="/useId"> useId </NavLink>
<h4>Patterns</h4>
<NavLink to="/init"> Initial </NavLink>
<NavLink to="/hoc"> HOC </NavLink>
<NavLink to="/statefulless"> Stateful / Stateless </NavLink>
  </div>
<div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    alignItems: 'center',
  }}>
<Routes>
          <Route exact path="/" element={<Navigate to="/useState" />} />
          <Route
            exact
            path="/useState"
            element={
              <UseStateShow/>
            }
          />
          <Route
            exact
            path="/useEffect"
            element={
              <UseEffectShow/>
            }
          />
             <Route
            exact
            path="/useContext"
            element={
              <UseContextShow/>
            }
          />
           <Route
            exact
            path="/useRef"
            element={
              <UseRefShow/>
            }
          />
          <Route
            exact
            path="/useImperativeHandle"
            element={
              <UseImperativeHandleShow/>
            }
          />
           <Route
            exact
            path="/useReducer"
            element={
              <UseReducerShow/>
            }
          />
            <Route
            exact
            path="/useCallback"
            element={
              <UseCallbackShow/>
            }
          />
            <Route
            exact
            path="/useMemo"
            element={
              <UseMemoShow/>
            }
          />
             <Route
            exact
            path="/useLayoutEffect"
            element={
              <UseLayoutEffectShow/>
            }
          />
               <Route
            exact
            path="/useCustom"
            element={
              <UseCustomShow/>
            }
          />
        
              <Route
            exact
            path="/useDeferredValue"
            element={
              <UseDeferredValueShow/>
            }
          />
               <Route
            exact
            path="/useTransition"
            element={
              <UseTransitionShow/>
            }
          />
              <Route
            exact
            path="/useId"
            element={
              <UseIdShow/>
            }
          />
             <Route
            exact
            path="/init"
            element={
              <Init list={comments}/>
            }
            
          />
              <Route
            exact
            path="/hoc"
            element={
              <PreHoc list={comments}/>
            }
          />
            <Route
            exact
            path="/statefulless"
            element={
              <StateFullLess/>
            }
          />
          
           </Routes> 

</div>
    
</Router>

    </div>
  );
}

export default App;
