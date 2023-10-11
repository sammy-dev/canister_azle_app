export const idlFactory = ({ IDL }) => {
  const EducationHistoryPayload = IDL.Record({
    'gpa' : IDL.Float64,
    'institutionName' : IDL.Text,
    'description' : IDL.Text,
    'yearOfGraduation' : IDL.Nat64,
    'yearOfEntry' : IDL.Nat64,
    'educationLevel' : IDL.Text,
    'fieldOfStudy' : IDL.Text,
  });
  const EducationHistory = IDL.Record({
    'id' : IDL.Text,
    'gpa' : IDL.Float64,
    'institutionName' : IDL.Text,
    'userId' : IDL.Text,
    'createdAt' : IDL.Nat64,
    'description' : IDL.Text,
    'yearOfGraduation' : IDL.Nat64,
    'yearOfEntry' : IDL.Nat64,
    'educationLevel' : IDL.Text,
    'fieldOfStudy' : IDL.Text,
  });
  const _AzleResult = IDL.Variant({
    'Ok' : EducationHistory,
    'Err' : IDL.Text,
  });
  const JobPayload = IDL.Record({
    'salary' : IDL.Text,
    'description' : IDL.Text,
    'requirements' : IDL.Text,
    'position' : IDL.Text,
    'location' : IDL.Text,
  });
  const Job = IDL.Record({
    'id' : IDL.Text,
    'salary' : IDL.Text,
    'createdAt' : IDL.Nat64,
    'postStatus' : IDL.Bool,
    'description' : IDL.Text,
    'updatedAt' : IDL.Opt(IDL.Nat64),
    'requirements' : IDL.Text,
    'position' : IDL.Text,
    'location' : IDL.Text,
    'postOwner' : IDL.Text,
    'companyId' : IDL.Text,
  });
  const _AzleResult_1 = IDL.Variant({ 'Ok' : Job, 'Err' : IDL.Text });
  const WorkHistoryPayload = IDL.Record({
    'salary' : IDL.Text,
    'yearStarted' : IDL.Nat64,
    'description' : IDL.Text,
    'yearEnded' : IDL.Nat64,
    'companyName' : IDL.Text,
    'position' : IDL.Text,
  });
  const WorkHistory = IDL.Record({
    'id' : IDL.Text,
    'salary' : IDL.Text,
    'yearStarted' : IDL.Nat64,
    'userId' : IDL.Text,
    'createdAt' : IDL.Nat64,
    'description' : IDL.Text,
    'yearEnded' : IDL.Nat64,
    'companyName' : IDL.Text,
    'position' : IDL.Text,
  });
  const _AzleResult_2 = IDL.Variant({ 'Ok' : WorkHistory, 'Err' : IDL.Text });
  const JobApplicationPayload = IDL.Record({
    'resume' : IDL.Text,
    'portofolio' : IDL.Opt(IDL.Text),
    'jobId' : IDL.Text,
    'coverLetter' : IDL.Text,
  });
  const JobApplication = IDL.Record({
    'id' : IDL.Text,
    'resume' : IDL.Text,
    'userId' : IDL.Text,
    'portofolio' : IDL.Opt(IDL.Text),
    'jobId' : IDL.Text,
    'coverLetter' : IDL.Text,
    'applicationDate' : IDL.Nat64,
  });
  const _AzleResult_3 = IDL.Variant({
    'Ok' : JobApplication,
    'Err' : IDL.Text,
  });
  const CompanyPayload = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'email' : IDL.Text,
    'address' : IDL.Text,
    'phone' : IDL.Text,
  });
  const Company = IDL.Record({
    'id' : IDL.Text,
    'admin' : IDL.Text,
    'name' : IDL.Text,
    'createdAt' : IDL.Nat64,
    'description' : IDL.Text,
    'email' : IDL.Text,
    'address' : IDL.Text,
    'phone' : IDL.Text,
  });
  const _AzleResult_4 = IDL.Variant({ 'Ok' : Company, 'Err' : IDL.Text });
  const _AzleResult_5 = IDL.Variant({
    'Ok' : IDL.Vec(EducationHistory),
    'Err' : IDL.Text,
  });
  const _AzleResult_6 = IDL.Variant({ 'Ok' : IDL.Vec(Job), 'Err' : IDL.Text });
  const _AzleResult_7 = IDL.Variant({
    'Ok' : IDL.Vec(WorkHistory),
    'Err' : IDL.Text,
  });
  const UsersPayload = IDL.Record({
    'fullName' : IDL.Text,
    'email' : IDL.Text,
    'phone' : IDL.Text,
  });
  const Users = IDL.Record({
    'id' : IDL.Text,
    'fullName' : IDL.Text,
    'email' : IDL.Text,
    'phone' : IDL.Text,
    'registeredAt' : IDL.Nat64,
  });
  const _AzleResult_8 = IDL.Variant({ 'Ok' : Users, 'Err' : IDL.Text });
  return IDL.Service({
    'addEducationHistory' : IDL.Func(
        [EducationHistoryPayload],
        [_AzleResult],
        [],
      ),
    'addJobPost' : IDL.Func([JobPayload], [_AzleResult_1], []),
    'addWorkHistory' : IDL.Func([WorkHistoryPayload], [_AzleResult_2], []),
    'applyJobPost' : IDL.Func([JobApplicationPayload], [_AzleResult_3], []),
    'closeJobPost' : IDL.Func([IDL.Text], [_AzleResult_1], []),
    'companyRegister' : IDL.Func([CompanyPayload], [_AzleResult_4], []),
    'getEducationHistory' : IDL.Func([], [_AzleResult_5], ['query']),
    'getJobPostList' : IDL.Func([], [_AzleResult_6], ['query']),
    'getJobPostListByCompany' : IDL.Func(
        [IDL.Text],
        [_AzleResult_6],
        ['query'],
      ),
    'getWorkHistory' : IDL.Func([], [_AzleResult_7], ['query']),
    'removeCompany' : IDL.Func([IDL.Text], [_AzleResult_4], []),
    'removeEducationHistory' : IDL.Func([IDL.Text], [_AzleResult], []),
    'removeJobPost' : IDL.Func([IDL.Text], [_AzleResult_1], []),
    'removeWorkHistory' : IDL.Func([IDL.Text], [_AzleResult_2], []),
    'updateCompany' : IDL.Func([IDL.Text, CompanyPayload], [_AzleResult_4], []),
    'updateEducationHistory' : IDL.Func(
        [IDL.Text, EducationHistoryPayload],
        [_AzleResult],
        [],
      ),
    'updateJobPost' : IDL.Func([IDL.Text, JobPayload], [_AzleResult_1], []),
    'updateWorkHistory' : IDL.Func(
        [IDL.Text, WorkHistoryPayload],
        [_AzleResult_2],
        [],
      ),
    'userRegister' : IDL.Func([UsersPayload], [_AzleResult_8], []),
  });
};
export const init = ({ IDL }) => { return []; };
