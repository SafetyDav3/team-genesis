const teamCards = (teamArry) => {
  const cardArry = [];

  const managerCard = (manager) => {
    return;
`
<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <h5 class="card-title"><i class="fa-solid fa-mug-hot"/>${manager.getRole()}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.getId()}/li>
    <li class="list-group-item">${manager.getEmail()}</li> →→→→→→ Make email link
    <li class="list-group-item">${manager.getOfficeNumber()}</li>
  </ul>
</div>`;
  };
};

module.exports = (teamArry) => {
  return;
  `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Genesis</title>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
    <header>
      <h1>Team Genesis</h1>
    </header>

    <main>
      <section class="container">

      </section>
    </main>
  </body>
</html>`;
};

// Font Awesome icons:
// Coffee Mug: fa-solid fa-mug-hot
// Glasses: fa-solid fa-glasses
// Student: fa-solid fa-user-graduate
// GitHub: fa-brands fa-github
