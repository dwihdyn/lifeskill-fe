import React, {Component} from 'react';


class ClubImage extends Component{
  state = {
    array : []
  }
  
  render(){
    const array = [...Array(5).keys()]
    console.log(array)
    return (
      <>
        {array.map((arr,index)=>(
        <div key={index}>
          <div style={{position: "relative", top: "30px", margin: "15px"}}>
          <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg" 
          style={{width: "calc(74px)"}}/>
          <button>like</button>
          </div>
        </div>
        ))}
      </>
      )
}

}

export default ClubImage;





