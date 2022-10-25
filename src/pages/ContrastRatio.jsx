import { useState } from 'react';
import '../stylesheets/styleContrast/contrastRatio.css';

export default function contrastRatio() {
    
    //Calculando la luminancia relativa 
    function luminance(r, g, b) {
        var a = [r, g, b].map(function(v) {
          v /= 255;
          return v <= 0.03928 ?
            v / 12.92 :
            Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
      }
    
    //Calculando el contraste entre dos colores RGB
    function contrast(rgb1, rgb2) {
        var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
        var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
        var brightest = Math.max(lum1, lum2);
        var darkest = Math.min(lum1, lum2);
        return (brightest + 0.05) /
          (darkest + 0.05);
    };

    //Convertir de HEX a RGB
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
         ] : null;
    }

    const [color1, setColor1]= useState('#ffffff')
    const [color2, setColor2]= useState('#00EFD8')
    
    const col1 = hexToRgb(color1);
    const col2 = hexToRgb(color2);
    
    const contraste = contrast(col1, col2);
    const numString = String(contraste);

    
    function calculatePoint(num) {
        if (num[1] == '.'){
            return num.slice(0, 4);
        } else if (num[2] == '.'){
            return num.slice(0, 5);
        } else {
            return num;
        };
    };

    function levelAA() {
        if(calculatePoint(numString) >= '4.5'){
            return 'Pass';
        } else if (calculatePoint(numString) >= '10.00'){
            return 'Pass';
        } else {
            return 'Fail'
        }
    }
    
    // const [name, setName] = useState("");
    return (
      <div className="general-color" style={{ 
        // background: color2,
      }}>

        
    <div className="container-color-contrast">
    
       

        <div className="color-contrast-section-uno">
          
          <div className="input-color-uno">
              <h1>Texto</h1>
              <h2>{color1}</h2>   

              <input type="color" onChange={(e)=>setColor1(e.target.value)} />
          </div>
          
          <div className="input-color-dos" style={{
            // background: color2,
          }}>
              <h1>Fondo</h1>
              <h2>{color2}</h2>
              <input type="color" onChange={(e)=>setColor2(e.target.value)}/>
          </div>
          
          <div>
              <h2>{calculatePoint(numString)}</h2>
              <h2>{levelAA()}</h2>
          </div>

        </div>
        

        <div className="color-contrast-section-two" >
          <div className="fondo" style={{
            background: color2, 
          }}>

            <div className="text-big">
              <h1 style={{
                color: color1,
                fontSize: 100,
              }}>ABCDE
              </h1>
              <h1 style={{
                color: color1,
                fontSize: 50,
              }}>
                abcdefghijklm
              </h1>
            </div>

            <div className="text-normal">
              <h3 style={{
                color: color1,
                fontSize: 16,
              }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio velit veritatis recusandae possimus iure eum voluptate pariatur! Impedit tempore temporibus ex, expedita aperiam fuga harum doloremque pariatur facere eius saepe, dolores eum odit laboriosam, veritatis nam repellat cumque?
              </h3>
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}
