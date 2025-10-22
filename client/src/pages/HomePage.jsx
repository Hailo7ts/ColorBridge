import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	/*const { fetchProducts, products } = useProductStore();

	
		fetchProducts();
	}, [fetchProducts]);
	console.log("products", products);*/



	return (  
		<div>      		
			
			<div className="hero bg-base-200 min-h-screen bg-[#203162] text-[#abd7ff]">
			  <div className="hero-content text-center">
			    <div className="max-w-md">
			      <h1 className="text-5xl font-bold text-[#abd7ff]">PAINT THEORY</h1>
			      <p className="py-6">
			        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
			        quasi. In deleniti eaque aut repudiandae et a id nisi.
			      </p>
			      <div className="card-actions justify-center">
				  	<Link  to='/convert' className="bg-[#ff9d42] border-[#ff9d42] btn btn-secondary">Convert Color</Link>
				  	<button href="/" className="bg-[#19a28d] border-[#ff9d42] btn btn-secondary">Build a Pallete</button>
				  	<button href="/" className="bg-[#ffc610] border-[#ff9d42] btn btn-secondary">Color Analysis</button>
				  </div>
			    </div>
			  </div>
			</div>
    
    	
        	<div class="hero bg-base-200 min-h-screen">
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
        	</div>      
    	</div>
	);
};

/*
{products.map((post) => (            
            
        <div className="card bg-base-100 w-1/5 h-[32rem] shadow-xl duration-500 hover:scale-105 hover:bg-[#8c7768] overflow-hidden" key={post._id}>
            
          <Link to={`/${post._id}`} className=''>
            <img
              src={post.image} 
              alt={post.title} 
              className=" w-full h-4/5 object-cover"
            />
              
            <div className="card-body h-full">

              <h2 className="card-title">{post.title}</h2>

              <div className='justify-items-end justify-end'>
                <h4>{post.author}</h4>
                <h3>{post.stars}</h3>
              </div>



            </div>
          </Link>
        </div>
            
      ))}
*/
export default HomePage;
