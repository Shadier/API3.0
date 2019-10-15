export interface ITeacher {
    id: string
    first_name: string
    last_name: string
    profile_picture: string
    numSponsors: number
}
//interface for insert a new teacher
export interface ITeacherInput {
    name: string;
}