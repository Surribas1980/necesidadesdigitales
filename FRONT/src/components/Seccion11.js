import '../css/Seccion11.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUniversity,faComment,faHeadSideVirus} from '@fortawesome/free-solid-svg-icons';
function Seccion11() {

    return(<>
    
    <div className="colorseccion1">
        <section className="seccion1">
           
            <div>

            Lorem ipsum dolor sit amet, ea eum labitur scsstie percipitoleat fabulas complectitur deterruisset at pro. Odio quaeque reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie percipit an. Falli volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto at mea. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et jority have suffered alteration.

Odio quaeque reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie percipit an. Falli volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto at mea. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et amet vidisse mentitumsstie percipitoleat fabulas. 
            </div>
        </section>
        <div className="seccion2">
            <div className="icono"><FontAwesomeIcon icon={faHeadSideVirus}></FontAwesomeIcon><FontAwesomeIcon icon={faComment}></FontAwesomeIcon></div>
        <div>

        Podrás interactuar con otras personas
        </div>
        </div>
        <div className="seccion3">
            <div className="icono"><FontAwesomeIcon icon={faUniversity}></FontAwesomeIcon></div>
        
        <div>
        Deja que otros te ayuden con sus habilidades
        </div>
        </div>
    </div>
    </>);


}
export default Seccion11;
