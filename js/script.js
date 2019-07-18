//Variable holding list of students:
const list_students = document.querySelectorAll('.student-item');
//Students per page
const itemsOnPage = 10
const showPage = (list, page) => {
   //Identifies where index starts: 
   let indexStart = page * itemsOnPage - itemsOnPage;
   //Identifies where index ends: 
   let indexEnd = page * itemsOnPage;

   for (let i = 0; i <= list.length - 1; i += 1) {
      if (i >= indexStart && i < indexEnd) {
         list[i].style.display = 'block';
      }
      else {
         list[i].style.display = 'none';
      };

   }
};
//This will append pagination links on bottom of page
const appendPageLinks = (list) => {
   
   const maxNumberOfPages = Math.ceil(list.length / 10);
   const div = document.createElement('div');//creates DIV for pagination links
   div.className = "pagination"; //gives "div" a class of pagination
   let ul = document.createElement('ul'); // creates ul
   div.appendChild(ul);
   const page_div = document.getElementsByClassName("page");//grabs div with class of .page
   page_div[0].appendChild(div); //appends div as a child to .page div

   for (let i = 1; i <= maxNumberOfPages; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = "#"; //Creates a tag into Link   
      ul.appendChild(li); //Appends List Item
      ul.appendChild(a);
      a.textContent = i; // appends "i" for page number
      li.appendChild(a); // Appends Link to li
      let links = a;
      if (i === 1) {
         links.className = 'active';
      }
   }
   let links = document.querySelectorAll('a');//grabs all a elements 
      for (let i = 0; i < links.length; i+=1) {
         links[i].addEventListener('click', (e) => {//removes active class when link clicked
            for (let j = 0; j < links.length; j+=1) {
               links[j].className = ' ';
            }
            links[i].className = "active";//adds active class to element clicked
            showPage(list, i +1 );

         });

      };

};

appendPageLinks(list_students);
showPage(list_students, 1);
