const thumbnailInput = document.getElementById('course-thumbnail');

thumbnailInput.addEventListener('change', function () {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const previewImage = document.createElement('img');
            previewImage.src = e.target.result;
            previewImage.style.width = '100px';
            previewImage.style.marginTop = '10px';
            thumbnailInput.parentNode.appendChild(previewImage);
        };
        reader.readAsDataURL(this.files[0]);
    }
});

document.getElementById('quiz').addEventListener('change', function () {
    const quizDetails = document.getElementById('quiz-details');
    quizDetails.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('assignments').addEventListener('change', function () {
    const assignmentDetails = document.getElementById('assignments-details');
    assignmentDetails.style.display = this.checked ? 'block' : 'none';
});

