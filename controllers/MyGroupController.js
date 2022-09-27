const {mygroup, getMember, addMember} = require('../models/members');

const getMyGroup = (req, res) => {
    res.status(200).json(mygroup);
}

module.exports = {
    getMyGroup
}