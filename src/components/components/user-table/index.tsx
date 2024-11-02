import React from 'react'
import { USER_DISPLAY_TYPES } from '../../../types'

type Props = {
    data: USER_DISPLAY_TYPES[]
}

const UserTable: React.FC<Props> = ({ data }) => {
    const showMore = (id:number) => {
        const elem = document.getElementById(`record-${id}`)
        const btnElem = document.querySelector(`#record-${id} button`)
        if(elem && btnElem) {
            if (elem.classList.contains("open")) {
                elem.classList.remove("open");
                btnElem.innerHTML = "Hide"
              } else {
                elem.classList.add("open");
                btnElem.innerHTML = "Show more"
              }
        }
    }
   return (
        <table className='w-full border-collapse border border-slate-400 dark:text-white'>
            <caption className='caption-top uppercase p-3'><strong>User Details</strong></caption>
            <thead className='bg-sky-200 dark:bg-sky-600'>
                <th className='border-style'>ID</th>
                <th className='border-style'>Name</th>
                <th className='border-style'>Email</th>
                <th className='border-style'>Company Name</th>
                <th className='border-style'>Address</th>
                <th className='border-style'>Phone</th>
                <th className='border-style'>Action</th>
            </thead>
            <tbody className='dark:bg-sky-400'>
                {data.length > 0 ? data.map((items: USER_DISPLAY_TYPES) => <tr key={items.email} id={`record-${items.id}`} className='group open'>
                    <td className='border-style w-[50px]'>{items.id}</td>
                    <td className='border-style'>{items.name}</td>
                    <td className='border-style'>{items.email}</td>
                    <td className='border-style'>{items.company}</td>
                    <td className='border-style group-open:opacity-0'>{items.address}</td>
                    <td className='border-style  group-open:opacity-0'>{items.phone}</td>
                    <td className='border-style w-[100px]'><button className='button rounded-lg shadow-xl bg-sky-900 text-white p-2' onClick={() => showMore(items.id)}>Show more</button></td>
                </tr>) : (
                    <tr>
                        <td>No record found</td>
                    </tr>
                )}
            </tbody>

        </table>
    )
}

export default UserTable