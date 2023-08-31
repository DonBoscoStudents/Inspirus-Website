/* eslint-disable react/prop-types */
const Next=(props)=><svg xmlns="http://www.w3.org/2000/svg" width={props.Size?props.Size:32} height={props.Size?props.Size:32} viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 18q-.425 0-.713-.288T16.5 17V7q0-.425.288-.713T17.5 6q.425 0 .713.288T18.5 7v10q0 .425-.288.713T17.5 18ZM7.05 16.975q-.5.35-1.025.05t-.525-.9v-8.25q0-.6.525-.888t1.025.038l6.2 4.15q.45.3.45.825t-.45.825l-6.2 4.15Z"/></svg>

const Prev=(props)=><svg xmlns="http://www.w3.org/2000/svg" width={props.Size?props.Size:32} height={props.Size?props.Size:32} viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 18q-.425 0-.713-.288T5.5 17V7q0-.425.288-.713T6.5 6q.425 0 .713.288T7.5 7v10q0 .425-.288.713T6.5 18Zm10.45-1.025l-6.2-4.15q-.45-.3-.45-.825t.45-.825l6.2-4.15q.5-.325 1.025-.037t.525.887v8.25q0 .6-.525.9t-1.025-.05Z"/></svg>

const Play=(props)=><svg xmlns="http://www.w3.org/2000/svg" width={props.Size?props.Size:32} height={props.Size?props.Size:32} viewBox="0 0 24 24"><path fill="currentColor" d="M9.525 18.025q-.5.325-1.012.038T8 17.175V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.45.3.45.85t-.45.85l-8.15 5.175Z"/></svg>

const Pause=(props)=><svg xmlns="http://www.w3.org/2000/svg" width={props.Size?props.Size:32} height={props.Size?props.Size:32} viewBox="0 0 24 24"><path fill="currentColor" d="M16 19q-.825 0-1.413-.588T14 17V7q0-.825.588-1.413T16 5q.825 0 1.413.588T18 7v10q0 .825-.588 1.413T16 19Zm-8 0q-.825 0-1.413-.588T6 17V7q0-.825.588-1.413T8 5q.825 0 1.413.588T10 7v10q0 .825-.588 1.413T8 19Z"/></svg>

const Back = (props)=><svg xmlns="http://www.w3.org/2000/svg" width={props.Size?props.Size:32} height={props.Size?props.Size:32} viewBox="0 0 24 24"><path fill="currentColor" d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.425 12q0-.2.063-.375T4.7 11.3l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.825Z"/></svg>

function DarkMode (props) {
    if(props.Mode=='Dark'){
        return<svg xmlns="http://www.w3.org/2000/svg" width={props.Size?props.Size:32} height={props.Size?props.Size:32} viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.775 0-6.388-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.525-.35 1.075-.037t.475.987q-.35 3.45-2.937 5.725T12 21Z"/></svg>
    }else{
        return<svg xmlns="http://www.w3.org/2000/svg" width={props.Size?props.Size:32} height={props.Size?props.Size:32} viewBox="0 0 24 24"><path fill="currentColor" d="M12 4q-.425 0-.713-.288T11 3V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v1q0 .425-.288.713T12 4Zm0 19q-.425 0-.713-.288T11 22v-1q0-.425.288-.713T12 20q.425 0 .713.288T13 21v1q0 .425-.288.713T12 23Zm9-10q-.425 0-.713-.288T20 12q0-.425.288-.713T21 11h1q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-1ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h1q.425 0 .713.288T4 12q0 .425-.288.713T3 13H2Zm16-7q-.275-.275-.275-.688T18 4.6l.35-.375q.275-.3.7-.3t.725.3q.3.3.3.725t-.3.725l-.375.35q-.3.275-.7.275T18 6ZM4.225 19.775q-.3-.3-.3-.725t.3-.725l.375-.35q.3-.275.7-.275t.7.3q.275.275.288.7T6 19.4l-.35.375q-.275.3-.7.3t-.725-.3Zm14.1 0l-.35-.375q-.275-.3-.275-.7t.3-.7q.275-.275.7-.287t.7.287l.375.35q.3.275.3.7t-.3.725q-.3.3-.725.3t-.725-.3ZM4.6 6l-.375-.35q-.3-.275-.3-.7t.3-.725q.3-.3.725-.3t.725.3l.35.375q.275.3.275.7T6 6q-.275.275-.687.275T4.6 6ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"/></svg>
    }
}



export {Next,Prev,Play,Pause,DarkMode,Back}