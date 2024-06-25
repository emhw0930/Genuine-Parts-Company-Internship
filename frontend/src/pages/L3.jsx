import ButtonContainer from '../components/ButtonContainer'
import { SeatDataProvider } from '../context/SeatDataContext.jsx';
import './L3.css'

export default function L3({ searchTerm }) {
  return (
    <SeatDataProvider>
      <div className="frame-1">
        {/* <input type="text" /> */}
        <div className="container-7">
          <div className="container-53">
            <div className="container-84">
              {/* rectangle-2911 */}
              <ButtonContainer 
                seatNumber="A1" 
                initialLabel="SeatA1" 
                placeholder="Enter new label" 
                isHighlighted={false} 
                searchTerm={searchTerm}
                buttonStyle={{ 
                  border: '1px solid grey', 
                  width: '97.4px', 
                  height: '231.3px', 
                  color: 'white', 
                  background:'#D9D9D9'
              }}/>
              {/* rectangle-2901 */}
              <ButtonContainer 
                seatNumber="A2" 
                initialLabel="SeatA2" 
                placeholder="Enter new label" 
                isHighlighted={false} 
                searchTerm={searchTerm}
                buttonStyle={{ 
                  border: '1px solid grey', 
                  width: '97.4px', 
                  height: '152.8px', 
                  color: 'white', 
                  background:'#D9D9D9'
              }}/>
            </div>
            <div className="container-45">
              <div className="container-127">
                <div className="container-39">
                  {/* rectangle-42 */}
                  <ButtonContainer 
                    seatNumber="A3" 
                    initialLabel="SeatA3" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey', 
                      width: '62px', 
                      height: '70px', 
                      color: 'white', 
                      background:'#E6E1D0'
                  }}/>
                  {/* rectangle-43 */}
                  <ButtonContainer 
                    seatNumber="A4" 
                    initialLabel="SeatA4" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey', 
                      width: '45px', 
                      height: '70px', 
                      color: 'white',
                      background:'#E6E1D0'
                  }}/>
                  {/* rectangle-45 */}
                  <ButtonContainer 
                    seatNumber="A5" 
                    initialLabel="SeatA5" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey', 
                      width: '65.4px', 
                      height: '70px', 
                      color: 'white',
                      background:'#E6E1D0'
                  }}/>
                </div>
                {/* rectangle-44 */}
                <ButtonContainer 
                    seatNumber="A6" 
                    initialLabel="SeatA6" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey', 
                      width: '45px', 
                      height: '70px', 
                      color: 'white',
                      background:'#E6E1D0'
                  }}/>
              </div>
              <div className="container-29">
                {/* rectangle-13 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA14" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      marginRight: '0px',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-14 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA15" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      marginRight: '22.6px',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-1 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA16" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-2 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA17" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-3 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA18" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
              </div>
              <div className="container-51">
                {/* rectangle-15 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA19" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      marginRight: '0px',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-16 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA20" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      marginRight: '22.6px',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-4 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA21" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-6 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA22" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-5 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA23" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
              </div>
              <div className="container-2">
                {/* rectangle-41 */}
                <ButtonContainer 
                    seatNumber="A38" 
                    initialLabel="SeatA38" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#D9D9D9',
                      width: '120.5px',
                      height: '95.7px'
                  }}/>
                {/* rectangle-52 */}
                <ButtonContainer 
                    seatNumber="A39" 
                    initialLabel="SeatA39" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      marginTop: '27.3px',
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '45.7px',
                      height: '68.3px'
                  }}/>
              </div>
              {/* rectangle-53 */}
              <ButtonContainer 
                    seatNumber="A40" 
                    initialLabel="SeatA40" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      margin: '0 14.3px',
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '96.4px',
                      height: '63px'
                  }}/>
            </div>
            <div className="container-35">
              <div className="container-new1">
                {/* rectangle-46 */}
                <ButtonContainer 
                      seatNumber="A7" 
                      initialLabel="SeatA7" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey', 
                        width: '47px', 
                        height: '70px', 
                        color: 'white', 
                        marginBottom: '20.5px',
                        background:'#E6E1D0'
                    }}/>
                {/* rectangle-47 */}
                <ButtonContainer 
                  seatNumber="A8" 
                  initialLabel="SeatA8" 
                  placeholder="Enter new label" 
                  isHighlighted={false} 
                  searchTerm={searchTerm}
                  buttonStyle={{ 
                    border: '1px solid grey', 
                    width: '66px', 
                    height: '70px', 
                    color: 'white',
                    background:'#E6E1D0'
                }}/>
              </div>
              <div className="container-73">
                {/* rectangle-17 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA24" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-19 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA25" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-18 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA26" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
              </div>
              <div className="container-118">
                {/* rectangle-20 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA27" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-22 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA28" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-21 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA29" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
              </div>
              <div className="container-56">
                {/* rectangle-31 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA41" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.4px',
                      height: '29px'
                  }}/>
                {/* rectangle-32 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA42" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.4px',
                      height: '29px'
                  }}/>
              </div>
              <div className="container-40">
                {/* rectangle-33 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA43" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.4px',
                      height: '29px'
                  }}/>
                {/* rectangle-34 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA44" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.4px',
                      height: '29px'
                  }}/>
              </div>
              <div className="container-41">
                {/* rectangle-35 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA45" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.4px',
                      height: '29px'
                  }}/>
                {/* rectangle-36 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA46" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.4px',
                      height: '29px'
                  }}/>
              </div>
              <div className="container-123">
                {/* rectangle-37 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA47" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.4px',
                      height: '29px'
                  }}/>
                {/* rectangle-38 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA48" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.4px',
                      height: '29px'
                  }}/>
              </div>
              <div className="container-60">
                {/* rectangle-39 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA49" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.4px',
                      height: '29px'
                  }}/>
                {/* rectangle-40 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA50" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.4px',
                      height: '29px'
                  }}/>
              </div> 
            </div>
            <div className="container-93">
              <div className='container-new2'>
                {/* rectangle-47 */}
                <ButtonContainer 
                    seatNumber="A9" 
                    initialLabel="SeatA9" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey', 
                      width: '69px', 
                      height: '70px', 
                      color: 'white', 
                      marginRight: 'auto', 
                      marginBottom: 20.5,
                    background:'#E6E1D0'
                  }}/>
                {/* rectangle-49 */}
                <ButtonContainer 
                    seatNumber="A10" 
                    initialLabel="SeatA10" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey', 
                      width: '44px', 
                      height: '70px', 
                      color: 'white', 
                      marginRight: 'auto', 
                      marginBottom: 20.5,
                      background:'#E6E1D0'
                  }}/>
              </div>
              <div className="container-124">
                {/* rectangle-23 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA30" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-25 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA31" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-24 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA32" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
              </div>
              <div className="container-6">
                {/* rectangle-26 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA33" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-28 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA34" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
                {/* rectangle-27 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA35" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '28px',
                      height: '37.1px'
                  }}/>
              </div>
              <div className="container-99">
                {/* rectangle-55 */}
                <ButtonContainer 
                    seatNumber="A51" 
                    initialLabel="SeatA51" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '56.6px',
                      height: '62.5px'
                  }}/>
                {/* rectangle-57 */}
                <ButtonContainer 
                    seatNumber="A53" 
                    initialLabel="SeatA53" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      borderBottom: '1px solid #D9D9D9',
                      color: 'white',
                      background: '#D9D9D9',
                      width: '138px',
                      height: '62.5px'
                  }}/>
              </div>
              {/* rectangle-56 */}
              <ButtonContainer 
                    seatNumber="A52" 
                    initialLabel="SeatA52" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#D9D9D9',
                      width: '110.2px',
                      height: '63.9px'
                  }}/>
            </div>
            <div className="container-18">
              <div className="container-3">
                {/* rectangle-50 */}
                <ButtonContainer 
                    seatNumber="A11" 
                    initialLabel="SeatA11" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey', 
                      width: '44px', 
                      height: '70px', 
                      color: 'white', 
                      marginRight: 'auto', 
                      marginBottom: 20.5, 
                      background:'#E6E1D0'
                  }}/>
                {/* rectangle-51 */}
                <ButtonContainer 
                    seatNumber="A12" 
                    initialLabel="SeatA12" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey', 
                      width: '65px', 
                      height: '70px', 
                      color: 'white', 
                      marginRight: 'auto', 
                      marginBottom: 20.5, 
                      background:'#E6E1D0'
                  }}/>
              </div>
              {/* rectangle-29 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA36" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      margin: '0px 7.4px',
                      alignSelf: 'flex-start',
                      width: '28px',
                      height: '37.1px'
                  }}/>
              {/* rectangle-30 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA37" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      margin: '0px 7.4px 22.5px',
                      alignSelf: 'flex-start',
                      width: '28px',
                      height: '37.1px'
                  }}/>
              <div className="container-116">
                <div className="rectangle-58">
                </div>
                {/* rectangle-61 */}
                <ButtonContainer 
                      seatNumber="A54" 
                      initialLabel="SeatA54" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginLeft: '0px',
                        marginTop: '2px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#D9D9D9',
                        alignSelf: 'flex-start',
                        width: '42.3px',
                        height: '62.5px'
                    }}/>
              </div>
              <div className="container-13">
                {/* rectangle-59 */}
                <ButtonContainer 
                      seatNumber="A56" 
                      initialLabel="SeatA56" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginLeft: '0px',
                        border: '1px solid grey',
                        borderTop: '1px solid #D9D9D9',
                        color: 'white',
                        background: '#D9D9D9',
                        width: '84.1px',
                        height: '63.9px'
                    }}/>
                {/* rectangle-62 */}
                <ButtonContainer 
                      seatNumber="A55" 
                      initialLabel="SeatA55" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#D9D9D9',
                        alignSelf: 'flex-start',
                        width: '42.3px',
                        height: '63.9px'
                    }}/>
              </div>
              {/* rectangle-65 */}
              <ButtonContainer 
                      seatNumber="A57" 
                      initialLabel="SeatA57" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#D9D9D9',
                        alignSelf: 'flex-start',
                        width: '126.4px',
                        height: '79.2px'
                }}/>
            </div>
            <div className="container-37">
              {/* rectangle-60 */}
              <ButtonContainer 
                      seatNumber="A58" 
                      initialLabel="SeatA58" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#D9D9D9',
                        alignSelf: 'flex-start',
                        width: '125.8px',
                        height: '136.2px'
                }}/>
              <div className="container-15">
              {/* rectangle-63 */}
              <ButtonContainer 
                      seatNumber="A59" 
                      initialLabel="SeatA59" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#D9D9D9',
                        alignSelf: 'flex-start',
                        width: '53.6px',
                        height: '70px'
                }}/>
              {/* rectangle-64 */}
              <ButtonContainer 
                      seatNumber="A60" 
                      initialLabel="SeatA60" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#D9D9D9',
                        alignSelf: 'flex-start',
                        width: '72.4px',
                        height: '70px'
                }}/>
              </div>
            </div>
            <div className="container-16">
              {/* rectangle-289 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA65" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-293 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA66" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '19px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-313 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA81" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-317 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA82" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '23px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-66 */}
              <ButtonContainer 
                      seatNumber="A62" 
                      initialLabel="SeatA62" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        marginRight: '40.5px',
                        justifyContent: 'flex-start',
                        width: '56.5px',
                        height: '36.5px'
                }}/>
              {/* rectangle-67 */}
              <ButtonContainer 
                      seatNumber="A63" 
                      initialLabel="SeatA63" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        marginRight: '40.5px',
                        justifyContent: 'flex-start',
                        width: '56.5px',
                        height: '36.5px'
                }}/>
              {/* rectangle-68 */}
              <ButtonContainer 
                      seatNumber="A64" 
                      initialLabel="SeatA64" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        marginRight: '40.5px',
                        justifyContent: 'flex-start',
                        width: '56.5px',
                        height: '36.5px'
                }}/>
              {/* rectangle-69 */}
              <ButtonContainer 
                      seatNumber="A61" 
                      initialLabel="SeatA61" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#D9D9D9',
                        margin: '0 6.9px 0 0px',
                        alignSelf: 'flex-start',
                        width: '90px',
                        height: '134.5px'
                }}/>
            </div>
            <div className="container-97">
              {/* rectangle-293 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA67" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-293 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA68" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        marginBottom: '19px',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-314 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA83" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-318 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA84" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '19px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
            </div>
            <div className="container-103">
              {/* rectangle-291 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA69" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-295 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA70" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '19px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-315 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA85" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-319 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA86" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '19px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
            </div>
            <div className="container-47">
              {/* rectangle-292 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA71" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-296 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA72" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '19px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-316 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA87" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-320 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA88" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '19px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
            </div>
            <div className="container-43">
              {/* rectangle-297 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA73" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-301 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA74" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '19px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-305 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA89" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-309 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA90" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '19px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
            </div>
            <div className="container-8">
              {/* rectangle-298 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA75" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-302 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA76" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '19px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-306 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA91" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-310 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA95" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
            </div>
            <div className="container-52">
              {/* rectangle-299 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA77" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-303 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA78" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '19px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-307 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA92" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-311 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA93" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
            </div>
            <div className="container-120">
              <div className="container-4">
                <div className="container-42">
              {/* rectangle-300 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA79" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
              {/* rectangle-304 */}
              <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA80" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        marginBottom: '19px',
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                }}/>
                  {/* rectangle-308 */}
                  <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA94" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '26px',
                        height: '21.5px'
                  }}/>
                  {/* rectangle-312 */}
                  <ButtonContainer 
                        seatNumber="" 
                        initialLabel="SeatA96" 
                        placeholder="Enter new label" 
                        isHighlighted={false} 
                        searchTerm={searchTerm}
                        buttonStyle={{ 
                          border: '1px solid grey',
                          color: 'white',
                          background: '#E6E1D0',
                          alignSelf: 'flex-start',
                          width: '26px',
                          height: '21.5px'
                  }}/>
                </div>
                <div className="container-22">
                  {/* rectangle-70 */}
                  <ButtonContainer 
                      seatNumber="A102" 
                      initialLabel="SeatA102" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '57px',
                        height: '45px'
                    }}/>
                  {/* rectangle-71 */}
                  <ButtonContainer 
                      seatNumber="A101" 
                      initialLabel="SeatA101" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '57px',
                        height: '34.7px'
                    }}/>
                  {/* rectangle-72 */}
                  <ButtonContainer 
                      seatNumber="A100" 
                      initialLabel="SeatA100" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '57px',
                        height: '34.7px'
                    }}/>
                  {/* rectangle-73 */}
                  <ButtonContainer 
                      seatNumber="A99" 
                      initialLabel="SeatA99" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '57px',
                        height: '34.7px'
                    }}/>
                </div>
                {/* rectangle-76 */}
                <ButtonContainer 
                      seatNumber="A103" 
                      initialLabel="SeatA103" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '43.3px',
                        height: '78.6px'
                    }}/>
                {/* rectangle-77 */}
                <ButtonContainer 
                      seatNumber="A104" 
                      initialLabel="SeatA104" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        alignSelf: 'flex-start',
                        width: '43.3px',
                        height: '78.6px'
                    }}/>
                {/* rectangle-321 */}
                <ButtonContainer 
                      seatNumber="A105" 
                      initialLabel="SeatA105" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#D9D9D9',
                        alignSelf: 'flex-start',
                        width: '75px',
                        height: '78.6px'
                    }}/>
              </div>
              <div className="container-126">
                {/* rectangle-74 */}
                <ButtonContainer 
                    seatNumber="A97" 
                    initialLabel="SeatA97" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      alignSelf: 'flex-start',
                      width: '56.6px',
                      height: '73.3px'
                  }}/>
                {/* rectangle-75 */}
                <ButtonContainer 
                    seatNumber="A98" 
                    initialLabel="SeatA98" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      alignSelf: 'flex-start',
                      width: '56.5px',
                      height: '73.3px'
                  }}/>
              </div>
              <div className='containerNew-3'>
              {/* rectangle-78 */}
              <ButtonContainer 
                    seatNumber="A108" 
                    initialLabel="SeatA108" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#D9D9D9',
                      alignSelf: 'flex-end',
                      width: '80.2px',
                      height: '104px'
                  }}/>
              </div>
              
            </div>
            
            {/* rectangle-288 */}
            <ButtonContainer 
                seatNumber="A106" 
                initialLabel="SeatA106" 
                placeholder="Enter new label" 
                isHighlighted={false} 
                searchTerm={searchTerm}
                buttonStyle={{ 
                  border: '1px solid grey',
                  color: 'white',
                  background: '#D9D9D9',
                  width: '97.5px',
                  height: '378.7px'
              }}/>
          </div>
          <div className='container-new4'>
            {/* rectangle-54 */}
            <ButtonContainer 
                seatNumber="A13" 
                initialLabel="SeatA13" 
                placeholder="Enter new label" 
                isHighlighted={false} 
                searchTerm={searchTerm}
                buttonStyle={{ 
                  border: '1px solid grey', 
                  background: '#D9D9D9', 
                  position: 'absolute', 
                  top: '0px', 
                  width: '117px', 
                  height: '143px', 
                  color: 'white'
              }}/>
          </div>

          {/* <div className="rectangle-321">
          </div> */}
          {/* <hr className="custom-line"/>  */}
        </div>

        <div className="container-119">
          {/* <span className="hallway-and-stairs">
          Hallway and Stairs
          </span>
          <span className="hallway-and-stairs-1">
          Hallway and Stairs
          </span>
          <span className="hallway-and-stairs-2">
          Hallway and Stairs
          </span>
          <span className="hallway-and-stairs-3">
          Hallway and Stairs
          </span> */}
        </div>
        <div className="container-58">
          <div className="container-9">
            {/* rectangle-285 */}
            <ButtonContainer 
                seatNumber="A107" 
                initialLabel="SeatA15" 
                placeholder="Enter new label" 
                isHighlighted={false} 
                searchTerm={searchTerm}
                buttonStyle={{ border: '1px solid grey',
                  color: 'white',
                  background: '#D9D9D9',
                  width: '105px',
                  height: '157.3px'
              }}/>
            {/* rectangle-79 */}
            <ButtonContainer 
                seatNumber="A108" 
                initialLabel="SeatA16" 
                placeholder="Enter new label" 
                isHighlighted={false} 
                searchTerm={searchTerm}
                buttonStyle={{ border: '1px solid grey',
                  color: 'white',
                  background: '#D9D9D9',
                  width: '105px',
                  height: '160px'
              }}/>
          </div>
          <div className="container-117">
            <div className="container-57">
              <div className="container-30">
                {/* rectangle-276 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA109" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-277 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA110" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
              <div className="container-61">
                {/* rectangle-268 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA115" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-269 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA116" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
              <div className="container-88">
                {/* rectangle-260 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA117" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-261 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA118" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
            </div>
            <div className="container-81">
              <div className="container-25">
                {/* rectangle-278 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA111" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-279 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA112" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
              <div className="container-44">
                {/* rectangle-270 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA113" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-271 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA114" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
              <div className="container-90">
                {/* rectangle-262 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA119" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-263 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA120" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
            </div>
            <div className="container-54">
              <div className="container-64">
                {/* rectangle-280 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA121" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-281 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA122" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
              <div className="container-106">
                {/* rectangle-272 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA123" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-273 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA124" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
              <div className="container-11">
                {/* rectangle-264 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA125" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-265 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA126" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
            </div>
            <div className="container-38">
              <div className="container-63">
                {/* rectangle-282 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA127" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-283 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA128" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
              <div className="container-65">
                {/* rectangle-274 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA129" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-275 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA130" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
              <div className="container-80">
                {/* rectangle-266 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA131" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
                {/* rectangle-267 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA132" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '2.3px',
                      height: '27.4px'
                  }}/>
              </div>
            </div>
            <div className="container-5">
              {/* rectangle-80 */}
              <ButtonContainer 
                    seatNumber="A133" 
                    initialLabel="SeatA133" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#D9D9D9',
                      width: '117px',
                      height: '66.4px'
                  }}/>
              {/* rectangle-81 */}
              <ButtonContainer 
                    seatNumber="A134" 
                    initialLabel="SeatA134" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#D9D9D9',
                      width: '97.4px',
                      height: '66.4px'
                  }}/>
            </div>
            <div className="container-95">
              {/* rectangle-284 */}
              <ButtonContainer 
                    seatNumber="A135" 
                    initialLabel="SeatA135" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '73.8px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-284 */}
              <ButtonContainer 
                    seatNumber="A136" 
                    initialLabel="SeatA136" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '45.2px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-83 */}
              <ButtonContainer 
                    seatNumber="A137" 
                    initialLabel="SeatA137" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-84 */}
              <ButtonContainer 
                    seatNumber="A138" 
                    initialLabel="SeatA138" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-85 */}
              <ButtonContainer 
                    seatNumber="A139" 
                    initialLabel="SeatA139" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-86 */}
              <ButtonContainer 
                    seatNumber="A140" 
                    initialLabel="SeatA140" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
            </div>
          </div>
          <div className="container-85">
            <div className="container-66">
              {/* rectangle-132 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA141" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-133 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA142" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      marginRight: '13.3px',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-136 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA143" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      marginRight: '13.3px',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-141 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA144" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>

              {/* rectangle-145 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA145" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      marginRight: '13.3px',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>

              {/* rectangle-149 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA146" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>

              {/* rectangle-153 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA147" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      marginRight: '13.3px',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-157 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA148" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      marginRight: '13.3px',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
            </div>
            <div className="container-83">
              {/* rectangle-130 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA149" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-131 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA150" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      marginRight: '13.3px',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-135 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA151" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      marginRight: '13.3px',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-142 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA152" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>

              {/* rectangle-146 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA153" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-150 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA154" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-154 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA155" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-158 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA156" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
            </div>
            <div className="container-104">
              {/* rectangle-130 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA157" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-131 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA158" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      marginRight: '13.3px',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-135 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA159" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      marginRight: '13.3px',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-142 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA160" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>

              {/* rectangle-146 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA161" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-150 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA162" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-154 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA163" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-158 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA164" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
            </div>
            <div className="container-70">
              {/* rectangle-130 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA165" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-131 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA166" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      marginRight: '13.3px',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-135 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA167" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      marginRight: '13.3px',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '34.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-142 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA168" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>

              {/* rectangle-146 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA169" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-150 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA170" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-154 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA171" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-158 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel="SeatA172" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '18px',
                      height: '28.4px'
                  }}/>
            </div>
            <div className="container-82">
              <div className="container-17">
                {/* rectangle-112 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA173" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-94 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA174" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-95 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA175" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
              </div>
              <div className="container-78">
                {/* rectangle-102 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA176" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-113 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA177" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-114 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA178" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
              </div>
              <div className="container-36">
                {/* rectangle-103 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA179" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-104 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA180" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-105 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA181" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
              </div>
              <div className="container-26">
                {/* rectangle-108 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA182" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-106 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA183" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-107 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA184" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
              </div>
              <div className="container-20">
                {/* rectangle-109 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA185" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-110 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA186" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-111 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA187" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '37.5px',
                        height: '28.4px'
                    }}/>
              </div>
            </div>
            <div className="container-108">
              {/* rectangle-87 */}
              <ButtonContainer 
                    seatNumber="A188" 
                    initialLabel="SeatA188" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-88 */}
              <ButtonContainer 
                    seatNumber="A189" 
                    initialLabel="SeatA189" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-89 */}
              <ButtonContainer 
                    seatNumber="A190" 
                    initialLabel="SeatA190" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-90 */}
              <ButtonContainer 
                    seatNumber="A191" 
                    initialLabel="SeatA191" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-91 */}
              <ButtonContainer 
                    seatNumber="A192" 
                    initialLabel="SeatA192" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-92 */}
              <ButtonContainer 
                    seatNumber="A193" 
                    initialLabel="SeatA193" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
            </div>
          </div>
          <div className="container-59">
            <div className="container-125">
              {/* rectangle-2881 */}
              <ButtonContainer 
                    seatNumber="A194" 
                    initialLabel="SeatA194" 
                    placeholder="Enter new label" 
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      margin: '0 8.9px 1.5px 0',
                      color: 'white',
                      background: '#D9D9D9',
                      width: '97.4px',
                      height: '104px'
                  }}/>
              <div className="container-109">
                {/* rectangle-161 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA195" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '20.2px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-162 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel="SeatA196" 
                      placeholder="Enter new label" 
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '20.2px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-163 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel='SeatA197'
                      placeholder="Enter new label"
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '20.2px',
                        height: '28.4px'
                    }}/>
                {/* rectangle-164 */}
                <ButtonContainer 
                      seatNumber="" 
                      initialLabel='SeatA198'
                      placeholder="Enter new label"
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#E6E1D0',
                        width: '20.2px',
                        height: '28.4px'
                    }}/>
              </div>
            </div>
            <div className="container-105">
              {/* rectangle-2891 */}
              <ButtonContainer 
                      seatNumber="A199" 
                      initialLabel='SeatA199'
                      placeholder="Enter new label"
                      isHighlighted={false} 
                      searchTerm={searchTerm}
                      buttonStyle={{ 
                        border: '1px solid grey',
                        color: 'white',
                        background: '#D9D9D9',
                        width: '104.3px',
                        height: '158px'
                    }}/>
              <div className="container-28">
                {/* rectangle-245 */}
                <ButtonContainer 
                    seatNumber="A200" 
                    initialLabel='SeatA200'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginBottom: '23px',
                      background: '#E6E1D0',
                      width: '45.7px',
                      height: '67.2px'
                  }}/>
                {/* rectangle-246 */}
                <ButtonContainer 
                    seatNumber="A201" 
                    initialLabel='SeatA201'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '45.7px',
                      height: '67.2px'
                  }}/>
              </div>
            </div>
          </div>
          <div className="container-100">
            <div className="container-76">
              <div className="container-96">
                {/* rectangle-165 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA202'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-169 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA203'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '17.2px',
                      background: '#E6E1D0',
                      width: '18.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-179 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA204'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-180 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA205'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '17.2px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
              <div className="container-101">
                {/* rectangle-184 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA206'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-191 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA207'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-192 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA208'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-199 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA209'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-200 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA210'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
            </div>
            <div className="container-74">
              <div className="container-79">
                {/* rectangle-165 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA211'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-169 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA212'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '17.2px',
                      background: '#E6E1D0',
                      width: '18.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-179 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA213'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-180 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA214'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '17.2px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
              <div className="container-89">
                {/* rectangle-184 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA215'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-191 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA216'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-192 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA217'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-199 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA218'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-200 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA219'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
            </div>
            <div className="container-115">
              <div className="container">
                {/* rectangle-165 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA220'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-169 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA221'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '17.2px',
                      background: '#E6E1D0',
                      width: '18.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-179 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA222'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-180 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA223'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '17.2px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
              <div className="container-112">
                {/* rectangle-184 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA224'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-191 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA225'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-192 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA226'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-199 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA227'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-200 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA228'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
            </div>
            <div className="container-49">
              <div className="container-107">
                {/* rectangle-165 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA229'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '18.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-169 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA230'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '17.2px',
                      background: '#E6E1D0',
                      width: '18.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-179 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA231'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-180 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA232'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '17.2px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
              <div className="container-72">
                {/* rectangle-184 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA233'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-191 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA234'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-192 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA235'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-199 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA236'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-200 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA237'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
            </div>
            <div className="container-68">
              <div className="container-27">
  {/* Here */}
                {/* rectangle-220 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA238'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '21.1px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-223 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA239'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-226 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA240'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
              <div className="container-98">
                {/* rectangle-232 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA241'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-229 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA242'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
              <div className="container-121">
                {/* rectangle-238 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA243'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-235 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA244'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
            </div>
            <div className="container-102">
              <div className="container-75">
                {/* rectangle-220 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA245'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '21.1px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-223 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA246'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-226 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA247'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
              <div className="container-34">
                {/* rectangle-232 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA248'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-229 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA249'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
              <div className="container-46">
                {/* rectangle-238 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA250'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-235 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA251'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
            </div>
            <div className="container-31">
              <div className="container-71">
                {/* rectangle-220 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA252'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '21.1px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '30px'
                  }}/>
                {/* rectangle-223 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA253'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-226 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA254'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
              <div className="container-69">
                {/* rectangle-232 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA255'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-229 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA256'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
              <div className="container-1">
                {/* rectangle-238 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA257'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
                {/* rectangle-235 */}
                <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA258'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
            </div>
            <div className="container-10">
              {/* rectangle-247 */}
              <ButtonContainer 
                    seatNumber="A259" 
                    initialLabel='SeatA259'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-248 */}
              <ButtonContainer 
                    seatNumber="A260" 
                    initialLabel='SeatA260'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-249 */}
              <ButtonContainer 
                    seatNumber="A261" 
                    initialLabel='SeatA261'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-250 */}
              <ButtonContainer 
                    seatNumber="A262" 
                    initialLabel='SeatA262'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-251 */}
              <ButtonContainer 
                    seatNumber="A263" 
                    initialLabel='SeatA263'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-252 */}
              <ButtonContainer 
                    seatNumber="A264" 
                    initialLabel='SeatA264'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-253 */}
              <ButtonContainer 
                    seatNumber="A265" 
                    initialLabel='SeatA265'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-254 */}
              <ButtonContainer 
                    seatNumber="A266" 
                    initialLabel='SeatA266'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-255 */}
              <ButtonContainer 
                    seatNumber="A267" 
                    initialLabel='SeatA267'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
            </div>
          </div>
          <div className="container-114">
            <div className="container-110">
              {/* rectangle-207 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA268'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-208 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA269'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-212 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA270'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
            </div>
  {/* end */}
            <div className="container-111">
              {/* rectangle-207 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA271'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-208 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA272'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-212 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA273'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
            </div>
            <div className="container-91">
              {/* rectangle-207 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA274'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-208 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA275'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-212 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA276'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
            </div>
            <div className="container-19">
              {/* rectangle-207 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA277'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-208 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA278'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-212 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA279'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginRight: '13.3px',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
            </div>
            <div className="container-50">
              <div className="container-129">
                {/* rectangle-244 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA280'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-243 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA281'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              {/* rectangle-242 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA282'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '35.5px',
                      height: '28.4px'
                  }}/>
              </div>
              {/* rectangle-258 */}
              <ButtonContainer 
                    seatNumber="" 
                    initialLabel='SeatA287'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      marginBottom: '13.2px',
                      background: '#E6E1D0',
                      width: '48.7px',
                      height: '65.9px'
                  }}/>
            </div>
            <div className="container-77">
              {/* rectangle-256 */}
              <ButtonContainer 
                    seatNumber="A283" 
                    initialLabel='SeatA283'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '42.3px',
                      height: '67.2px'
                  }}/>
              {/* rectangle-257 */}
              <ButtonContainer 
                    seatNumber="A284" 
                    initialLabel='SeatA284'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#E6E1D0',
                      width: '74px',
                      height: '67.2px'
                  }}/>
            </div>
          </div>
          <div className="container-62">
            {/* rectangle-287 */}
            <ButtonContainer 
                    seatNumber="A285" 
                    initialLabel='SeatA285'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#D9D9D9',
                      width: '97.4px',
                      height: '138.8px'
                  }}/>
            {/* rectangle-286 */}
            <ButtonContainer 
                    seatNumber="A286" 
                    initialLabel='SeatA286'
                    placeholder="Enter new label"
                    isHighlighted={false} 
                    searchTerm={searchTerm}
                    buttonStyle={{ 
                      border: '1px solid grey',
                      color: 'white',
                      background: '#D9D9D9',
                      width: '97.4px',
                      height: '177.5px'
                  }}/>
          </div>
        </div>
      </div>
    </SeatDataProvider>
  )
}

