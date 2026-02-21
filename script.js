// 1. Создайте объект в формате JSON, который содержит информацию о
// свойствах студента: фамилия, имя, массив оценок marks. Каждая
// оценка – это объект с двумя свойствами subject и mark. Напишите
// функцию, которая выводит эту информацию в консоль.

const studentEntity = {
    "lastname": "Andreev",
    "name": "Andrew",
    "marks": [
        {
            "subject": "French", 
            "mark": 5
        },
        {
            "subject": "French", 
            "mark": 4
        },
        {
            "subject": "French", 
            "mark": 3
        },
        {
            "subject": "French",
            "mark": 5
        },
        {
            "subject": "English",
            "mark": 4
        }
    ]
};

function printStudentInfo(student) {
    console.log(`Student: ${student.lastname} ${student.name}`)
    student.marks.forEach((element, ind) => {
        console.log(`   ${ind + 1}: ${element.subject} - ${element.mark}`)
    });
}

console.log("Проверка задания 1")
console.log(printStudentInfo(studentEntity));

// 2. Создайте классы Student и Mark, которые описывают объекты из
// предыдущего примера.

class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
};

class Student {
    constructor(lastname, name, marks) {
        this.lastname = lastname;
        this.name = name;
        this.marks = marks;
    }
   
    // 3. Добавьте в класс Student метод, возвращающий среднюю оценку
    // студента по всем предметам.

    getAverageMark = function() {
        if (this.marks.length === 0) {
            return 0;
        }

        const sum = this.marks.reduce((total, markObj) => total + markObj.mark, 0)
        return sum / this.marks.length;
    }
}

const studentClassEntity = new Student("Petrov", "Ivan", [])
studentClassEntity.marks.push(new Mark("French", 4))
studentClassEntity.marks.push(new Mark("French", 5))
studentClassEntity.marks.push(new Mark("French", 5))
studentClassEntity.marks.push(new Mark("English", 3))
studentClassEntity.marks.push(new Mark("English", 4))

console.log("Проверка задания 3")
console.log(studentClassEntity.getAverageMark());

// 4. Добавьте в класс метод, возвращающий все оценки по переданному
// предмету.

Student.prototype.getMarksBySubject = function(subject) {
    return this.marks.filter(markObj => markObj.subject === subject);
}

console.log("Проверка задания 4")
console.log(studentClassEntity.getMarksBySubject("English"));

// 5. Добавьте в класс метод добавления оценки по предмету.

Student.prototype.addMark = function (subject, mark) {
    this.marks.push (new Mark(subject, mark))
}

console.log("Проверка задания 5")
console.log(studentClassEntity.addMark("English", 5));
console.log(studentClassEntity.getMarksBySubject("English"));

// 6. Добавьте в класс метод, удаляющий все оценки по переданному
// предмету.

Student.prototype.deleteMarksBySubject = function(subject) {
    this.marks = this.marks.filter(elem => elem.subject !== subject)
}

console.log("Проверка задания 6")
console.log(studentClassEntity.deleteMarksBySubject("French"));
console.log(printStudentInfo(studentClassEntity));




