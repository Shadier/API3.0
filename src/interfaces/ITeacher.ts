export interface ITeacher {
    id: string
    bio: string
    birth_date: Date
    email: string
    first_name: string
    last_name: string
    last_signed: Date
    password: string
    profile_picture: string
}
//interface for insert a new teacher
export interface ITeacherInput {
    name: string;
}