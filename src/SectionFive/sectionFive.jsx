import '../Css/sectionFive.css'
import babayan from '../images/babayan.jpg'


const SectionFive = () => {
    return(
        <div>
            <section className="section5">
             <div className="container"> 

                <div className='babayanBox'>
                    
                    <div className='babayanImg'>
                         <h4>  Արաբկիր վարչական շրջան</h4>
                         <img  src={babayan} width="420" height="490" />
                    </div>

                    <div className='babayanInfo'>
                    <h5> MONUMENT 21 </h5>
                       <p className='dicriptionBabayan'> Նոր սերնդի բնակարաններ՝ հարմարավետության և որակի համադրություն: Բացահայտեք ձեր երազանքների բնակարանը Hay Develop-ի հետ </p>
                     <span>
                       <p className=''>⚬ Ժամանակակից դիզայն </p>
                       <p className=''> ⚬ Բարձր որակ </p>
                       <p className=''> ⚬ Անվտանգ և հարմարավետ միջավայր</p>
                     </span>
                      

                       <p className='babayanEnd'> Շինարարական աշխատանքների ավարտ՝ 2025 թ. 2-րդ կիսամյակ</p> 
                       <p className='babayanPrice'> Սկսած 2․300$</p>

                       <button className='babayanBtn'>Իմանալ ավելին ↗ </button>

                    </div>
                    

                </div>

             </div>
            </section>

        </div>
    )
}

export default SectionFive