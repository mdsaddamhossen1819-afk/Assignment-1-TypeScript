// problem-5 solved :

// Define an interface Course with the following properties:

// title (string)
// students (number)
// isPublished (boolean)
// Then, create a function getPopularCourses that accepts an array of Course objects and a minStudents number. The function should return a new array containing only the courses where isPublished is true and students is greater than or equal to minStudents.

// Requirements:
// Define the Course interface with the exact property names and types.
// Do not mutate the original array


interface course {
    title:string;
    students:number;
    isPublished:boolean;
}

const getPopularCourses = (courses : course[], minStudents: number) =>{
      courses.filter(course =>{
        return course.isPublished === true && course.students >= minStudents;
     })
};

const courses: course[] = [
      { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];

 const popularCourses = getPopularCourses(courses,80)
 
console.log(popularCourses);
console.log(courses);
