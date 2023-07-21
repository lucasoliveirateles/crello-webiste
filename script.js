let once = false;

setInterval(() => {
  if (!once) {
    alert('Welcome to Crello Website!');

    once = true;
  }
}, 2000);