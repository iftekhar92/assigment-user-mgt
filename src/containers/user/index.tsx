import React, { useCallback, useEffect, useState } from 'react'
import { UPDATE_USER_LIST } from '../../constants'

import { useStateValue } from '../../stores'
import UserTable from '../../components/components/user-table'
import { USER_TYPES } from '../../types'

const UserList: React.FC = () => {
    const [state, dispatch] = useStateValue() as any
    const [severity, setSeverity] = useState("")
    const [message, setMessage] = useState("")

    const fetchUserData = useCallback(async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const result = (await response.json()) as USER_TYPES[]
            if (result.length > 0) {
                const prepData = result.reduce((acc: any, item: USER_TYPES) => {
                    const { address, company, email, id, name, phone } = item;
                    const fullAddress = `${address.city} ${address.street}, ${address.suite}, - ${address.zipcode}`
                    acc.push({ id, name, email, company: company.name, address: fullAddress, phone })
                    return acc;
                }, [])
                dispatch({
                    types: UPDATE_USER_LIST,
                    payload: prepData
                })
                setSeverity("")
                setMessage("")
            } else {
                setSeverity("error")
                setMessage("Something went wrong")
            }
        } catch (error: any) {
            let errorMessage = "Something went wrong";
            if (error?.message) {
                errorMessage = error.message
            }
            setSeverity("error")
            setMessage(errorMessage)
        }
    }, [dispatch])

    useEffect(() => {
        fetchUserData()
    }, [fetchUserData])

    return (
        <div>
            {severity && message && <div className="text-red-500 rounded-lg bordder">{message}</div>}
            <UserTable
                data={state.userList}
            />
        </div>
    )
}

export default UserList