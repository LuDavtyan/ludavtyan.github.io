import '../Css/sectionTwo.css';
import {AvanProjects} from '../Avan/avanProjects'
import hayView from '../images/hayView.jpg'

const SectionTwo = () => {
    return(
        <div>
            <section className="section2">
             <div className="container">
               
                <div className='title'> 
                    <h2> Մեր նախագծերը</h2>
                    <h4> Ավան վարչական շրջան</h4>
                </div>


                <div className='projectsAvan'>

         {
                     AvanProjects.map((item) => (
                           <div key={AvanProjects.id} className='boxAvan' >
                              <div className='imgAvan'>  <img  src={item.avatar}  width="350" height="400"  />  </div>   
                              
                                <div className='avatarname'>
                                     <p className='name'>{item.name}</p>
                                     <span> {item.description}</span>  
                                     <h1 className='square'>{item.square} </h1>
                                     <p className='end'>{item.end} </p>

                                </div>

                                <div>
                                    <button className='avanBtn'>Իմանալ ավելին ↗ </button>
                                </div>
           
                            </div>
                   ) )
         } 
                </div>


                <div className='arabkirBox'>
                      <h4> Արաբկիր վարչական շրջան</h4>

                      <div className='hayViewInfo'>
                            <div className='infoBox'>
                                <p className='hayViewTitle'>
                                «Hay View» բնակելի համալիրը բաղկացած է 2 մասնաշենքերից </p>
                                
                              
                               <span>  
                                       <p>⚬ Գտնվում է՝ Արաբկիր վարչական շրջանում, Հ. Էմին 1 նրբանցք հասցեում </p> 
                                       <p>⚬ Հարկեր՝ 17 հարկ </p> 
                                       <p>⚬ Բնակարանների մակերեսներ՝ 56-98 քմ</p>  
                                       <p>⚬ Շինարարական աշխատանքների ավարտ՝ 2027 թ. դեկտեմբեր</p> 
                                       <p>⚬ Համագործակցող բանկ՝ Amerianank</p>
                                        
                                </span>

                                <p className='price'> Սկսած 500․000 դրամ</p>

                                <button className='hayBtn'>Իմանալ ավելին ↗ </button>
                            </div>
                            
                            
                          <div className='hayViewImg'> <img  src={hayView}  width="488" height="662"/>  </div>

                      </div>


                </div>
               
            </div>
            </section>

        </div>
    )
}

export default SectionTwo