 // Get form elements
 const form = document.getElementById('feedback-form');
 const nameInput = document.getElementById('name');
 const emailInput = document.getElementById('email');
 const ratingInputs = document.querySelectorAll('input[name="rating"]');
 const commentInput = document.getElementById('comment');
 const previewBtn = document.getElementById('preview-btn');
 const previewModal = document.getElementById('preview-modal');
 const previewContainer = document.getElementById('preview-container');
 const editBtn = document.getElementById('edit-btn');
 const confirmationModal = document.getElementById('confirmation-modal');
 const closeButtons = document.getElementsByClassName('close');
 
 // Error message elements
 const nameError = document.getElementById('name-error');
 const emailError = document.getElementById('email-error');
 const ratingError = document.getElementById('rating-error');
 const commentError = document.getElementById('comment-error');
 
 // Form validation
 function validateForm() {
   let isValid = true;
 
   // Reset error messages
   nameError.textContent = '';
   emailError.textContent = '';
   ratingError.textContent = '';
   commentError.textContent = '';
 
   // Validate name
   if (nameInput.value.trim() === '') {
     nameError.textContent = 'Please enter your name';
     isValid = false;
   }
 
   // Validate email
   if (emailInput.value.trim() !== '' && !/\S+@\S+\.\S+/.test(emailInput.value)) {
     emailError.textContent = 'Please enter a valid email address';
     isValid = false;
   }
 
   // Validate rating
   let ratingChecked = false;
   for (const radio of ratingInputs) {
     if (radio.checked) {
       ratingChecked = true;
       break;
     }
   }
   if (!ratingChecked) {
     ratingError.textContent = 'Please select a rating';
     isValid = false;
   }
 
   // Validate comment
   if (commentInput.value.trim() === '') {
     commentError.textContent = 'Please fill in the textbox';
     isValid = false;
   }
 
   return isValid;
 }
 
 // Preview form
 function previewFeedback() {
   if (validateForm()) {
     const name = nameInput.value;
     const email = emailInput.value;
     const rating = document.querySelector('input[name="rating"]:checked').value;
     const subject = document.getElementById('subject').value;
     const comment = commentInput.value;
 
     const previewContent = `
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Rating:</strong> ${rating}</p>
       <p><strong>Subject:</strong> ${subject}</p>
       <p><strong>Comment:</strong> ${comment}</p>
     `;
 
     previewContainer.innerHTML = previewContent;
     previewModal.style.display = 'block';
   }
 }
 
 // Edit form
 function editFeedback() {
   previewModal.style.display = 'none';
 }
 
 // Close modals
 function closeModal() {
   previewModal.style.display = 'none';
   confirmationModal.style.display = 'none';
 }
 
 // Event listeners
 previewBtn.addEventListener('click', previewFeedback);
 editBtn.addEventListener('click', editFeedback);
 form.addEventListener('submit', submitFeedback);
 
 // Close modals when clicking outside or on the close button
 window.addEventListener('click', (event) => {
   if (event.target === previewModal || event.target === confirmationModal) {
     closeModal();
   }
 });
 
 for (const closeButton of closeButtons) {
   closeButton.addEventListener('click', closeModal);
 }

