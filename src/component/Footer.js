import './Foot.css';
import {IoLocationSharp} from 'react-icons/io'
//  import logo from '../assets/'
// import locat from '../assets/location.png'
function Foot() {
    return (
        <div>
        <div className='foot'>
            <div className='foot-panel1'>
           
                <div className='address'>
                <div className='pick'> 
            
                </div>
            <p class="loc" >Find Us</p>
          
                <p class="location">
                     Pandu Nagar, Modal Town, Kanpur-208005
                </p>
   
                </div>
                <div className='address'>
              
            <p class="loc" >Contact Us</p>
          
                <p class="location">
                    6388372193
                </p>
   
                </div>
                <div className='address'>
              
              <p class="loc" >Mail Us</p>
            
                  <p class="location">
                    ntechzy@gmail.com
                  </p>
     
                  </div>
            </div>
            <hr className='line'></hr>
           
              <div className='foot-panel2'>
              <div className='s'>
              <div className='col1'>
               <div class="logo" >
              {/* <img  src={logo} alt=''></img> */}
              </div>
             <p>At Ntechzy we aim high to provide effective and flexible training programs on IT solutions to help empower your career. </p>
            </div>
            <div className='col2'>
                <div className='services'>
                <p>Our Services </p>
                
                </div>

                <div className='servicetypes'>
                    <ul  className='types'>
                        <p>Freelancing</p>
                        <p>ERP Services</p>
                        <p>App Development</p>
                        <p>Web Development</p>
                        
                        </ul>
                        
                 
                </div>

                </div>
                <div className='col3'>
                <div className='servicetypes'>
                    <ul  className='types2'>
                        <p>Funnel Marketing</p>
                        <p>Digital Marketing</p>
                        <p>Political Campaigning</p>
                        <p>College Branding</p>
                        </ul>
                        
                 </div>
                </div>
                </div>
    
        <div className='col4'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3571.336303754937!2d80.30391559922789!3d26.477114583732565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39cd2394ab3d%3A0x86e54e5902e3adcc!2sCareerkick%20Services%20Kanpur%20%7C%20Best%20IIT-JEE%20%26%20NEET%20Counselling%20Platform!5e0!3m2!1sen!2sin!4v1691587575735!5m2!1sen!2sin" width="400" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map_contact'></iframe>                
                </div>
        </div>
        </div>
      
        <div className='foot-panel3'> 
        <div className='part1'>
            Copyright 2018,All Rights Reserved
        </div>
        <div className='part2'>
            Home
            </div>
            <div className='part2'>
       Terms
            </div>
            <div className='part2'>
          Privacy
            </div>
            <div className='part2'>
         Policy
            </div>
            <div className='part2'>
       Contact
            </div>
        </div>
        </div>
    )
};
export default Foot;