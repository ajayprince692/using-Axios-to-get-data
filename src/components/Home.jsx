import React,{useState,useEffect} from 'react'
import TopBar from './TopBar'
import Cards from '../common/Cards'
import { toast } from 'react-toastify';
import {API_URL} from '../App'
import axios from 'axios';



function Home() {


let [data,setData]=useState([])



const getBlogs=async()=>{
    try {
      let res = await axios.get(API_URL)
      if(res.status===200)
      {
        toast.success('Datas fetched Successfully!')

        setData(res.data.filter(e=>e.status))
      }
    } catch (error) {
        toast.error()
    }
  }

  useEffect(()=>{
    getBlogs()
  },[])



  return <div className='container-fluid'>
    <TopBar/>
    <div className='preview'>
    {
     data.map((e)=>{
        return <Cards name={e.name} username={e.username} email={e.email} address={e.address} phone={e.phone} website={e.website} company={e.company} key={e.id}/>
      })
    }
    </div>
   
  
 
    </div>


}

export default Home