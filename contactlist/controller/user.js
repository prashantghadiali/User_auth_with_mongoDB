let users = [
   {
    id: 1,
    name: "A",
    phoneNo: 0987654321,
   },
   {
    id: 2,
    name: "B",
    phoneNo: 0987654322,
   },
   {
    id: 3,
    name: "C",
    phoneNo: 0987654323,
   }
]

module.exports.users = (req, res) =>{
    return res.render("user", {
        title: "Users",
        users: users,
    })
}

module.exports.addUser = (req, res) => {
    console.log("req.body", req.body);
    // const name = req.body.name;
    // const phoneNo = req.body.phoneNo;
    const { name, phoneNo } = req.body;
    users.push({
        id: users.length + 1,
        name: name,
        phoneNo: phoneNo,
    })

    return res.redirect("back");
}

// req.params
module.exports.deleteUser = (req, res) => {
    const {id} = req.params;
    const index = users.findIndex((user) => user.id == id);
    users.splice(index, 1);

    return res.redirect("back");
}

module.exports.deleteUserQuery = (req, res) => {
    const { id } = req.query;
    const index = users.findIndex((user) => user.id == id);
    users.splice(index, 1);

    return res.redirect("back");
}