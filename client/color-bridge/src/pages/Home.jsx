import { Link } from "react-router-dom";

function HomePage() {
  return (  
		<div>      		
			
			<div className="hero bg-base-200 min-h-screen bg-[#203162] text-[#abd7ff]">
			  <div className="hero-content text-center sm:text-left">
			    <div className="max-w-md">
			      <h1 className="text-5xl font-bold text-[#abd7ff]">PAINT THEORY</h1>
			      <p className="py-6">
			        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
			        quasi. In deleniti eaque aut repudiandae et a id nisi.
			      </p>
			      <div className="card-actions justify-center">
				  	{/*<Link  to='/' className="bg-[#ff9d42] border-[#ff9d42] btn btn-secondary">Convert Color</Link>*/}
					<button href="/" className="text-black bg-[#ff9d42] border-[#ff9d42] btn btn-secondary">Convert Color</button>
				  	{/*<button href="/" className="bg-[#19a28d] border-[#ff9d42] btn btn-secondary">Build a Pallete</button>
				  	<button href="/" className="bg-[#ffc610] border-[#ff9d42] btn btn-secondary">Color Analysis</button>*/}
				  </div>
			    </div>
			  </div>
			</div>
    
    	
        	{/*<div class="hero bg-base-200 min-h-screen">
        	    <div class="hero-content flex-col lg:flex-row-reverse">
        	        <img
        	          src="../images/info-main.png"
        	          class="max-w-sm rounded-lg shadow-2xl" />
        	        <div>
        	            <h1 class="text-5xl font-bold">INTRODUCTION</h1>
        	            <p class="py-6">
        	              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        	              quasi. In deleniti eaque aut repudiandae et a id nisi.
        	            </p>                    
        	        </div>
        	    </div>
        	</div>   */}   
    	</div>
	);
}

export default HomePage;

