"use strict";

class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  age() {
    const now = new Date();
    const yearDiff = now.getFullYear() - this.birthYear;
    const birthdayThisYear = new Date(now.setFullYear(this.birthYear));
    const hasHadBirthdayThisYear = birthdayThisYear <= now;
    return hasHadBirthdayThisYear ? yearDiff : yearDiff - 1;
  }

  present() {
    const index = this.attendance.findIndex((entry) => entry === null);
    if (index !== -1) {
      this.attendance[index] = true;
    }
  }

  absent() {
    const index = this.attendance.findIndex((entry) => entry === null);
    if (index !== -1) {
      this.attendance[index] = false;
    }
  }

  get averageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  get attendanceRate() {
    const presentCount = this.attendance.filter(
      (entry) => entry === true
    ).length;
    return presentCount / this.attendance.length;
  }

  summary() {
    const averageGrade = this.averageGrade;
    const attendanceRate = this.attendanceRate;
    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Олександр", "Іванов", 2002);
console.log(student1);
student1.grades = [91, 90, 95, 93];
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
console.log(`Олександру ${student1.age()} рік`);
console.log(student1.summary());

const student2 = new Student("Марія", "Петренко", 2001);
console.log(student2);
student2.grades = [90, 92, 94, 88];
student2.present();
student2.present();
student2.present();
console.log(`Марії ${student2.age()} роки`);
console.log(student2.summary());

const student3 = new Student("Іван", "Сидоренко", 2003);
console.log(student3);
student3.grades = [80, 85, 90, 75];
student3.absent();
student3.absent();
student3.absent();
console.log(`Івану ${student3.age()} років`);
console.log(student3.summary());
