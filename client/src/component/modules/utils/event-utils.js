import { formatDate } from '@fullcalendar/react'
import { useNavigate } from 'react-router-dom'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


export const COLLECTOR_EVENTS = [
    {
        id: createEventId(),
        title: 'Road ID : 120 - Distance : 9km',
        // start on 6am
        start: todayStr + 'T06:00:00',
        // end on 8am
        end: todayStr + 'T08:00:00',
        // display: 'background',
        // backgroundColor: '#ff9f89',
    },
    {
        id: createEventId(),
        title: 'Road ID : 120 - Distance : 9km',
        // start on 6am
        start: '2022-12-25T06:00:00',
        // end on 8am
        end: '2022-12-25T08:00:00',
        // display: 'background',
        // backgroundColor: '#ff9f89',
    },
    {
        id: createEventId(),
        title: 'Road ID : 120 - Distance : 9km',
        // start on 6am
        start: '2022-12-17T06:00:00',
        // end on 8am
        end: '2022-12-17T08:00:00',
        // display: 'background',
        // backgroundColor: '#ff9f89',
    },    {
        id: createEventId(),
        title: 'Road ID : 120 - Distance : 9km',
        // start on 6am
        start: '2022-12-20T06:00:00',
        // end on 8am
        end: '2022-12-20T08:00:00',
        // display: 'background',
        // backgroundColor: '#ff9f89',
    },
]
export const JANITOR_EVENTS = [
    {
        id: createEventId(),
        title: 'Area : Evergreen - MCP : (2,7,9) - Group : 1',
        // start on 6am
        start: todayStr + 'T06:00:00',
        // end on 8am
        end: todayStr + 'T08:00:00',
        // display: 'background',
        // backgroundColor: '#ff9f89',
    },
    {
        id: createEventId(),
        title: 'Area : North Wood - MCP : (2,12,3) - Group : 1',
        // start on 6am
        start: '2022-12-20T06:00:00',
        // end on 8am
        end: '2022-12-20T08:00:00',
        // display: 'background',
        // backgroundColor: '#ff9f89',
    },
    {
        id: createEventId(),
        title: 'Area : Evergreen - MCP : (2,7,9) - Group : 1',
        // start on 6am
        start: '2022-12-25T06:00:00',
        // end on 8am
        end: '2022-12-25T08:00:00',
        // display: 'background',
        // backgroundColor: '#ff9f89',
    },
    {
        id: createEventId(),
        title: 'Area : Evergreen - MCP : (2,7,9) - Group : 1',
        // start on 6am
        start: '2022-12-26T06:00:00',
        // end on 8am
        end: '2022-12-26T08:00:00',
        // display: 'background',
        // backgroundColor: '#ff9f89',
    },
    {
        id: createEventId(),
        title: 'Area : Evergreen - MCP : (2,7,9) - Group : 1',
        // start on 6am
        start: '2022-12-15T06:00:00',
        // end on 8am
        end: '2022-12-15T08:00:00',
        // display: 'background',
        // backgroundColor: '#ff9f89',
    },
]
export function createEventId() {
    return String(eventGuid++)
}

export function handleDateSelect(selectInfo) {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
        calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
        })
    }
}
export function renderEventContent(eventInfo) {
    // RoadId : 120 - Distance : 9km
    const title = eventInfo.event.title.split(' - ');
    return (
        <>
            <div className = "d-flex justify-content-center flex-column">
                {/* Start time and end time */}
                <div><b>{formatDate(eventInfo.event.start, { hour: 'numeric', minute: 'numeric' })} - {formatDate(eventInfo.event.end, { hour: 'numeric', minute: 'numeric' })}</b></div>
                <div>{title[0]}</div>
                <div>{title[1]}</div>
            </div>
        </>
    )
}
export function handleEventClick(navigate,type) {
    if(type === "collector"){
        navigate('/Dashboard/DSNV/collectorCalendar/detail')
    }
    else {
        navigate('/Dashboard/DSNV/janitorCalendar/detail')
    }
}