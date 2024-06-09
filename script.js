function toggleSupportForm() {
    var supportForm = document.getElementById("supportForm");
    supportForm.classList.toggle("show");
}

function submitSupportForm(event) {
    event.preventDefault(); 
    var email = document.getElementById("supportFormContent").elements["email"].value;
    var message = document.getElementById("supportFormContent").elements["message"].value;
   
    alert("Destek talebiniz alındı. En kısa sürede size geri dönüş yapılacaktır.");
}
document.getElementById("searchInput").addEventListener("keypress", function(event) {
   
    if (event.key === 'Enter') {
        searchOnAmazon();
    }
});

function searchOnAmazon() {
   
    var searchTerm = document.getElementById("searchInput").value;


    var amazonURL = "https://www.amazon.com.tr/s?k=" + encodeURIComponent(searchTerm);


    window.open(amazonURL, "_blank");
}
