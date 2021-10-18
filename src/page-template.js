const createManager = function (manager) {
    return `
    <div class="card small hoverable col s4">
        <h2 class="card-title teal darken-2 white-text">
        <i class="material-icons">person_outline</i>
        <span class="right">
        </span>Manager</h2>
        <div class="center-align">
            <h4>${manager.name}<h4>
            <h6>ID: ${manager.id}</h6>
            <h6>Office: ${manager.officeNumber}</h6>
                <div class="card-action">
                <a href="mailto:${manager.email}">Email Me!<i class="material-icons">email</i></a>
                </div>
        </div>    
    </div>
    `;
}

const createEngineer = function (engineer) {
    return `
    <div class="card small hoverable col s4">
        <h2 class="card-title teal darken-2 white-text">
        <i class="material-icons">laptop</i>
        <span class="right">
        </span>Engineer</h2>
        <div class="center-align">
            <h4>${engineer.name}</h4>
            <h6>ID: ${engineer.id}</h4>
            <h6>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></h4>
                <div class="card-action">
                <a href="mailto:${engineer.email}">Email Me!<i class="material-icons">email</i></a>
                </div>
        </div>
    </div>
    `;
}

const createIntern = function (intern) {
    return `
    <div class="card small hoverable col s4">
    <h2 class="card-title teal darken-2 white-text">
    <i class="material-icons">school</i>
    <span class="right">
    </span>Intern</h2>
        <div class="center-align">
            <h4>${intern.name}</h4>
            <h6>ID: ${intern.id}</h4>
            <h6>School: ${intern.school}</h4>
                <div class="card-action">
                <a href="mailto:${intern.email}">Email Me!<i class="material-icons">email</i></a>
            </div>
        </div>
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
        <nav class="nav-wrapper" id="navi">
        <a class="brand-logo center">Your Team</a>
        </nav>
            <div class="container" id="container">
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