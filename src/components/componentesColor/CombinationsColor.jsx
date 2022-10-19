import '../../stylesheets/styleComponentColor/combinationsColor.css';
import check from '../../img/check.svg';
import next from '../../img/next.svg';

export default function CombinationsColor(props) {
  return (
    <div className="combinations-color">
        <div className="combination-colors">

            
            <div className="combination-1" style={{
                background: props.backgroundUno
            }}>
                <h3>A</h3>
                <p>Curabitur tempus </p>
            </div>
            
            
            <div className="combination-2" style={{
                background: props.backgroundDos
            }}>
                <h3>A</h3>
                <p>Curabitur tempus </p>
            </div>


        </div>
        <div className="icons-combination">
            <img src={next} />
            <img src={check} />
        </div>
    </div>
  )
}
