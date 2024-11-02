import React from 'react'
import { CiDark } from "react-icons/ci"
import { MdDarkMode } from "react-icons/md";

import { useStateValue } from '../../../stores'
import { CHANGE_THEAME_MODE } from '../../../constants';

const Header: React.FC = () => {
    const [state, dispatch] = useStateValue() as any

    const changeMode = () => {
        const { mode } = state.theamMode
        if (mode === 'dark') {
            document.body.classList.remove(mode)
            dispatch({
                types: CHANGE_THEAME_MODE,
                payload: { mode: '' }
            })
        } else {
            document.body.classList.add('dark')
            dispatch({
                types: CHANGE_THEAME_MODE,
                payload: { mode: 'dark' }
            })
        }
    }
    return (
        <header className='header dark:bg-black'>
            <button onClick={changeMode}>
                <CiDark className='hidden dark:inline dark:text-white' size={25} />
                <MdDarkMode className='dark:hidden' size={25} />
            </button>
        </header>
    )
}

export default Header