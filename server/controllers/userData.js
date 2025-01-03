const UserData = require("../models/userData")

async function handleCreateData(req, res) {
    try {
        const { website, url, username, password } = req.body;
        const create = await UserData.create({
            website,
            url,
            username,
            password,
        })
        return res.json({ success: true, message: "Data Created", data: create });
    } catch (err) {
        return res.json({ success: false, message: "Error Creating Data", error: err.message })
    }
}

async function handleGetData(req, res) {
    try {
        const data = await UserData.find();
        return res.json({ success: true, message: "Data Fetched Successfull", data });
    } catch (err) {
        return res.json({success: false, message: "Error Fetching Data", error: err.message})
    }
}

async function handleDeleteData(req, res){
    try {
        const id = req.params.id;
        const getData = await UserData.findByIdAndDelete(id)
        return res.json({success: true, message: "Data Deleted Successfully", deleteData: getData})
    } catch (err) {
        return res.json({success: false, messagee: "Error Deleting Data", error: err.message()})
    }
}

module.exports = {
    handleCreateData,
    handleGetData,
    handleDeleteData,
}