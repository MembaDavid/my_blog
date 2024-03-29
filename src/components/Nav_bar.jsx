import React, { useState, useEffect } from 'react'
import Link1 from './Minor_components/Link1'
import Link2 from './Minor_components/Link2'
import Link4 from './Minor_components/Link4';
import Link3 from './Minor_components/Link3';

function Nav_bar(props) {
  const[mobile, setMobile] = useState(false);	  
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}	 
		if (getScreenSize()< 500) {
		  setMobile(true);
		}   
	   }, []); 

  var check = props.toggle;
  const custom1 = {
    background: "#052252",
    width:mobile?"65%":"85%",
    height:mobile?"85vh":"100vh",
    position: "fixed",
    top: "0",
    right: check?"0":"-100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
		flexDirection: "column",
		color: "white",
		transition: "1350ms",
		zIndex: "999",
    padding: "40px",
    overflowY:mobile?"auto":"",

  }
  const custom2 = {
    display: "flex",
    flexDirection:mobile?"column":"",
    width: "100%",
    flexGrow: "3",
    gap: mobile? "20px":"",


  }
  const custom3 = {
    display: "flex",
    flexDirection: "column",
    color: "white",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: "1",
    gap: mobile?"13px":"",

  }
  const custom4 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: "1",
    gap:mobile?"10px":'20px',
   
  }
  const logo_container ={
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",

  }
  const logo = {
    width:mobile?"50px":"70px",
    height:mobile?"50px":"70px",
    
  }
  const custom5 = {
    display: "flex",
    flexDirection:mobile?"column":"",
    flexGrow: "2",
    gap:mobile?"30px":"50px",
    
  }
  const custom6 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: "1",    
  }
  const sub_header = {
    fontFamily:"\"noto sans\", helvetica, arial, sans-serif",
    fontSize: "15px",
  }

  const para = {
      fontFamily:"\"noto serif\", Georgia, Times, \"times new roman\",serif",
      fontSize: "16px",
  }
  const custom7 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: "1",
    gap: "10px",

    
  }
  var color = "#fff";
  return (
    <div style={custom1}>
      <div style={custom2}>
        <div style={custom3}>
            <Link2 title="Home" 
            test={false} 
            link_color = {color}

            />
            <Link3 title="About Us" 
            test={true}             
            link_color = {color}

            />
            <Link3 title="Beliefs" 
            test={true} 
            link_color = {color}

            />
            <Link3 title="Resources" 
            test={true} 
            link_color = {color}

            />
            <Link3 title="Downloads" 
            test={true} 
            link_color = {color}

            />
            <Link2 title="Announcements" 
            test={false} 
            link_color = {color}

            />
            <Link2 title="Contact Us" 
            test={false} 
            link_color = {color}

            />
            {mobile?"":<img src='Images/sdaw.svg' style={logo}/>}
          </div>	 
          <div style={custom4}>
            <Link1 title="GIVING" link_color = {color}/>
            <Link1 title="PRAYER REQUEST" link_color = {color}/>
            <Link1 title="ANNOUNCEMENTS" link_color = {color}/>
            {mobile?<img src='Images/sdaw.svg' style={logo}/>:""}
          </div>
      </div> 
      
      <div style={custom5}>
          <div style={custom6}>
            <p style={para}>maasaimarauniversitysda.or.ke is the official 
            website of the Seventh-Day Adventist
            church Maasai Mara University.</p>
            <p style={para}>Seventh-day Adventists are devoted to helping 
            people understand the Bible to find
            freedom, healing, and hope in Jesus.</p>
          </div>
          <div style={custom7}>
            <h2 style={sub_header}>LEARN MORE:</h2>
            <Link4 title="Adventist.org" 
                    test={false} 
                    link_color = {color}
                    s="https://www.adventist.org/"
              />
            <Link4 title="ADRA" 
                    test={false} 
                    link_color = {color}
                    s="https://adra.org/"
                  />
            <Link4 title="Adventist World Radio" 
                    test={false} 
                    link_color = {color}
                    s="https://awr.org/"
                    />
            <Link4 title="Hope Channel" 
                    test={false} 
                    link_color = {color}
                    s="https://hopetv.org/"
                    />
          </div>
      </div>
    </div>
  )
}

export default Nav_bar
