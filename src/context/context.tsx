import React from 'react'

export const initData = {
  data: 'data',
  a: 'a',
  p: 'p'
}

export const Context = React.createContext<{ state: any; dispath: React.Dispatch<any> }>({
  state: initData,
  dispath: () => {}
})

export const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'aaa':
      return {
        ...state,
        data: action.data,
        a: action.a
      }
    case 'ppp':
      return {
        ...state,
        data: action.data,
        a: action.a,
        ppp: action.ppp
      }
    default:
      return state
  }
}
export const Provider = ({ value, children }: { value: any; children: any }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Context
