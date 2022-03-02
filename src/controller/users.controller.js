export const getUsers = (req, res) => {
    // example output
    res.json({
        data: [
            {
                firstName: 'John',
                lastName: 'Doe',
                age: 36,
                email: 'john@example.com',
                userName: 'MisterCool'
            }
        ]
    });
}

export const addUser = (req, res) => {
    // validate input
    // Here you have to check the user data
    
    const success = false; // <- replace this

    if (success) {
        res.json({
            message: "Success"
        });
    } else {
        res.status(406).json({
            message: "Invalid Input",
            errors: [], // <- insert errors here
        })
    }
}