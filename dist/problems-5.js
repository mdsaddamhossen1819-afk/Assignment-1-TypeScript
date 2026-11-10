// problem-5 solved :
const getPopularCourses = (courses, minStudents) => {
    courses.filter(course => {
        return course.isPublished === true && course.students >= minStudents;
    });
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
const popularCourses = getPopularCourses(courses, 80);
console.log(popularCourses);
console.log(courses);
export {};
