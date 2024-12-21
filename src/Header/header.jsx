import '../Css/header.css'

import logo from '../images/Logo.png'
const Header = () => {
    return(
        <div>
            <section className='section'>
                <div className="container">
                    <div className='header'>
                        <div className='logo'>
                            <img  src={logo} alt='logo.img' width="150" height="110"  />
                        </div >
                        <div className='menu'>
                            <nav >
                                <ul>
                                    <li> <a href=''> Գլխավոր</a> </li>
                                    <li> <a href=''> Մեր նախագծերը </a> </li>
                                    <li> <a href=''> Հետադարձ կապ </a> </li>
                                    
                                 </ul>
                            </nav>
                        </div>
                            
                        <div>
                            <div className='tel'> <a href="tel:+37455-80-50-70">   ✆ 055 80 50 70 </a>  </div>
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header



{/*<div>
                           
                         </div>*/}