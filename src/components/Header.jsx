import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-black p-4'>
        <img onClick={()=>navigate("/")} style={{maxWidth:"100px", cursor:"pointer"}} src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'/>
      
    </div>
  )
}

export default Header;
