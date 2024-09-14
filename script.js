
function handleFormSubmit(event) {
    event.preventDefault(); 

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var knowledgebaseInput = document.getElementById('Knowledgebase');
    var experienceInput = document.getElementById('experience');
    var achievementsInput = document.getElementById('achievements');
    var skillsInput = document.getElementById('skills');
  
    
    var resumeData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        knowledgebase: knowledgebaseInput.value,
        experience: experienceInput.value,
        achievements: achievementsInput.value,
        skills: skillsInput.value,
    };
    
    
    if (!resumeData.name || !resumeData.email || !resumeData.phone) {
        alert('Please fill in all required fields.');
        return;
    }
    
    console.log('Resume Data:', resumeData);
   
    clearForm();
}

function clearForm() {
    var form = document.getElementById('mainform');
    form.reset();
}


document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('mainform');
    form.addEventListener('submit', handleFormSubmit);
});
