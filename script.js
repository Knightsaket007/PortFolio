

function openNewTab(url) {
  window.open(url, '_blank');
}


document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('saketsourav3@gmail.com');
});


document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('TNUZ64F6IbgYBfn3l');

  const form = document.getElementById('contact-form');
  const userNameInput = form.elements['user_name'];
  const userEmailInput = form.elements['user_email'];
  const messageInput = form.elements['message'];

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailParams = {
      from_name: userNameInput.value,
      from_email: userEmailInput.value,
      to_email: 'saketsourav3@gmail.com', // Replace with the recipient's email address
      message: messageInput.value
    };

    emailjs.send('service_0h1f6ch', 'template_9a4qeu2', emailParams)
      .then((response) => {
        console.log('Email sent!', response);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Message send succesfully'
        })
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
      });

    form.reset();
  });
});

