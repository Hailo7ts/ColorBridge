import { useEffect, useState, useId } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";



const ConvertPage = () => {
  //initialize state to color selected
  const [color, setColor] = useState({
    hex: '',
    label: '',
    name: '',
  });

  //initialize state to brand selected default/initial -> valspar
    const [brand, setBrand] = useState("valspar");

  //initialize state to color type selected default/initial -> hex
    const [colorType, setColorType] = useState("hex");

  //set values of color to input values
  const handleColorChange = e => {
    setColor({ ...color, [e.target.name]: e.target.value });
  };

  //set paint brand
  const handleBrandChange = e => {
    setBrand(e.target.value);

  };

  //set color value type
  const handleColorTypeChange = e => {
    setColorType(e.target.value);

  };

  //function to convert hex to rgb 
  function getRGB(color){
		console.log(color)
	
		/*let hex = color
		let r,
			g,
			b =''
		//check if hex property starts with a '#'
		//if hex starts with '#' start convert
		if(hex.startsWith('#')){
		  //remove '#'
		  hex.replace('#', '')
		  //convert r g and b
		  r = parseInt(hex.substring(0,2), 16)
		  g = parseInt(hex.substring(2,4), 16)
		  b = parseInt(hex.substring(4,6), 16)
		}//else extract r g and b
		else{
		  //slice starts at 4 and ends -2
		  hex = hex.slice(4, -2)
		  //split at the ','
		  hex.split(',')
		  //assign r g and b
		  r = hex[0]
		  g = hex[1]
		  b = hex[2]
		}
		  
		//return converted rgb
		return [r, g, b]*/

		 let r = 0, g = 0, b = 0;

  		// 3 digits
  		if (color.length == 4) {
  		  r = "0x" + color[1] + color[1];
  		  g = "0x" + color[2] + color[2];
  		  b = "0x" + color[3] + color[3];
		
  		// 6 digits
  		} else if (color.length == 7) {
  		  r = "0x" + color[1] + color[2];
  		  g = "0x" + color[3] + color[4];
  		  b = "0x" + color[5] + color[6];
  		}
	
  		return "rgb("+ +r + "," + +g + "," + +b + ")";
	  }
	 

  //convert hex to decimal values
  function hexToDecimal(hex){
    let decimalVal = 0

    decimalVal = parseInt(hex, 16)

    return decimalVal
  }

  //on submit for hex/rgb color value
  const handleSubmit = async e => {
    e.preventDefault();
    
    //fetch brand selected and retrieve paint colors
    let url = `https://jpederson.com/colornerd/json/${brand}.json` 

    fetch(url)
	    .then(response => response.json())
	    .then(data => {
        console.log(data)
        let colorBook = data

        //convert color to be rgb
			color.hex = getRGB(color.colorCode)
			console.log(color)
	
		//search brand array for color
    colorBook.forEach(color =>{
      //console.log(paintColors[0])

      //check if brand uses hex
      if(!color.hex.startsWith('#')){
        console.log(color.hex)
      }else{
        console.log('rbg')
      }
    })
		  


		  //if there's a color match
	
			//return match
	
		  //if there isn't a match find the closest match
	
			//call match conversion function
	
			//return closest match
    
	    })

      .catch(err => console.log(`Error in fetch: ${err}`))
    
   

      
    
	  

  };

  const brandSelectId = useId();
    
    return (  
        <div className="bg-[#203162] min-h-screen"> 		
            
          <div className="hero-content mr-auto ml-auto text-center">
            <div className="max-w-md">
              <h1 className="text-[#abd7ff] text-5xl font-bold">Convert Color</h1>
              <p className="text-[#f8f6f1] py-6">
              Put in your color code and choose your paint brand.
              </p>
            </div>
          </div>
          
        {/* User Form Inputs */}
          <div className="flex justify-evenly">           
            <div className="card lg:card-side w-1/3 shadow-sm justify-center">           
              <div className="card bg-[#a84d69] w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    {/* HEX or RGB */}
                    <label className="label">Color Value Type
                      <select required name="select-color-value-type" defaultValue="hex" onChange={handleColorTypeChange}>
                        <option className="hex" value="hex">HEX</option>
                        <option className="rgb" value="rgb">RGB</option>
                      </select>   
                    </label>             

                    {/* Paint Brands */}
                    <label className="label">Brand Color
                      <select required name="select-brand" defaultValue="valspar" onChange={handleBrandChange}>
                      <option value="avery">avery</option>
                      <option value="behr">behr</option>
                      <option value="benjamin-moore">benjamin-moore</option>
                      <option value="colorhouse">colorhouse</option>
                      <option value="dic">dic</option>
                      <option value="dunn-edwards">dunn-edwards</option>
                      <option value="dutch">dutch</option>
                      <option value="farrow-ball">farrow-ball</option>
                      <option value="hks">hks</option>
                      <option value="hl">hl</option>
                      <option value="ikea">ikea</option>
                      <option value="kilz">kilz</option>
                      <option value="kobra">kobra</option>
                      <option value="mpc">mpc</option>
                      <option value="neenah">neenah</option>
                      <option value="ppg">ppg</option>
                      <option value="ral">ral</option>
                      <option value="sherwin-williams">Sherwin Williams</option>
                      <option value="toyo">toyo</option>
                      <option value="trumatch">trumatch</option>
                      <option value="valspar">Valspar</option>
                      <option value="vista">vista</option>
                      </select>
                    </label>

                    <label className="label">Color Value Type
                      <input type="textarea" name="colorCode" placeholder="color code" className="input input-bordered" onChange={handleColorChange} required />
                    </label>

                    <button type="submit" className="btn btn-warning" >CONVERT</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
             
            
        </div>
    );
};


export default ConvertPage;
