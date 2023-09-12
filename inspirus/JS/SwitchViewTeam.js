const FACULTY = document.getElementById('FACULTY')
const STUDENT = document.getElementById('STUDENT')

FACULTY.onclick=()=>{
    if(FACULTY.style.backgroundColor!='var(--textColorHover)'){
    FACULTY.style.backgroundColor='var(--textColorHover)'
    STUDENT.style.backgroundColor='transparent'
    document.body.classList.add('ONLYFACULTY')
    document.body.classList.remove('ONLYSTUDENTS')
    console.log('FACULTY')    
    }else{
    FACULTY.style.backgroundColor='transparent'
    STUDENT.style.backgroundColor='transparent'
    document.body.classList.remove('ONLYFACULTY')
    document.body.classList.remove('ONLYSTUDENTS')
    console.log('FACULTY')    
    }
    
}
STUDENT.onclick=()=>{
    if(STUDENT.style.backgroundColor!='var(--textColorHover)'){
        STUDENT.style.backgroundColor='var(--textColorHover)'
        FACULTY.style.backgroundColor='transparent'
        document.body.classList.add('ONLYSTUDENTS')
        document.body.classList.remove('ONLYFACULTY')
    }
    else{
        STUDENT.style.backgroundColor='transparent'
        FACULTY.style.backgroundColor='transparent'
        document.body.classList.remove('ONLYSTUDENTS')
        document.body.classList.remove('ONLYFACULTY')
    }
}