var student_list = [];
function submit() {
var student_1 = document.getElementById("name_student_1").value;
var student_2 = document.getElementById("name_student_2").value;
var student_3 = document.getElementById("name_student_3").value;
var student_4 = document.getElementById("name_student_4").value;

student_list.push(student_1);
student_list.push(student_2);
student_list.push(student_3);
student_list.push(student_4);

console.log(student_list);

document.getElementById("show_student_list").innerHTML=student_list;
document.getElementById("submit").style.display="none";
document.getElementById("sorting").style.display="inline-block"; 
}
function sort() {
    student_list.sort();
    console.log(student_list);
    document.getElementById("show_student_list").innerHTML=student_list;
}