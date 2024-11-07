var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); 
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var addressInput = document.getElementById('address');
    var educationInput = document.getElementById('education');
    var experienceInput = document.getElementById('experience');
    var skillsInput = document.getElementById('skills');
    
    var profileImageInput = document.getElementById('profileImage');
    var profileImageFile = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0]; 
    var profileImageSrc = '';
    if (profileImageFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImageSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // Get the image source
            displayResume();
        };
        reader.readAsDataURL(profileImageFile); 
    }
    else {
        displayResume(); e
    }
    
    function displayResume() {
        var resumeOutput = "\n            <h2>Resume</h2>\n            <h3 contenteditable=\"true\" onblur=\"updateField('name', this.innerText)\">".concat(nameInput.value, "</h3>\n            <p><strong>Email:</strong> <span contenteditable=\"true\" onblur=\"updateField('email', this.innerText)\">").concat(emailInput.value, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\" onblur=\"updateField('phone', this.innerText)\">").concat(phoneInput.value, "</span></p>\n            <p><strong>Address:</strong> <span contenteditable=\"true\" onblur=\"updateField('address', this.innerText)\">").concat(addressInput.value, "</span></p>\n            ").concat(profileImageSrc ? "<img src=\"".concat(profileImageSrc, "\" alt=\"Profile Image\" style=\"max-width: 150px; height: auto;\"/>") : '', "\n            <h3 contenteditable=\"true\" onblur=\"updateField('education', this.innerText)\">Education</h3>\n            <p><span contenteditable=\"true\" onblur=\"updateField('educationDetails', this.innerText)\">").concat(educationInput.value, "</span></p>\n            <h3 contenteditable=\"true\" onblur=\"updateField('experience', this.innerText)\">Experience</h3>\n            <p><span contenteditable=\"true\" onblur=\"updateField('experienceDetails', this.innerText)\">").concat(experienceInput.value, "</span></p>\n            <h3 contenteditable=\"true\" onblur=\"updateField('skills', this.innerText)\">Skills</h3>\n            <p><span contenteditable=\"true\" onblur=\"updateField('skillsDetails', this.innerText)\">").concat(skillsInput.value, "</span></p>\n        ");
      
        document.getElementById('resumeoutput').innerHTML = resumeOutput;
    }
    
    window.updateField = function (field, value) {
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
