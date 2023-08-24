const newFormHandler = (event) => {
    event.preventDefault();

    const amount = document.querySelector('#expense-amount').value.trim();
    const description =document.querySelector('#expense-description').value.trim();
    const category = document.querySelector('#expense-category').value.trim();

    if (amount && description && category) {
        fetch(`/api/expense`, {
            method: 'POST',
            body: JSON.stringify({amount, description, category}),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
        .then(response => {
            console.log(response);
            
            document.location.replace(`/profile`);
        }).catch(err => alert('Failed to post expense!'));
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/expense/${id}`, {
            method: 'DELETE',
        });

        if (response.ok){
            document.location.replace('/profile');
        }else {
            alert('Failed to delete expense');
        }
    }
};

document
    .querySelector('.new-expense-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.expense-list')
    .addEventListener('click', delButtonHandler);