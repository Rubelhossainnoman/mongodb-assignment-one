//For table...
const mytable = document.querySelector('.students_table')
$(document).ready( function () {
    $('.students_table').DataTable();
} );

//For click to copy...

function myFunction() {
    // Get the text field
    const copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
    alert('Copied Done');
  }

// select ....
const camera_img = document.getElementById('camera_img');
const preview_img = document.getElementById('preview_img');
const for_z = document.getElementById('for_z');
const del_students = document.querySelectorAll('#delete_students');

if (del_students) {
    del_students.forEach(item => {
        item.onclick = () =>{
            const confi = confirm('Are you sure to delete this data!');
            if (confi) {
                return true;
            } else {
                return false;
            }
        }
    });
}

if (for_z) {
    for_z.onchange = (e) =>{
        const image_url = URL.createObjectURL(e.target.files[0])
        preview_img.setAttribute('src', image_url);
        preview_img.style.display = 'block';
        camera_img.style.display = 'none';
    } 
}

