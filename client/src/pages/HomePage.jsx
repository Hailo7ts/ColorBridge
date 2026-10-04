import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {


	return (  
		<div>      		
			
			<div className="hero min-h-screen bg-[#203162] text-[#abd7ff]">
			  <div className="hero-content text-center">
			    <div className="max-w-md">
			      <h1 className="text-5xl font-bold text-[#abd7ff]">PAINT THEORY</h1>
			      <p className="py-6">
			        Turning digital color codes into tintable house paints. A creative application designed to bridge digital artistry with real-world craftsmanship. 
			      </p>
			      <div className="card-actions justify-center">
				  	<Link  to='/convert' className="bg-[#ff9d42] border-[#ff9d42] btn btn-secondary">Convert Color</Link>
				  	{/*<button href="/" className="bg-[#19a28d] border-[#ff9d42] btn btn-secondary">Build a Pallete</button>
				  	<button href="/" className="bg-[#ffc610] border-[#ff9d42] btn btn-secondary">Color Analysis</button>*/}
				  </div>
			    </div>
			  </div>
			</div>
        	  
    	</div>
	);
};


export default HomePage;
