// script.ts


interface ResumeData {
    name: string;
    email: string;
    phone: string;
    knowledgebase: string;
    experience: string;
    achievements: string;
    skills: string;
}


function handleFormSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission

   
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const knowledgebaseInput = document.getElementById('Knowledgebase') as HTMLTextAreaElement;
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
    const achievementsInput = document.getElementById('achievements') as HTMLTextAreaElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

    
    const resumeData: ResumeData = {
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


function clearForm(): void {
    const form = document.getElementById('mainform') as HTMLFormElement;
    form.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mainform') as HTMLFormElement;
    form.addEventListener('submit', handleFormSubmit);
});
