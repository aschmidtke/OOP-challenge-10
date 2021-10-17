const createManager = function (manager) {
    return `
    <div class="card col s4">
        <span class="card-title">Manager</span>
            <h3>${manager.name}<h3>
            <h4>ID: ${manager.id}</h4>
            <h4>Email: <a href="mailto:${manager.email}">${manager.email}</a></h4>
            <h4>Office: ${manager.officeNumber}</h4>
    </div>
    `;
}

const createEngineer = function (engineer) {
    return `
    <div class="card sol s4">
        <span class="card-title">Engineer</span>
            <h3>${engineer.name}</h3>
            <h4>ID: ${engineer.id}</h4>
            <h4>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></h4>
            <h4>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></h4>
    </div>
    `;
}

const createIntern = function (intern) {
    return `
    <div class="card sol s4">
        <span class="card-title">Engineer</span>
            <h3>${intern.name}</h3>
            <h4>ID: ${intern.id}</h4>
            <h4>Email: <a href="mailto:${intern.email}">${intern.email}</a></h4>
            <h4>School: ${intern.school}</h4>
    </div>        
    `;
}

createHTML = (data) => {
    pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerInfo = createManager(employee);
            pageArray.push(managerInfo);
        }

        if (role === 'Engineer') {
            const engineerInfo = createEngineer(employee);
            pageArray.push(engineerInfo);
        }

        if (role === 'Intern') {
            const internInfo = createIntern(employee);
            pageArray.push(internInfo);
        }
    }

    const employeeInfo = pageArray.join('')
    const createTeam = createTeamPage(employeeInfo);
    return createTeam;
}

const createTeamPage = function (employeeInfo) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Generator</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <nav>
        <div class="nav-wrapper" id="navbar">
        <a class="brand-logo center">Your Team</a>
        </nav>
            <div class="container">
            <div class="row">
                ${employeeInfo}
            </div>
            </div>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </body>
    </html>
    `;
}

module.exports = createHTML;