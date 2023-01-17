import './App.css'
import ipad from '../public/ipad.jpg'
import smartphone from '../public/smartphone.jpg'
import smartwatch from '../public/smartwatch.jpg'
function App() {
  return (
    <div className="wrapper">
        <div className='container'>
          <div className='content'>
            <h1>See the best around here</h1>
            <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
          </div>
          <div className='frame'>
            <div className='frameBlocks'>
              <div className='frameBlock1' >
                <p>Smart light bulb pack</p>
                <div className='contentBlock'>
                    <span>1500$</span>                 
                  <h2>Every product</h2>
                  <img src={ipad} alt="" />
                </div>
              </div>
              <div className='frameBlock2' >
                <p>Smart light bulb pack</p>
                <div className='contentBlock'>
                  <span>1200$</span>
                  <h2>Best selling</h2>
                  
                  <img src={smartphone} alt="" />
                </div>
              </div>
              <div className='frameBlock3' >
                <p>Smart light bulb pack</p>
                <div className='contentBlock'>
                  <span>770$</span>
                  <h2>Latest and gratest</h2>
                  
                  <img src={smartwatch} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
