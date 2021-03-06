export interface ITeacher {
    id: string
    first_name: string
    last_name: string
    last_signed: string
    profile_picture: string
    numSponsees: number
}
//interface for insert a new teacher
export interface ITeacherInput {
    name: string;
}