const { json } = require('express');

const mygroup = [
    {id:19110051, name: 'Lâm Tâm Như'}
]

const checkMember = (member) => {
    const validID = [19110051, 19110503, 19110479];
    if (validID.includes(member.id)) {
        if (mygroup.find(m => m.id = member.id)){
            return false;
        }
        return true;
    }
    return false;
}

const getMember = (id) => {
    const result = mygroup.find(member => member.id == id);
    if (result){
        return result;
    }
    return {error: 'Not valid'};
}

const addMember = (member) => {
    if (checkMember(member)) {
        mygroup.push(member);
        return member;
    }
    else return {error: 'Not valid'};
}

module.exports = {
    mygroup,
    getMember,
    addMember
}