const FACULTY = document.getElementById('FACULTY')
const STUDENT = document.getElementById('STUDENT')

FACULTY.onclick=()=>{
    FACULTY.style.backgroundColor='var(--textColorHover)'
    STUDENT.style.backgroundColor='transparent'
    document.body.classList.add('ONLYFACULTY')
    document.body.classList.remove('ONLYSTUDENTS')
    console.log('FACULTY')
}
STUDENT.onclick=()=>{
    STUDENT.style.backgroundColor='var(--textColorHover)'
    FACULTY.style.backgroundColor='transparent'
    document.body.classList.add('ONLYSTUDENTS')
    document.body.classList.remove('ONLYFACULTY')
}