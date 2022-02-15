import React, { useContext, useEffect, useReducer, useState, useRef } from 'react'
import { isEmpty } from 'lodash'
import moment from 'moment'
import {
  Provider as DataProvider,
  Context as DatainitData,
  Reducer as DataReducer,
  initData
} from '../context/context'
import Content from './content'

interface HeadeProps {
  dataStrateList: any
}

const Heade: React.FC<HeadeProps> = ({ dataStrateList }) => {
  const [dataReducer, dataReducerdispath] = useReducer(DataReducer, initData)
  const arr: Array<number> = []
  const inputRef = useRef(null)
  console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
  const [state, setState] = useState({ a: 'aaaa' })
  console.log(state)

  // Object.assign(dataStrateList, { data: 'ppppp', ppp: 'p??1111?' })
  const JsonValue = (data: any) => {
    const result = data
    return JSON.parse(JSON.stringify(result))
  }
  const handlerBlur = () => {
    inputRef.current && inputRef.current.blur()
  }
  const handlerFocus = () => {
    inputRef.current && inputRef.current.focus()
  }
  const handlerClick = () => {
    const li = { data: 'ppppp', ppp: 'p???' }
    dataReducerdispath({ type: 'ppp', data: 'ppppp', ppp: 'p???', a: '1' })
    let value = JsonValue(state)
    // console.log(value)
    setState({ a: 'bbbbb' })
    console.log(state)
  }
  return (
    <>
      heade
      {moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}
      {dataReducer.data}
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handlerBlur}>失去input焦点</button>
        <button onClick={handlerFocus}>获取input焦点</button>
        <button onClick={handlerClick}>点击</button>
      </div>
      <Content headeRef={inputRef} list={dataReducer} />
    </>
  )
}
export default Heade
