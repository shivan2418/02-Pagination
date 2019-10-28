/*jslint es6 */
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// select all the students by getting all the children of the student list div
const student_list = document.querySelector('.student-list').children;
const items_per_page = 10;

// Create theh pagination buttons
appendPageLinks();
hide_all_students();
showPage(student_list, 1);
let btns = document.querySelectorAll('.nav_btn');
btns[0].className += ' active';


function hide_all_students() {
    // remove all student except for the first ten
    for (let i = 0; i < student_list.length; i++) {
        student_list[i].style.display = 'none';
    }
}

function showPage(list, page) {
    // first hide all students
    hide_all_students()
        // show the students that are on the page passed
    let start_page = 0 + (page - 1) * 10;
    for (let i = start_page; i < start_page + items_per_page; i++) {

        // if incase we are at the last page that does not have the full number of students, then break the loop here to prevent an error.
        if (i === list.length) {
            break;
        }

        // show the student
        list[i].style.display = 'block';
    }
}

function updateButtons(event) {
    // update the nav buttons
    buttons = document.querySelectorAll('.nav_btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = 'nav_btn';
    }


    // add the active tag to the clicked btn
    event.target.className += ' active';
}

function appendPageLinks() {
    console.log('page func');
    // calculate how many nav buttons are needed, use the rounded up number.
    const num_navbuttons = Math.ceil(student_list.length / items_per_page);

    let pagination_div = document.querySelector('.pagination');

    //  iteate and create buttons as needed. 
    for (let i = 0; i < num_navbuttons; i++) {
        let pagebox = document.createElement('button');
        pagebox.textContent = i + 1; // set the text of the buttons to one more than 1 since in real life we do not use 0 index.
        pagebox.className = 'nav_btn';
        // Add event listener to the button as we create it.
        pagebox.addEventListener('click', function(event) {
            // when this button is clicked call the display page with the number written on this button as the argument to the function.
            let page = event.target.textContent;
            let list = student_list
            showPage(list, page);
            updateButtons(event);
        });

        // add the button in to the div
        pagination_div.appendChild(pagebox);
    }
}