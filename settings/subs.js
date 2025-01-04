document.querySelector('.btn-cancel').addEventListener('click', () => {
    alert('Your subscription has been canceled.');
});

document.querySelector('.btn-upgrade').addEventListener('click', (e) => {
    e.preventDefault();
    const selectedPlan = document.querySelector('input[name="plan"]:checked').value;
    alert(`You have selected the ${selectedPlan} plan. Upgrade is in process.`);
});
