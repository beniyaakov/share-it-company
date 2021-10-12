const adminModel = require("../Model/adminModel");

const getAllAdmin = (req, res) => {
  try {
    
    adminModel.find({}, (error, result) => {
      if (error) throw error;
      res.status(200).json({ message: "success", data: result });
    });
  } catch (error) {
    res.status(500).json({ message: "failed", error: error.message });
  }
};

const getAdminById = (req, res) => {
  try {
    adminModel.findById(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ message: "success", data: result });
    });
  } catch (error) {
      res.status(500).json({message:"failed", error:error.message})
  }
};

const updateAdmin = (req, res) => {
  try {    
      adminModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
      (error, result) => {
        if (error) throw error;
        res.status(200).json({message:"success", data:result})
      }
    );
  } catch (error) {
      res.status(500).json({message:"failed", error:eroor.message})
  }
};

const deleteAdmin = (req, res) => {
    try {
        adminModel.findByIdAndDelete(req.params.id,{ new: true },(error, result)=>{
            if(error) throw error;
            res.status(200).json({message:"success", data:result})
        })
    } catch (error) {
        res.status(500).json({message:"failed", error:eroor.message})
    }
}

module.exports = {
  getAllAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
