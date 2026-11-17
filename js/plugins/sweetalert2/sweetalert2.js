// 1. بتعرّف القالب ده مرة واحدة في أول ملف الـ JS
const Toast = Swal.mixin({
        toast: true,
        position: "top-end",     // فوق على اليمين (لو الصفحة RTL بييجي فوق على الشمال)
        showConfirmButton: false,
        timer: 1500,             // يختفي بعد 3 ثواني
        timerProgressBar: true,  // شريط الوقت اللي تحت
        didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;   // يوقف الوقت لو وقفت عليه بالماوس
                toast.onmouseleave = Swal.resumeTimer; // يكمل الوقت لما تبعد الماوس
        }
});
