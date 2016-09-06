var React =require('react');

var About = (props) => {
  return(
    <div>
         <h1 className="text-center page-title">About</h1>
         <p>This is a weather application build on React.I have build
         this for the complete React Developer course</p>
       <p>Here are the some of the tools I Have used</p>
         <ul>
           <li>
               <a href="https://facebook.github.io/react">React</a> -This was the javascript framework used
           </li>
           <li>
            <a href="https://openweathermap.org">Open Weather Map</a> -I have used this to get weather data
           </li>

         </ul>
    </div>
  )
};

module.exports=About;
