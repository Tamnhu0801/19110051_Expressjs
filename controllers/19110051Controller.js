const {mygroup, getMember, addMember} = require('../models/members');

const getMemberMSSV = (req, res) => {
    const id = req.params.id;
    res.status(200).json(getMember(id));
};

const postMember = (req, res) => {
    const result = addMember(req.body);
    res.status(200).json(result);
};

module.exports = {
    getMemberMSSV,
    postMember
}