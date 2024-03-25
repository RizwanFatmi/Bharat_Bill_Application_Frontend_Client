
import React, {useEffect} from 'react'
import './Error404.css';
import Error404Photo from '../../assets/Image/Page_Not_Found.png';

const Error404 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      },[]);
    return (
        <div className="error-404-main">
            <div className="error-404-container">
                <div className="error-404 img-fluid">
                    <img src={Error404Photo} alt="" />
                    <p className="error">
                        Page Not Found!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Error404