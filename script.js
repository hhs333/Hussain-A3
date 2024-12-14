
const APIURL = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";


async function fetchUOBData() {
    try {
      
        const response = await fetch(APIURL);

        if (!response.ok || response.status !== 200) {
            console.error('ERROR !!! NOT OK'); 
        }

        const data = await response.json();

     

        displayUOBData(data.results);
    } catch (error) {
        console.error('ERROR !!!', error);
    }
}


function displayUOBData(results) {
  
    const tableBody = document.getElementById('table-body');

    results.forEach(result => {
  
        const tableRow = document.createElement('tr');

   
        tableRow.innerHTML = `
            <td>${result.year}</td>
            <td>${result.semester}</td>
            <td>${result.the_programs}</td>
            <td>${result.nationality}</td>
            <td>${result.colleges}</td>
            <td>${result.number_of_students}</td>
        `;

        tableBody.appendChild(tableRow);
    });
}


document.addEventListener('DOMContentLoaded', fetchUOBData);