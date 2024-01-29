import React from 'react'
import {Alert} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice';

export const Notification = ({type, message}) => {

    const dispatch = useDispatch();
    const open = useSelector(state=>state.ui.notification.open);

    const handleClose=()=>{
        dispatch(uiActions.showNotification({
            open: false,
        }))
    }

  return (
    <div>
        { open && <Alert onClose={handleClose} severity={type}>{message}</Alert> }
    </div>
  )
}
