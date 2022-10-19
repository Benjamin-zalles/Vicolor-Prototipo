import '../stylesheets/styleChecker/checker.css';
import { useState } from 'react'

export default function Checker() {

  const [hex, setHex] = useState('#e9ec59');
  const [hex2, setHex2] = useState('#5ee1f5');
  const [hex3, setHex3] = useState('#f69fda');
  const [hex4, setHex4] = useState('#ffffff');
 
  const randomizedHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor4 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
    setHex2(randomColor2);
    setHex3(randomColor3);
    setHex4(randomColor4);
  }
  

  
  
 
  return (
    <div className="checker-container-principal">


      <div className="content-primary">
        
        <h1>Consulta de Colores</h1>
        
        <div className="content-options">
          <button onClick={randomizedHex}>Random</button>
        </div>

        <div className="content-input-color">
            <div className="input-color">
              <div className="color-container">
                <input type="color" value={hex} onChange={(e)=>setHex(e.target.value)}/>
              </div>
              <input type="text" value={hex} />
            </div>

            <div className="input-color">
              <div className="color-container">
                <input type="color" value={hex2} onChange={(e)=>setHex2(e.target.value)}/>
              </div>
              <input type="text" value={hex2}/>
            </div>

            <div className="input-color">

              <div className="color-container">
                <input type="color" value={hex3} onChange={(e)=>setHex3(e.target.value)}/>
              </div>
              <input type="text" value={hex3}/>
            </div>
            
            <div className="input-color">
              <div className="color-container">
                <input type="color" value={hex4} onChange={(e)=>setHex4(e.target.value)}/>
              </div>
              <input type="text" value={hex4}/>
            </div>
        </div>
      </div>
      
      
      <div className="content-secundary">
        <div className="boxs-colors" style={{
          background: hex,
        }}>
          <h2>{hex}</h2>
        </div>
        <div className="boxs-colors" style={{
          background: hex2,
        }}>
          <h2>{hex2}</h2>
        </div>
        <div className="boxs-colors" style={{
          background: hex3,
        }}>
          <h2>{hex3}</h2>
        </div>
        <div className="boxs-colors" style={{
          background: hex4,
        }}>
          <h2>{hex4}</h2>
        </div>
      </div>
    </div>
  )
}
