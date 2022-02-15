import react, { useContext, useState } from 'react'
import { isEmpty } from 'lodash'
import moment from 'moment'
import { Provider as DataProvider, Context as DatainitData } from '../context/context'
import Heade from './heade'
const Home: React.FunctionComponent = () => {
  const { state: dataStrate } = useContext(DatainitData)
  const arr: Array<number> = []
  console.log(isEmpty(arr))
  console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
  const handlerClick = () => {
    Object.assign(dataStrate, { data: 'bbbbb' })
    // const li = { data: 'ppppp', ppp: 'p???' }
    console.log('第一个页面修改的值：', dataStrate)

    // datadispath({ type: 'aaa', a: 'aaaa' })
  }
  return (
    <>
      home
      {moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}
      {dataStrate.data}
      <div onClick={handlerClick}>
        <button>点点</button>{' '}
      </div>
      <Heade dataStrateList={dataStrate} />
    </>
  )
}
export default Home
