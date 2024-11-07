document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Input data elements
    const nameInput = (document.getElementById('name') as HTMLInputElement);
    const emailInput = (document.getElementById('email') as HTMLInputElement);
    const phoneInput = (document.getElementById('phone') as HTMLInputElement);
    const addressInput = (document.getElementById('address') as HTMLTextAreaElement);
    const educationInput = (document.getElementById('education') as HTMLTextAreaElement);
    const experienceInput = (document.getElementById('experience') as HTMLTextAreaElement);
    const skillsInput = (document.getElementById('skills') as HTMLTextAreaElement);

    // Profile image input
    const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
    const profileImageFile = profileImageInput.files?.[0]; // Get the first file if available
    let profileImageSrc = '';

    if (profileImageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImageSrc = e.target?.result as string; // Get the image source
            displayResume();
        };
        reader.readAsDataURL(profileImageFile); // Read the file as a data URL
    } else {
        displayResume(); // If no image, still display the resume
    }

    // Output the resume
    function displayResume() {
        const resumeOutput = `
            <h2>Resume</h2>
            <h3 contenteditable="true" onblur="updateField('name', this.innerText)">${nameInput.value}</h3>
            <p><strong>Email:</strong> <span contenteditable="true" onblur="updateField('email', this.innerText)">${emailInput.value}</span></p>
            <p><strong>Phone:</strong> <span contenteditable="true" onblur="updateField('phone', this.innerText)">${phoneInput.value}</span></p>
            <p><strong>Address:</strong> <span contenteditable="true" onblur="updateField('address', this.innerText)">${addressInput.value}</span></p>
            ${profileImageSrc ? `<img src="${profileImageSrc}" alt="Profile Image" style="max-width: 150px; height: auto;"/>` : ''}
            <h3 contenteditable="true" onblur="updateField('education', this.innerText)">Education</h3>
            <p><span contenteditable="true" onblur="updateField('educationDetails', this.innerText)">${educationInput.value}</span></p>
            <h3 contenteditable="true" onblur="updateField('experience', this.innerText)">Experience</h3>
            <p><span contenteditable="true" onblur="updateField('experienceDetails', this.innerText)">${experienceInput.value}</span></p>
            <h3 contenteditable="true" onblur="updateField('skills', this.innerText)">Skills</h3>
            <p><span contenteditable="true" onblur="updateField('skillsDetails', this.innerText)">${skillsInput.value}</span></p>
        `;

        // Display the resume output in the designated area
        document.getElementById('resumeoutput')!.innerHTML = resumeOutput;
    }

    // Function to update fields
    (window as any).updateField = function(field: string, value: string) {
        switch (field) {
            case 'name':
                nameInput.value = value;
                break;
            case 'email':
                emailInput.value = value;
                break;
            case 'phone':
                phoneInput.value = value;
                break;
            case 'address':
                addressInput.value = value;
                break;
            case 'education':
                educationInput.value = value;
                break;
            case 'experience':
                experienceInput.value = value;
                break;
            case 'skills':
                skillsInput.value = value;
                break;
            default:
                break;
        }
    };
});