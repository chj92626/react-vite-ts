import React, { useContext, useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import moment from 'moment'
import { Provider as DataProvider, Context as DatainitData } from '../context/context'

interface ContentProps {
  list: any
  headeRef: any
}

const Content: React.FC<ContentProps> = ({ list, headeRef }) => {
  const { state: dataStrate, dispath: dispathdata } = useContext(DatainitData)
  // const [inData] = useState('bbbbb')

  const arr: Array<number> = []
  console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
  console.log('context取得值：', dataStrate)
  console.log('组件传的值：', list)
  console.log('组件传的headeRef值：', headeRef)
  // Object.assign(list, { data: 'llll' })
  // console.log(list)
  // useEffect(() => {
  //   dispathdata({ type: 'ppp', list })
  // })
  // console.log(dataStrate)
  const headerRef = () => {
    headeRef.current && headeRef.current.focus()
  }
  return (
    <>
      Content
      {isEmpty(arr) && 1}
      {moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}
      {list.data}
      <button onClick={headerRef}>获取父级ref</button>
    </>
  )
}
export default Content
