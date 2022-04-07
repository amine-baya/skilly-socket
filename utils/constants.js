// export const baseUrl = 'http://localhost:5100';
export const baseUrl = 'http://65.0.176.119:5087'
export const typesenseUrl = 'http://13.233.137.22:3020/typesense/'
export const baseUrlProfilePic =
  'https://akbh.s3.ap-south-1.amazonaws.com/skillshare/user/profile_img/'

// API's
export const tutorRegister = '/tutor/create'
export const tutorLogin = '/tutor/login'
export const getTutorProfile = '/tutor/profile'
export const uploadUserProfilePic = '/user/update/profile-pic'
export const uploadUserBackgroundPic = '/user/update/background-pic'
export const updateBasicDetails = '/tutor/update/basic-details'
export const updateUserProfilePic = '/user/tutor/profile/update/profile-pic'
export const updateUserDescription = '/user/tutor/profile/update/description'
export const updateUserVideoDesc =
  '/user/tutor/profile/update/video-introduction'
export const updateUserAvailability = '/user/tutor/profile/update/availability'
export const updateUserEducation =
  '/user/tutor/profile/update/education-certificate'
export const updateUserCertificate =
  '/user/tutor/profile/update/teaching-certificate'

export const ROLE_NAME = {
  TUTOR: 'TUTOR',
  STUDENT: 'STUDENT',
}

export const SUBJECTS = {
  1: 'English',
  2: 'Maths',
  3: 'Hindi',
  4: 'Physics',
}

export const LANGUAGES = {
  1: 'English',
  2: 'Hindi',
}

export const LanguageLevel = {
  1: 'Native / Bilingual Proficiency',
  2: 'Limited Working Proficiency',
  3: 'Full Professional Proficiency',
}
