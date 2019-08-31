<template>
    <div class="course-list">
        <h1>Courses</h1>
        <div v-for="course in courses" :key="course.id">
            <p @click="setEdit" v-if="!editing">{{ course.name }}</p>
            <div v-else>
                <input type="text" v-model="course.name" />
                <button @click="saveCourse(course)">Save</button>
                <button @click="removeCourse(course.id)">Remove</button>
            </div>
        </div>
        <div v-if="!editing">
            <input type="text" v-model="courseName" placeholder="Course Name" />
            <button @click="addCourse(courseName)">Add</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            ROOT_URL: 'http://localhost:3000/courses',
            courses: [],
            courseName: '',
            editing: false
        };
    },
    created() {
        this.getCourseList();
    },
    methods: {
        getCourseList() {
            axios
                .get(this.ROOT_URL)
                .then(response => {
                    this.courses = response.data;
                })
                // eslint-disable-next-line no-console
                .catch(error => console.error(error));
        },
        addCourse(name) {
            axios
                .post(this.ROOT_URL, { name })
                .then(response => {
                    this.courses = [...this.courses, response.data];
                    this.courseName = '';
                })
                // eslint-disable-next-line no-console
                .catch(error => console.error(error));
        },
        setEdit() {
            this.editing = !this.editing;
        },
        saveCourse(course) {
            axios
                .put(`${this.ROOT_URL}/${course.id}`, course)
                .then(response => {
                    this.setEdit();
                    // eslint-disable-next-line no-console
                    console.log(response.data);
                })
                // eslint-disable-next-line no-console
                .catch(error => console.error(error));
        },
        removeCourse(id) {
            axios
                .delete(`${this.ROOT_URL}/${id}`)
                .then(() => {
                    this.setEdit();

                    this.courses = this.courses.filter(course => course.id != id);
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.error(error);
                });
        }
    }
};
</script>

<style>
.course-list {
    background-color: rebeccapurple;
    padding: 10px;
    width: 50%;
    text-align: center;
    margin: 0 auto;
    color: white;
}
.course-list p {
    cursor: pointer;
}
</style>
