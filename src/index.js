import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
import { Memorize } from './components/06-memos/Memorize';
import { MemoHook } from './components/06-memos/MemoHook';
import { CallBackHooks } from './components/06-memos/CallBackHooks';
import { ParentMemo } from './components/07-homework-memo/ParentMemo';


ReactDOM.render(
  <>
    <CounterApp/>
    <hr className='mb-3'/>
    <CounterWithCustomHook/>
    <hr className='mb-3'/>
    <SimpleForm/>
    <hr className='mb-3'/>
    <FormWithCustomHook/>
    <hr className='mb-3'/>
    <MultipleCustomHooks/>
    <hr className='mb-3'/>
    <FocusScreen/>
    <hr className='mb-3'/>
    <LayoutEffect/>
    <hr className='mb-3'/>
    <Memorize/>
    <hr className='mb-3'/>
    <MemoHook/>
    <hr className='mb-3'/>
    <CallBackHooks/>
    <hr className='mb-3'/>
    <ParentMemo/>
    <hr className='mb-3'/>
  </>,
  document.getElementById('root')
);
