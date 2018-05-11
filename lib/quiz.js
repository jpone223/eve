module.exports = {
    init: [
        {
            name: "template",
            type: "list",
            default: "",
            choices: [],
            message: "Choose a template"
        },
        {
            name: "branch",
            type: "input",
            default: "master",
            message: "Branch/Tag/Commit name"
        },
        {
            name: "project",
            type: "input",
            default: "",
            message: "Project name"
        },
        {
            name: "group",
            type: "input",
            default: "",
            message: "Project group, [default] username"
        },
        {
            name: "user",
            type: "input",
            default: "",
            message: "Git user or project author"
        },
        {
            name: "email",
            type: "input",
            default: "",
            message: "Your email address"
        }
    ]
}