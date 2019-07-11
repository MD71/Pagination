
//Variable holding list of students:
const list_students = document.querySelectorAll('.student-item');
//Students per page
const itemsOnPage = 10
const showPage = (list, page) => {
   //Identifies where index starts: 
let indexStart = page * itemsOnPage - itemsOnPage;
   //Identifies where index ends: 
let indexEnd = page * itemsOnPage;

for (let i = 0; i <= list.length - 1; i +=1 ){
   if (i>= indexStart && i < indexEnd){
   list[i].style.display = 'block';
   }  
      else{
      list[i].style.display = 'none';
          };

   }
};
//This will append pagination links on bottom of page.
const appendPageLinks = (list) => {  
   const maxNumberOfPages = list.length / 10 + 1; 
   const div = document.createElement('div');//creates DIV for pagination links
   const page_div = document.getElementsByClassName("page");//grabs div with class of .page
   let ul = document.createElement('ul'); // creates ul
   div.appendChild(ul); 
   div.className = "pagination"; //gives "div" a class of pagination
   page_div[0].appendChild(div); //appends div as a child to .page div

   for (let i = 1; i <= maxNumberOfPages; i++){
      let li = document.createElement('li');
      let a = document.createElement('a');
         a.href = "#"; //Creates a tag into Link   
         ul.appendChild(li); //Appends List Item
         a.textContent = i; // appends "i" for page number
         li.appendChild(a); // Appends Link to
      a.addEventListener('click', (e) => {
         showPage(list, i);
      });
      }
};
appendPageLinks(list_students);
showPage(list_students, 1);
