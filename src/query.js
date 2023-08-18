const getClass = `select id, className, status from class`

const addClass = `insert into class(className, status) values($1,$2)`

const getClassBy_id = 'select id, className, status from class where id = $1'

const updateClass = 'update class set className = $1, status = $2 where id = $3'

const deleteClass = `delete from class where id = $1`


const createSection = 'insert into sections(class_id, section_name, status) values($1,$2,$3)'

const getSectionBy_Id = 'select id, class_id, section_name, status from sections where id = $1'

const getSections = 'select id, class_id, section_name, status from sections'

const updateSection = 'update sections set class_id = $1, section_name = $2, status = $3 where id = $4'

const deleteSection = 'delete from sections where id = $1'


const addStudents = 'insert into students(first_name, middle_name, last_name, dob, gender, address, nationality, parent_guardian_name, parent_guardian_phone, roll_number, emergency_contact_number, status) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)'

const getStudents = `select id, first_name, last_name, dob, gender, roll_number, status from students`

const getStudentBy_Id = `select id, first_name, last_name, dob, gender, roll_number, status from students where id = $1`

const updateStudent = `update students set first_name = $1, last_name = $2, dob = $3, address = $4, roll_number = $5, status = $6 where id = $7`

const deleteStudent = `delete from students where id = $1`


const checkEnrollment = `insert into enrollment(section_id, student_id, status) values($1, $2, $3)`

const getEnrollments = 'select id, section_id, student_id, status from enrollment'

const getEnrollmentBy_Id = `select id, section_id, section_id, status from enrollment where id = $1 `

const updateEnrollment = `update enrollment set section_id = $1, student_id = $2, status = $3 where id = $4`

const deleteEnrollment = `delete from enrollment where id = $1`


const createSubject = `insert into subjects (subject_name, status) values($1,$2)`

const updateSubject = `update subjects set subject_name = $1, status = $2 where id = $3`

const getSubjects = `select subject_name, status from subjects`

const getSubjectBy_Id = `select subject_name, status from subjects where id = $1`

const deleteSubject = `delete from subjects where id = $1`


const createMarks = `insert into marks(enrollment_id, subject_id, total_marks, obtained_marks, status) values($1,$2,$3,$4,$5)`

const getAllMarks = `select enrollment_id, subject_id, total_marks, obtained_marks, status from marks`

const getMarksBy_Id = `select enrollment_id, subject_id, total_marks, obtained_marks, status from marks where id = $1`

const updateMarks = `update marks set obtained_marks = $1, status = $2 where id = $3`

const deleteMarks = `delete from marks where id = $1`


module.exports = { getClass, addClass, getClassBy_id, updateClass, deleteClass, createSection, getSectionBy_Id, getSections, updateSection, deleteSection, addStudents, getStudents, getStudentBy_Id, updateStudent, deleteStudent, checkEnrollment, getEnrollments, getEnrollmentBy_Id, updateEnrollment, deleteEnrollment, createSubject, updateSubject, getSubjects, getSubjectBy_Id, deleteSubject, createMarks, getAllMarks, getMarksBy_Id, updateMarks, deleteMarks }