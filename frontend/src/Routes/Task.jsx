import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreateTask } from '../Components/CreateTask';
import { Navbar } from '../Components/Navbar';

export const Task = () => {
    // const {isAuth } = useSelector(s=>s.auth)
    // const navigate = useNavigate()
    // useEffect(() => {
    //   if (!isAuth) navigate("/");
    // }, [isAuth, navigate]);
  return (
    <div>
        <Navbar/>
        <CreateTask/>
    </div>
  )
}
