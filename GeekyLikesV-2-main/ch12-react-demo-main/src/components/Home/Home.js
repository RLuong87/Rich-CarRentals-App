import React, { useState } from 'react';
import Button from '../common/Button';
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const handleReduce = () => {
    setCount(count - 1);
  }

  return (
    <InlineInputContainer>
      <Input
        style={{
          flex: 3
        }}
        id="query"
        placeHolder="Search"
      // onChange={(e) => setQ(e.target.value)}
      />
      <FontAwesomeIcon icon={["fas", "search"]} />
      <Button style={{
          flex: 1
      }}>SEARCH FOR A CAR!</Button>
    </InlineInputContainer>
    // style={{
    //   display: "flex",
    //   flex: "1",
    //   flexDirection: "column",
    //   alignItems: 'center',
    //   minHeight: '100vh',
    // }}>
    //   <h1>RENT A CAR! Let's go!</h1>
    //   <div style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
    //     <Button onClick={handleReduce} style={{backgroundColor: 'red'}} disabled={count === 0} >
    //       <p>
    //         Remove
    //       </p>  
    //     </Button>
    //     <Button onClick={handleClick}>
    //       <p>Click Me!</p>
    //     </Button>
    //   </div>
    //   <div style={{width: "100%"}}>
    //     <CounterBoxes count={count}/>
    //   </div>
    // </div>
  )
}

export default Home;