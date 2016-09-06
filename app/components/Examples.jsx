var React =require('react');
var {Link}=require('react-router');

var Example = (props) => {
  return(
    <div>
         <h1 className="text-center">Example Component!</h1>
         <p>Here are a few example location to try out:</p>
         <ol>
           <li>
               <Link to='/?location=Bangalore'>Bangalore,BNGLR</Link>
           </li>
           <li>
              <Link to='/?location=Guwahati'>Guwahati,GHY</Link>
           </li>

         </ol>
    </div>

  )
};

module.exports=Example;
