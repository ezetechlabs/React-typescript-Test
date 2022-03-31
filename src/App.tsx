import React from 'react';
import FullCalendar,{EventContentArg,EventClickArg,DateSelectArg,EventApi} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import allLocales from "@fullcalendar/core/locales-all"
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';

import './App.css';

let id=0;
function App() {

    const [events,setEvents]=React.useState<Array<EventApi>>([])
    const [initialEvents, setInitialEvents] = React.useState([
        {
            id: String(10001),
            title: "Ergeon test 1",
            start: new Date().toISOString().split("T")[0]
        },
        {
            id: String(20002),
            title: "Ergeon test 2",
            start: new Date().toISOString().split("T")[0] + "T14:05:00"
        }
    ])

    React.useEffect(()=>{
            console.log("eventler",events)
    },[events])

    const handleEvents=(events:EventApi[])=>{
        setEvents(events)
    }

    const renderEventContent = (eventContent: EventContentArg) => {
        return (
            <>
                <b> {eventContent.timeText}</b>
                <b style={{color: "white"}}> {eventContent.event.title}</b>

            </>
        )
    }

    const handleEventClick = (clickInfo: EventClickArg) => {
        alert(`Clicked Event ${clickInfo.event.title}`)
        console.log(clickInfo.event.id)
        clickInfo.event.remove()
    }

    const handleDateSelect = (selectInfo: DateSelectArg) => {
        let title = prompt("Enter Event Name");
        let calenderApi = selectInfo.view.calendar
        calenderApi.unselect()
        if(title){
            calenderApi.addEvent({
                 id:String(id++),
                title,
                start:selectInfo.startStr,
                end:selectInfo.endStr,
                allDay:selectInfo.allDay
            })
        }
}

  return (
    <>
        <Header />
        
        <Container className="mt-5">
            <Row>
            <FullCalendar
                    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    customButtons={{
                        btn:{
                            text:"Buton",
                            click(ev: MouseEvent, element: HTMLElement) {
                                alert("Special Button Clicked")
                            }
                        }
                    }}
                    dateClick={(e)=>{
                            console.log("dateclick",e)
                    }}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                    eventContent={renderEventContent}
                    initialEvents={initialEvents}
                    headerToolbar={{
                        left:"prev,next today btn",
                        center:"title",
                        right:"timeGridWeek,timeGridDay"
                    }}
                    initialView="timeGridWeek"
                    selectable={true}
                    editable={true}
                    eventDragStart={(e)=>{
                        console.log("started to drag")
                    }}
                    eventDragStop={(e)=>{
                        console.log("stopped dragging")
                    }}
                    eventBackgroundColor={"blue"}
                    eventBorderColor={"purple"}
                    eventRemove={(e)=>{
                        console.log("event deleted")
                    }}
                    eventsSet={handleEvents}
                    /*dayHeaderFormat={{
                        week:"short",
                        day:"numeric",
                        month:"short"
                    }}*/
                        eventAdd={(e)=>{
                                console.log("new event added",e)
                        }}
                    eventChange={(e)=>{
                        console.log("event changed",e)
                    }}
                    dayMaxEvents={true}
                    weekends={true}
                    locales={allLocales}
                    firstDay={1}
                    locale={"en"}
                    buttonText={{
                        day:"Day",
                        prev:"Prev",
                        next:"Next",
                        today:"Today",
                        week:"Week"
                    }}
                    />
            </Row>
        </Container>
    </>
  );
}

export default App;