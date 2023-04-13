import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { COLLECTOR_EVENTS, handleDateSelect, renderEventContent, handleEventClick } from './utils/event-utils'
import './styles/Calendar.css';
import { Container, Row, Col } from 'react-bootstrap'
import './styles/ListEmployee.css'
import { RiMore2Fill } from "react-icons/ri"
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function EmployeeInformation(props) {
    let TypeClass = 'employeeinfor-jobtype'
    let StateClass = 'employeeinfor-state-icon'
    if (props.State === 'Bận') StateClass = 'employeeinfor-state-icon-1'
    if (props.Type === 'COLLECTOR') TypeClass = 'employeeinfor-jobtype-1'
    else if (props.Type === 'JANITOR') TypeClass = 'employeeinfor-jobtype-2'
    return (
        <div className='employeeinfor-wrap'>
            <div className='employeeinfor-col1'>
                <div className='employeeinfor-img'>
                    <img className='employee-img' src={props.Url} alt='avatar'></img>
                </div>
            </div>
            <div className='employeeinfor-col2'>
                <div className='employeeinfor-name'>
                    {props.Name}
                </div>
                <div className='employeeinfor-state'>
                    <div className={StateClass}></div>
                    <div className='employee-state'>{props.State}</div>
                </div>
            </div>
            <div className='employeeinfor-col3'>
                {props.Group}
            </div>
            <div className='employeeinfor-col4'>
                <div className='employeeinfor-date'>
                    {props.Dateonline}
                </div>
                <div className='employeeinfor-time'>
                    {props.Timeonline}
                </div>
            </div>
            <div className='employeeinfor-col5'>
                <div className={TypeClass}>
                    {props.Type}
                </div>
            </div>
            <div className='employeeinfor-col6'>
                <RiMore2Fill className='employeeicon-3dot' size={30} />
            </div>
        </div >
    )
}
function CollectorCalendar() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/Dashboard/DSNV');
    }

    return (
        <>
            {/* <Sidebar/> */}
            <Container className = "calendarContainer" fluid>
                <Row>
                    <div className='employeeDetail-header'>
                        <div className='employeeDetail-icon' onClick={()=>handleBack()}>
                            <FaChevronLeft  size={18} />
                        </div>
                        <div className='listemployee-header-1'>
                            Lịch làm việc nhân viên
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className='listemployee-1'>
                        <div className='listemployee-title'>
                            <div className='employeeinfor-col1'></div>
                            <div className='employeeinfor-col2'>
                                Tên nhân viên
                            </div>
                            <div className='employeeinfor-col3'>
                                Nhóm
                            </div>
                            <div className='employeeinfor-col4'>
                                Date
                            </div>
                            <div className='employeeinfor-col5'>
                                Type
                            </div>
                            <div className='employeeinfor-col6'></div>
                        </div>
                        <EmployeeInformation Url='https://scontent.fsgn13-3.fna.fbcdn.net/v/t31.18172-8/883636_150884578611082_1416228407169249202_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=68LV9NThNZYAX-LPw5c&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfCKDVIE9cq-7S8fUMUdVZfLG_-f9J5o0nweK15FJU5gJQ&oe=63B56104' Name='Nguyễn Lê Minh Bảo' State='Bận' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='COLLECTOR' />
                    </div>
                </Row>
                <Row>
                    <Col className="calendar">
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            headerToolbar={{
                                start: '', // will normally be on the left. if RTL, will be on the right
                                center: 'title',
                                end: 'prev,next' // will normally be on the right. if RTL, will be on the left
                            }}
                            allDaySlot={false}
                            editable={true}
                            selectable={true}
                            selectMirror={true}
                            dayMaxEvents={true}
                            contentHeight="auto" // 
                            weekends={true}
                            initialEvents={COLLECTOR_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                            select={handleDateSelect}
                            eventContent={renderEventContent} // custom render function
                            eventClick={(e)=>{handleEventClick(navigate,"collector")}}
                            themeSystem="bootstrap"
                        // no html escape
                        // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                        /* you can update a remote database when these fire:
                        eventAdd={function(){}}
                        eventChange={function(){}}
                        eventRemove={function(){}}
                        */
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CollectorCalendar;