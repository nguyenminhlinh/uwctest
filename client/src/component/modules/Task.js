import React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';
import { CardinalCurve, BundleCurve } from 'react-svg-curve';



import './styles/Task.css';

let flag = true;

function Task() {
  // change color
  let change1 = { color: '#e84434' };
  let change2 = { color: '#14842f' };

  const [flag0, setFlag0] = useState(true); //FACTORY
  const [active0,setActive0]=useState(true);
  const changeColor0 = () => {
    setFlag0(!flag0)
    setActive0(!active0);
    
   
  }
  
 
  const [flag1, setFlag1] = useState(true);
  const [active1,setActive1]=useState(true);
  const changeColor1 = () => {
    setFlag1(!flag1)
    setActive1(!active1);
    
  }
  const [flag2, setFlag2] = useState(true);
  const [active2,setActive2]=useState(true);
  const changeColor2 = () => {
    setFlag2(!flag2)
    setActive2(!active2);
  }
  const [flag3, setFlag3] = useState(true);
  const [active3,setActive3]=useState(true);
  const changeColor3 = () => {
    setFlag3(!flag3);
    setActive3(!active3);
  }
  const [flag4, setFlag4] = useState(true);
  const [active4,setActive4]=useState(true);
  const changeColor4 = () => {
    setFlag4(!flag4);
    setActive4(!active4);
  }
  const [flag5, setFlag5] = useState(true);
  const [active5,setActive5]=useState(true);
  const changeColor5 = () => {
    setFlag5(!flag5);
    setActive5(!active5);
  }
  const [flag6, setFlag6] = useState(true); //FACTORY
  const [active6,setActive6]=useState(true);
  const changeColor6 = () => {
    setFlag6(!flag6);
    setActive6(!active6);
  }
  const [flag7, setFlag7] = useState(true); //FACTORY
  const [active7,setActive7]=useState(true);
  const changeColor7 = () => {
    setFlag7(!flag7);
    setActive7(!active7);
  }
  const [flag8, setFlag8] = useState(true); //FACTORY
  const [active8,setActive8]=useState(true);
  const changeColor8 = () => {
    setFlag8(!flag8);
    setActive8(!active8);
  }

  useEffect (()=>
  {
    setTimeout(()=>
    {
      
      if(active0==false) setActive0(true);

    },1500);
  },[active1])
  
  useEffect (()=>
  {
    setTimeout(()=>
    {
      
      if(active1==false) setActive1(true);

    },1500);
  },[active2])
  useEffect (()=>
  {
    setTimeout(()=>
    {
      
      if(active1==false) setActive1(true);
      if(active2==false) setActive2(true);

    },1500);
  },[active3])
  useEffect (()=>
  {
    setTimeout(()=>
    {
      
      if(active3==false) setActive3(true);
      if(active2==false) setActive2(true);

    },1500);
  },[active4])
  useEffect (()=>
  {
    setTimeout(()=>
    {
      
      if(active4==false) setActive4(true);
      if(active2==false) setActive2(true);

    },1500);
  },[active7])
  useEffect (()=>
  {
    setTimeout(()=>
    {
      
      if(active7==false) setActive7(true);
 

    },1500);
  },[active8])
  useEffect (()=>
  {
    setTimeout(()=>
    {
      
      if(active0==false) setActive0(true);
      if(active3==false) setActive3(true);
 

    },1500);
  },[active5])
  useEffect (()=>
  {
    setTimeout(()=>
    {
      
      if(active3==false) setActive3(true);
      if(active4==false) setActive4(true);
      if(active8==false) setActive8(true);
      if(active5==false) setActive5(true);
      if(active6==false) setActive6(true);
 

    },1500);
  },[active6])
  // context menu 

  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false); // hide menu show janitor
  const [show1, setShow1] = useState(false); // hide menu show collector

  // janitor
  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });

      setShow(true);
    },
    [setAnchorPoint]
  );
  // collector    
  const handleContextMenu1 = useCallback(
    (event) => {
     event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow1(true);

    },
    [setAnchorPoint]
  );

  let top = anchorPoint.y - 45, left = anchorPoint.x - 217;

  if (top > 350) top = top - 350;
  if (top > 200 && top < 350) top = top - 150;
  if (left + 400 > 1000) left = left - 400;

  function turnOffJanitor() {
    setShow(false);
  }
  function turnOffCollector() {
    setShow1(false);
  }




  // handle line map  
  const [bundleBeta, setBundleBeta] = React.useState(0.85);
  const lisdata =
    [
      // Factory->MCP1 [0]
      {
        line1: [[10, 40], [150, 100], [300, 80]],
        line2: [[10, 40], [50, 75], [75, 80], [150, 60], [300, 80]],
        line3: [[10, 40], [50, 105], [150, 30], [300, 80]]
      },
      // MCP1->MCP2 [1]
      {
        line1: [[300, 80], [390, 40], [400, 90]],
        line2: [[300, 80], [350, 75], [360, 60], [400, 90]],
        line3: [[300, 80], [310, 60], [400, 90]]
      },
      // MCp2->MCP3 [2]
      {
        line1: [[400, 90], [390, 140], [300, 180]],
        line2: [[400, 90], [300, 180]],
      },
      // MCP1->MCP3 [3]
      {
        line1: [[300, 80], [290, 140], [300, 180]],
      },
      // MCP2->MCp4 [4]
      {
        line1: [[400, 90], [490, 140], [600, 280]],
        line2: [[400, 90], [550, 175], [560, 260], [600, 280]],

      },
      // MCP3->MCP4 [5]
      {
        line1: [[300, 180], [490, 190], [600, 280]],
        line2: [[300, 180], [350, 175], [560, 260], [600, 280]],

      },
      // MCP3->MCP5 [6]
      {
        line1: [[300, 180], [290, 190], [200, 433]],
        line2: [[300, 180], [250, 175], [260, 360], [200, 433]],
      },
      // MCP4->ALO [7]
      {
        line1: [[600, 280], [630, 360], [400, 430]],
        line2: [[600, 280], [600, 300], [550, 375], [400, 430]],
      },
      // MCP5->ALO [8]
      {
        line1: [[200, 433], [400, 430]]
      },
      // MCP3->ALO [9]
      {
        line1: [[300, 180], [330, 240], [400, 430]]
      },
      // Factory->MCP5 [10]
      {
        line1: [[10, 40], [50, 200], [200, 433]]
      },
      // MCP4->MCP7 [11]
      {
        line1: [[600, 280], [630, 200], [800, 180]],
        line2: [[600, 280], [650, 270], [800, 180]],
      },
      // MCP7->MCP8 [12]
      {
        line1: [[800, 180], [820, 300], [780, 425]],
        line2: [[800, 180], [830, 200], [760, 350], [780, 425]]
      },
      // MCP8->ALO [13]
      {
        line1: [[780, 425], [700, 400], [400, 430]],
        line2: [[780, 425], [560, 460], [400, 430]]
      },
      // MCp2->MCP7 [14]
      {
        line1: [[400, 90], [630, 70], [800, 180]]
      }
    ]


  function Range({ min = 0, max = 1, step = 0.01, value, setValue, label }) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <label>{label}: </label>
        <div style={{ width: 50 }}>{value}</div>
        <input
          type="range"
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={e => setValue(+e.target.value)}
        />
      </div>
    );
  }


  // change color route

  const [routeF1, setRouteF1] = useState(1)
  function changeRouteF1() {
    if (routeF1 == 3) setRouteF1(1)
    else
      setRouteF1(routeF1 => routeF1 + 1);
  }

  const [route12, setRoute12] = useState(1)
  function changeRoute12() {
    if (route12 == 3) setRoute12(1)
    else
      setRoute12(route12 => route12 + 1);
  }

  const [route23, setRoute23] = useState(1)
  function changeRoute23() {
    if (route23 == 2) setRoute23(1)
    else
      setRoute23(route23 => route23 + 1);
  }

  const [route34, setRoute34] = useState(1)
  function changeRoute34() {
    if (route34 == 2) setRoute34(1)
    else
      setRoute34(route34 => route34 + 1);
  }

  const [route24, setRoute24] = useState(1)
  function changeRoute24() {
    if (route24 == 2) setRoute24(1)
    else
      setRoute24(route24 => route24 + 1);
  }

  const [route35, setRoute35] = useState(1)
  function changeRoute35() {
    if (route35 == 2) setRoute35(1)
    else
      setRoute35(route35 => route35 + 1);
  }

  const [route47, setRoute47] = useState(1)
  function changeRoute47() {
    if (route47 == 2) setRoute47(1)
    else
      setRoute47(route47 => route47 + 1);
  }

  const [route78, setRoute78] = useState(1)
  function changeRoute78() {
    if (route78 == 2) setRoute78(1)
    else
      setRoute78(route78 => route78 + 1);
  }

  const [route4F, setRoute4F] = useState(1)
  function changeRoute4F() {
    if (route4F == 2) setRoute4F(1)
    else
      setRoute4F(route4F => route4F + 1);
  }

  const [route8F, setRoute8F] = useState(1)
  function changeRoute8F() {
    if (route8F == 2) setRoute8F(1)
    else
      setRoute8F(route8F => route8F + 1);
  }

  return (
    <div className="content">
      <div className="map">
        <div className="map__api" >
          <img className="map__api-img" src="https://inuvcuon.vn/images/2018/08/voi-nhung-cong-cu-rat-huu-ich-ban-da-co-the-in-truc-tiep-ngay-tren-google-map.jpg" />
          {/* toggle */}
          <button className="nodeF1" onClick={changeRouteF1} onContextMenu={handleContextMenu1}></button>
          <button className="node12" onClick={changeRoute12} onContextMenu={handleContextMenu1}></button>
          <button className="node23" onClick={changeRoute23} onContextMenu={handleContextMenu1}></button>
          <button className="node34" onClick={changeRoute34} onContextMenu={handleContextMenu1}></button>
          <button className="node24" onClick={changeRoute24} onContextMenu={handleContextMenu1}></button>
          <button className="node35" onClick={changeRoute35} onContextMenu={handleContextMenu1}></button>
          <button className="node47" onClick={changeRoute47} onContextMenu={handleContextMenu1}></button>
          <button className="node78" onClick={changeRoute78} onContextMenu={handleContextMenu1}></button>
          <button className="node5F" onClick={changeRoute4F} onContextMenu={handleContextMenu1}></button>
          <button className="node8F" onClick={changeRoute8F} onContextMenu={handleContextMenu1}></button>
        </div>

        <button className="MCP" id='FACTORY' style={active0 ? change1 : change2} onDoubleClick={changeColor0}

          onContextMenu={handleContextMenu}  >
          <i className="fa-solid fa-industry"></i>
        </button>

        <button className="MCP" id='MCP1' style={active1 ? change1 : change2} onDoubleClick={changeColor1} onContextMenu={handleContextMenu}>
          <i className="MCP-icon fa-solid fa-location-dot"></i>
        </button>

        <button className="MCP" id='MCP2' style={active2 ? change1 : change2} onDoubleClick={changeColor2} onContextMenu={handleContextMenu}>
          <i className="MCP-icon fa-solid fa-location-dot"></i>
        </button>

        <button className="MCP" id='MCP3' style={active3 ? change1 : change2} onDoubleClick={changeColor3} onContextMenu={handleContextMenu}>
          <i className="MCP-icon fa-solid fa-location-dot"></i>
        </button>

        <button className="MCP" id='MCP4' style={active4 ? change1 : change2} onDoubleClick={changeColor4} onContextMenu={handleContextMenu}>
          <i className="MCP-icon fa-solid fa-location-dot"></i>
        </button>

        <button className="MCP" id='MCP5' style={active5 ? change1 : change2} onDoubleClick={changeColor5} onContextMenu={handleContextMenu}>
          <i className="MCP-icon fa-solid fa-location-dot"></i>
        </button>

        <button className="MCP" id='MCP7' style={active7 ? change1 : change2} onDoubleClick={changeColor7} onContextMenu={handleContextMenu}>
          <i className="MCP-icon fa-solid fa-location-dot"></i>
        </button>

        <button className="MCP" id='MCP8' style={active8 ? change1 : change2} onDoubleClick={changeColor8} onContextMenu={handleContextMenu}>
          <i className="MCP-icon fa-solid fa-location-dot"></i>
        </button>

        <button className="MCP" id='ALO' style={active6 ? change1 : change2} onDoubleClick={changeColor6} onContextMenu={handleContextMenu}>
          <i class="fa-solid fa-dumpster"></i>
        </button>
       




        {<svg className="line" width="1000" height="500" xmlns="http://www.w3.org/2000/svg">
          {/* FACTORY -> MCP1 [0]*/}
          {!flag1 && <CardinalCurve data={lisdata[0].line1} beta={bundleBeta} showPoints={false} stroke={routeF1 == 1 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag1 && <CardinalCurve data={lisdata[0].line2} beta={bundleBeta} showPoints={false} stroke={routeF1 == 2 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag1 && <CardinalCurve data={lisdata[0].line3} beta={bundleBeta} showPoints={false} stroke={routeF1 == 3 ? '#14842f' : '#e84434'} strokeWidth={3} />}

          {/* MCP1->MCP2 [1]*/}
          {!flag1 && !flag2 && <CardinalCurve data={lisdata[1].line1} beta={bundleBeta} showPoints={false} stroke={route12 == 1 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag1 && !flag2 && <CardinalCurve data={lisdata[1].line2} beta={bundleBeta} showPoints={false} stroke={route12 == 2 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag1 && !flag2 && <CardinalCurve data={lisdata[1].line3} beta={bundleBeta} showPoints={false} stroke={route12 == 3 ? '#14842f' : '#e84434'} strokeWidth={3} />}

          {/* MCP2->MCP3 [2]*/}
          {!flag2 && !flag3 && <CardinalCurve data={lisdata[2].line1} beta={bundleBeta} showPoints={false} stroke={route23 == 1 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag2 && !flag3 && <CardinalCurve data={lisdata[2].line2} beta={bundleBeta} showPoints={false} stroke={route23 == 2 ? '#14842f' : '#e84434'} strokeWidth={3} />}

          {/* MCP1->MCP3 [3]*/}
          {!flag1 && !flag3 && <CardinalCurve data={lisdata[3].line1} beta={bundleBeta} showPoints={false} stroke={'#14842f'} strokeWidth={3} />}

          {/* MCP2->MCP4 [4]*/}
          {!flag2 && !flag4 && <CardinalCurve data={lisdata[4].line1} beta={bundleBeta} showPoints={false} stroke={route24 == 1 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag2 && !flag4 && <CardinalCurve data={lisdata[4].line2} beta={bundleBeta} showPoints={false} stroke={route24 == 2 ? '#14842f' : '#e84434'} strokeWidth={3} />}

          {/* MCP3->MCP4 [5]*/}
          {!flag4 && !flag3 && <CardinalCurve data={lisdata[5].line1} beta={bundleBeta} showPoints={false} stroke={route34 == 1 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag4 && !flag3 && <CardinalCurve data={lisdata[5].line2} beta={bundleBeta} showPoints={false} stroke={route34 == 2 ? '#14842f' : '#e84434'} strokeWidth={3} />}

          {/* MCP3->MCP5 [6] */}
          {!flag5 && !flag3 && <CardinalCurve data={lisdata[6].line1} beta={bundleBeta} showPoints={false} stroke={route35 == 1 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag5 && !flag3 && <CardinalCurve data={lisdata[6].line2} beta={bundleBeta} showPoints={false} stroke={route35 == 2 ? '#14842f' : '#e84434'} strokeWidth={3} />}

          {/* MCP4->ALO [7] */}
          {!flag4 && !flag6 && <CardinalCurve data={lisdata[7].line1} beta={bundleBeta} showPoints={false} stroke={route4F == 1 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag4 && !flag6 && <CardinalCurve data={lisdata[7].line2} beta={bundleBeta} showPoints={false} stroke={route4F == 2 ? '#14842f' : '#e84434'} strokeWidth={3} />}

          {/* MCP5->ALO [8] */}
          {!flag5 && !flag6 && <CardinalCurve data={lisdata[8].line1} beta={bundleBeta} showPoints={false} stroke={'#14842f'} strokeWidth={3} />}

          {/* MCP3->ALO [9] */}
          {!flag3 && !flag6 && <CardinalCurve data={lisdata[9].line1} beta={bundleBeta} showPoints={false} stroke={'#14842f'} strokeWidth={3} />}

          {/* Factory->MCP5 [10] */}
          {!flag5 && <CardinalCurve data={lisdata[10].line1} beta={bundleBeta} showPoints={false} stroke={'#14842f'} strokeWidth={3} />}

          {/* MCP4->MCP7 [11] */}
          {!flag4 && !flag7 && <CardinalCurve data={lisdata[11].line1} beta={bundleBeta} showPoints={false} stroke={route47 == 1 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag4 && !flag7 && <CardinalCurve data={lisdata[11].line2} beta={bundleBeta} showPoints={false} stroke={route47 == 2 ? '#14842f' : '#e84434'} strokeWidth={3} />}

          {/* MCP7->MCP8 [12] */}
          {!flag8 && !flag7 && <CardinalCurve data={lisdata[12].line1} beta={bundleBeta} showPoints={false} stroke={route78 == 1 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag8 && !flag7 && <CardinalCurve data={lisdata[12].line2} beta={bundleBeta} showPoints={false} stroke={route78 == 2 ? '#14842f' : '#e84434'} strokeWidth={3} />}

          {/* MCP8->ALO [13] */}
          {!flag8 && !flag6 && <CardinalCurve data={lisdata[13].line1} beta={bundleBeta} showPoints={false} stroke={route8F == 1 ? '#14842f' : '#e84434'} strokeWidth={3} />}
          {!flag8 && !flag6 && <CardinalCurve data={lisdata[13].line2} beta={bundleBeta} showPoints={false} stroke={route8F == 2 ? '#14842f' : '#e84434'} strokeWidth={3} />}

          {/* MCP2->MCP7 [14] */}
          {!flag2 && !flag7 && <CardinalCurve data={lisdata[14].line1} beta={bundleBeta} showPoints={false} stroke={'#14842f'} strokeWidth={3} />}






        </svg>}








        <Range
          label="beta"
          max={1}
          value={bundleBeta}
          setValue={setBundleBeta}
        />

        {show && !show1 &&
          <div className="popup__collector" style={{ top: top, left: left }}>
            <header className="popup__collector-header">
              <h2 className="header__heading">Phân công janitor</h2>
            </header>
            <div className="popup__collector-content">
              <div className="select__group">
                <div className="select__group-search">
                  <input className="select__group-search_input" placeholder='Tìm nhóm' />
                  <i className="search-icon fa-solid fa-magnifying-glass"></i>
                </div>
                <ul className="select__group-table">
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 1' />
                    <label className="table_item-label">Nguyễn Văn A</label>
                  </li>
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 2' />
                    <label className="table_item-label">Nguyễn Văn B</label>
                  </li>
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 3' />
                    <label className="table_item-label">Nguyễn Văn C</label>
                  </li>
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 4' />
                    <label className="table_item-label">Nguyễn Văn D</label>
                  </li>
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 5' />
                    <label className="table_item-label">Nguyễn Văn E</label>
                  </li>
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 5' />
                    <label className="table_item-label">Nguyễn Văn F</label>
                  </li>


                </ul>
              </div>
              <div className="select__vehicleShift">
                <div className='select__vehicle'>
                  <label className="select__vehicle-label">Chọn số xe</label>
                  <select className="select__vehicle-table">
                    <option>1 xe</option>
                    <option>2 xe</option>
                    <option>3 xe</option>
                    <option>4 xe</option>
                    <option>5 xe</option>
                    <option>6 xe</option>
                  </select>
                </div>
                <div className='select__shift'>
                  <label className="select__shift-label">Phân công ca</label>
                  <select className="select__shift-table">
                    <option>Ca 1</option>
                    <option>Ca 2</option>
                    <option>Ca 3</option>
                    <option>Ca 4</option>
                    <option>Ca 5</option>
                    <option>Ca 6</option>
                  </select>
                </div>
              </div>

            </div>
            <footer className="popup__collector-footer">
              <button className="footer-clear BTN" onClick={turnOffJanitor}>Hủy</button>
              <button className="footer-submit BTN" onClick={turnOffJanitor} >Xác nhận</button>
            </footer>

          </div>
        }
        {show1 && !show &&
          <div className="popup__collector" style={{ top: top, left: left }}>
            <header className="popup__collector-header">
              <h2 className="header__heading">Phân công collector</h2>
            </header>
            <div className="popup__collector-content">
              <div className="select__group">
                <div className="select__group-search">
                  <input className="select__group-search_input" placeholder='Tìm nhóm' />
                  <i className="search-icon fa-solid fa-magnifying-glass"></i>
                </div>
                <ul className="select__group-table">
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 1' />
                    <label className="table_item-label">Nguyễn Văn A</label>
                  </li>
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 2' />
                    <label className="table_item-label">Nguyễn Văn B</label>
                  </li>
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 3' />
                    <label className="table_item-label">Nguyễn Văn C</label>
                  </li>
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 4' />
                    <label className="table_item-label">Nguyễn Văn D</label>
                  </li>
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 5' />
                    <label className="table_item-label">Nguyễn Văn E</label>
                  </li>
                  <li className="select__group-table_item">
                    <input className="table_item-input" type='checkbox' value='Nhóm 5' />
                    <label className="table_item-label">Nguyễn Văn F</label>
                  </li>


                </ul>
              </div>
              <div className="select__vehicleShift">
                <div className='select__vehicle'>
                  <label className="select__vehicle-label">Phân công xe</label>
                  <select className="select__vehicle-table">
                    <option>Xe 1</option>
                    <option>Xe 2</option>
                    <option>Xe 3</option>
                    <option>Xe 4</option>
                    <option>Xe 5</option>
                    <option>Xe 6</option>
                  </select>
                </div>
                <div className='select__shift'>
                  <label className="select__shift-label">Phân công ca</label>
                  <select className="select__shift-table">
                    <option>Ca 1</option>
                    <option>Ca 2</option>
                    <option>Ca 3</option>
                    <option>Ca 4</option>
                    <option>Ca 5</option>
                    <option>Ca 6</option>
                  </select>
                </div>
              </div>

            </div>
            <footer className="popup__collector-footer">
              <button className="footer-clear BTN" onClick={turnOffCollector}>Hủy</button>
              <button className="footer-submit BTN" onClick={turnOffCollector} >Xác nhận</button>
            </footer>

          </div>}
      </div>
      <div className="show">
        <div class="dashboard__product">
          <h3 class="dashboard__product-heading"> DETAIL</h3>
          <table class="dashboard__product-table table-border">
            <thead>
              <tr>
                <th>Tên nhóm</th>
                <th>Đường đi</th>
                <th>Ca làm</th>
                <th>Vehicle</th>
                <th>Chức vụ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AL3947</td>
                <td>Phạm Văn Đồng</td>
                <td>8h-11h</td>
                <th>Xe rác</th>
                <td><span class="badge bg-warning">Janitor</span></td>
              </tr>
              <tr>
                <td>AL3947</td>
                <td>Phạm Văn Đồng</td>
                <td>8h-11h</td>
                <th>Xe rác</th>
                <td><span class="badge bg-warning">Janitor</span></td>
              </tr>
              <tr>
                <td>AL3947</td>
                <td>Phạm Văn Đồng</td>
                <td>8h-11h</td>
                <th>Xe rác</th>
                <td><span class="badge bg-warning">Janitor</span></td>
              </tr>
              <tr>
                <td>AL3947</td>
                <td>Phạm Văn Đồng</td>
                <td>8h-11h</td>
                <th>Xe rác</th>
                <td><span class="badge bg-success">Collector</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default Task;