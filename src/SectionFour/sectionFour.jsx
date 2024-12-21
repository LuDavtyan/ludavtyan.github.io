import '../Css/sectionFour.css'
import img2 from '../images/1.jpg'

const SectionFour = () => {
    return(
        <div>
            <section className="section4">
             <div className="container">
             <div className='arabkirBox'>
                      <h4> Քանաքեռ Զեյթուն վարչական շրջան</h4>
                      <div className='hayViewInfo'>
                            <div className='infoBox'>
                                <p className='hayViewTitle'>
                                «DISCOVERY PLAZA» բնակելի համալիրը բաղկացած է 3 մասնաշենքերից </p>
                               <span>  
                                       <p>⚬ Գտնվում է՝ Քանաքեռ Զեյթուն վարչական շրջանում, Ահարոնյան հասցեում </p> 
                                       <p>⚬ Հարկեր՝ 16 հարկ </p> 
                                       <p>⚬ Բնակարանների մակերեսներ՝ 66-173 քմ</p>  
                                       <p>⚬ Շինարարական աշխատանքների ավարտ՝ 2025 թ. դեկտեմբեր</p> 
                                       <p>⚬ Համագործակցող բանկ՝ Ardshinbank</p>
                                        
                                </span>
                                <p className='price'> Սկսած 500․000 դրամ</p>
                                <button className='hayBtn'>Իմանալ ավելին ↗ </button>
                            </div>
 
                          <div className='hayViewImg'> <img  src={img2}  width="520" height="662"/>  </div>

                      </div>
                </div>              
            </div>
            </section>

        </div>
    )
}

export default SectionFour