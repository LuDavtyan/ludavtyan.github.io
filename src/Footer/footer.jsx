import '../Css/footer.css'
import logo2 from '../images/logo2.png'


const Footer = () => {
    return(
        <div>
            <section className="footer">
             <div className="container">
                <div className='footerInfoBox'>
                <div className='footerLogo' >
                 <img  src={logo2} width="150" height="110" />
                </div>

                <div className='footerInfo'>
                    <a href="tel:+37455-80-50-70">   ✆ 055 80 50 70 </a> 
                 </div>
                 <div className='email'>
                    <p> capitalcityllcinfo@gmail.com</p> 
                 </div>
                    
                    
                
                <div className='socialLinks'>
                    <div><i class="fa fa-facebook-f"></i> </div> 
                    <div><i class="fa fa-instagram"></i></div> 
                    <div><i class="fa fa-youtube-play"></i></div> 
                </div>

               
                </div>
                
                   
                               
            </div>
            </section>

        </div>
    )
}

export default Footer