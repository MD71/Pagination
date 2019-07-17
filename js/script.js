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
   const maxNumberOfPages = list.length / 10 + 1;
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
      links = a;
      if (i === 1) {
         links.className = 'active';
      }


   }

   const links = document.querySelectorAll('a');
   for (let i = 0; i < list.length; i += 1) {
      links[i].addEventListener('click', () => {
         links[i].className = "";
      });
   };

};



appendPageLinks(list_students);
showPage(list_students, 1);
/*
Loop over pagination links to remove active class from all links
7. Add the active class to the link that was just clicked. You can identify that
clicked link using event.target
*/