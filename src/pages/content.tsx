import React, { useContext, useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import moment from 'moment'
import { Provider as DataProvider, Context as DatainitData } from '../context/context'
import { Input } from 'antd'

import sqlFormatter from 'sql-formatter'

interface ContentProps {
  list: any
  headeRef: any
}
const { TextArea } = Input
const Content: React.FC<ContentProps> = ({ list, headeRef }) => {
  const { state: dataStrate, dispath: dispathdata } = useContext(DatainitData)
  // const [inData] = useState('bbbbb')
  const partyId = 12333333333
  const dta = `select p.id pId, p.cds_num pCdsNum, p.cif_num pCifNum, b2.clentCif,p.name, b2.clentName, a1.prjCode
  from (
           select temp.partyId, group_concat(distinct prjCode) prjCode
           from (select pledge_party_id partyId, group_concat(distinct prj_code) prjCode
                 from pm_pledge p
                          inner join pm_project_guarantee_item g
                                     on p.guarantee_item_id = g.id and p.pledge_party_id in ${partyId}
                 group by pledge_party_id
  
                 union all
                 select pledge_register_care_id partyId, group_concat(distinct prj_code) prjCode
                 from pm_pledge p
                          inner join pm_project_guarantee_item g on p.guarantee_item_id = g.id and
                                                                    pledge_register_care_id in ${partyId}
                 group by pledge_register_care_id
  
                 union all
                 select target_party_id partyId, group_concat(distinct prj_code) prjCode
                 from pm_private_equity_firm p
                          inner join pm_basic_asset b on p.basic_asset_id = b.id
                 where p.sts = 'A'
                   and target_party_id in ${partyId}
                 group by target_party_id
  
  
                 union all
                 select party_id partyId, group_concat(distinct b.code) prjCode
                 from prj_party_relation p
                          inner join pm_project b on p.prj_id = b.id
                 where p.sts = 'A'
                   and p.party_id in ${partyId}
                 group by party_id
  
  
                 union all
                 select issuer_id partyId, group_concat(distinct p.prj_code) prjCode
                 from pm_approve_ext_info p
                 where p.sts = 'A'
                   and p.issuer_id in ${partyId}
                 group by issuer_id
  
  
                 union all
                 select head_quarter partyId, group_concat(distinct p.grtcdt_apply_cod) prjCode
                 from dcd_grtcdt_rate_drw p
                 where p.sts = 'A'
                   and p.head_quarter in ${partyId}
                 group by head_quarter
  
  
                 union all
                 select counter_party_id partyId, group_concat(distinct prj_code) prjCode
                 from pm_buy_back_asset p
                          inner join pm_basic_asset b on p.basic_asset_id = b.id
                 where p.sts = 'A'
                   and counter_party_id in ${partyId}
                 group by counter_party_id
  `
  const sqlvalue = sqlFormatter.format(dta)
  // console.log(sqlvalue)
  const oldValue = 'SELECT * FROM users'
  // const sqlvalue = sqlFormatter.format(oldValue)
  console.log('sqlvalue:', sqlvalue)
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
      <TextArea rows={10} value={sqlvalue}></TextArea>
    </>
  )
}
export default Content
