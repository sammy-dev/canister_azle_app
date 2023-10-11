import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Company {
  'id' : string,
  'admin' : string,
  'name' : string,
  'createdAt' : bigint,
  'description' : string,
  'email' : string,
  'address' : string,
  'phone' : string,
}
export interface CompanyPayload {
  'name' : string,
  'description' : string,
  'email' : string,
  'address' : string,
  'phone' : string,
}
export interface EducationHistory {
  'id' : string,
  'gpa' : number,
  'institutionName' : string,
  'userId' : string,
  'createdAt' : bigint,
  'description' : string,
  'yearOfGraduation' : bigint,
  'yearOfEntry' : bigint,
  'educationLevel' : string,
  'fieldOfStudy' : string,
}
export interface EducationHistoryPayload {
  'gpa' : number,
  'institutionName' : string,
  'description' : string,
  'yearOfGraduation' : bigint,
  'yearOfEntry' : bigint,
  'educationLevel' : string,
  'fieldOfStudy' : string,
}
export interface Job {
  'id' : string,
  'salary' : string,
  'createdAt' : bigint,
  'postStatus' : boolean,
  'description' : string,
  'updatedAt' : [] | [bigint],
  'requirements' : string,
  'position' : string,
  'location' : string,
  'postOwner' : string,
  'companyId' : string,
}
export interface JobApplication {
  'id' : string,
  'resume' : string,
  'userId' : string,
  'portofolio' : [] | [string],
  'jobId' : string,
  'coverLetter' : string,
  'applicationDate' : bigint,
}
export interface JobApplicationPayload {
  'resume' : string,
  'portofolio' : [] | [string],
  'jobId' : string,
  'coverLetter' : string,
}
export interface JobPayload {
  'salary' : string,
  'description' : string,
  'requirements' : string,
  'position' : string,
  'location' : string,
}
export interface Users {
  'id' : string,
  'fullName' : string,
  'email' : string,
  'phone' : string,
  'registeredAt' : bigint,
}
export interface UsersPayload {
  'fullName' : string,
  'email' : string,
  'phone' : string,
}
export interface WorkHistory {
  'id' : string,
  'salary' : string,
  'yearStarted' : bigint,
  'userId' : string,
  'createdAt' : bigint,
  'description' : string,
  'yearEnded' : bigint,
  'companyName' : string,
  'position' : string,
}
export interface WorkHistoryPayload {
  'salary' : string,
  'yearStarted' : bigint,
  'description' : string,
  'yearEnded' : bigint,
  'companyName' : string,
  'position' : string,
}
export type _AzleResult = { 'Ok' : EducationHistory } |
  { 'Err' : string };
export type _AzleResult_1 = { 'Ok' : Job } |
  { 'Err' : string };
export type _AzleResult_2 = { 'Ok' : WorkHistory } |
  { 'Err' : string };
export type _AzleResult_3 = { 'Ok' : JobApplication } |
  { 'Err' : string };
export type _AzleResult_4 = { 'Ok' : Company } |
  { 'Err' : string };
export type _AzleResult_5 = { 'Ok' : Array<EducationHistory> } |
  { 'Err' : string };
export type _AzleResult_6 = { 'Ok' : Array<Job> } |
  { 'Err' : string };
export type _AzleResult_7 = { 'Ok' : Array<WorkHistory> } |
  { 'Err' : string };
export type _AzleResult_8 = { 'Ok' : Users } |
  { 'Err' : string };
export interface _SERVICE {
  'addEducationHistory' : ActorMethod<[EducationHistoryPayload], _AzleResult>,
  'addJobPost' : ActorMethod<[JobPayload], _AzleResult_1>,
  'addWorkHistory' : ActorMethod<[WorkHistoryPayload], _AzleResult_2>,
  'applyJobPost' : ActorMethod<[JobApplicationPayload], _AzleResult_3>,
  'closeJobPost' : ActorMethod<[string], _AzleResult_1>,
  'companyRegister' : ActorMethod<[CompanyPayload], _AzleResult_4>,
  'getEducationHistory' : ActorMethod<[], _AzleResult_5>,
  'getJobPostList' : ActorMethod<[], _AzleResult_6>,
  'getJobPostListByCompany' : ActorMethod<[string], _AzleResult_6>,
  'getWorkHistory' : ActorMethod<[], _AzleResult_7>,
  'removeCompany' : ActorMethod<[string], _AzleResult_4>,
  'removeEducationHistory' : ActorMethod<[string], _AzleResult>,
  'removeJobPost' : ActorMethod<[string], _AzleResult_1>,
  'removeWorkHistory' : ActorMethod<[string], _AzleResult_2>,
  'updateCompany' : ActorMethod<[string, CompanyPayload], _AzleResult_4>,
  'updateEducationHistory' : ActorMethod<
    [string, EducationHistoryPayload],
    _AzleResult
  >,
  'updateJobPost' : ActorMethod<[string, JobPayload], _AzleResult_1>,
  'updateWorkHistory' : ActorMethod<
    [string, WorkHistoryPayload],
    _AzleResult_2
  >,
  'userRegister' : ActorMethod<[UsersPayload], _AzleResult_8>,
}
