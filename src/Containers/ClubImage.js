import React, {Component} from 'react';


class ClubImage extends Component{
  

  render(){
  return (
      //     <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg" 
      // style={{width: "calc(250px/4)", position: "relative", top: "-30px", zIndex: 100}}/>

    <div>
      <div style={{position: "relative", top: "30px", margin: "15px"}}>
      <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg" 
      style={{width: "calc(74px)"}}/>
      <button>like</button>
      </div>
    
      <div style={{position: "relative", top: "30px", margin: "15px"}}>
      <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg" 
      style={{width: "calc(74px)"}}/>
            <button>like</button>

      </div>
    
      <div style={{position: "relative", top: "30px", margin: "15px"}}>
      <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg" 
      style={{width: "calc(74px)"}}/>
            <button>like</button>

      </div>
    
      <div style={{position: "relative", top: "30px", margin: "15px"}}>
      <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg" 
      style={{width: "calc(74px)"}}/>
            <button>like</button>

      </div>
    </div>
  );
}
}

export default ClubImage;





