
 interface CreateStudentrequest {
    name: string,
    grade: string
}

 interface UpdateStudentRequest {
    name?: string,
    grade?: string
}

export { CreateStudentrequest, UpdateStudentRequest }