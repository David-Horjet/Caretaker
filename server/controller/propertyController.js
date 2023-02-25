const { Property } = require("../model/propertyModel");
const { Users } = require("../model/userModel");
const { upload } = require("../middlewares/images");

const storage = upload.single("image");

const getProperties = async (req, res) => {
  try {
    const data = await Property.find().populate("caretaker").sort({
      createdAt: -1,
    });
    return res.json({
      status: true,
      message: "Properties Listed Successful",
      data,
    });
  } catch (error) {
    return res.json({
      status: false,
      message: `You've got some errors`,
      error,
    });
  }
};

const getPropertiesByCaretaker = async (req, res) => {
  try {
    const userId = req.user.userId;
    // const caretakerId = caretaker._id
    const data = await Property.findById({ caretaker: userId })
      .populate("caretaker")
      .sort({
        createdAt: -1,
      });
    return res.json({
      status: true,
      message: "Properties Listed Successful",
      data,
    });
  } catch (error) {
    return res.json({
      status: false,
      message: `You've got some errors`,
      error,
    });
  }
};

const getProperty = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Property.findOne({
      _id: id,
    });
    if (data) {
      return res.json({
        status: true,
        msg: `Property's data fetched successfully`,
        data,
      });
    } else {
      return res.json({
        status: false,
        msg: `Can't Find Property's details`,
      });
    }
  } catch (error) {
    return res.json({
      status: false,
      message: `You've got some errors`,
      error,
    });
  }
};

const addProperty = async (req, res) => {
  try {
    const body = req.body;
    req.body.caretaker = req.user.userId;
    const data = await Property.create(body);
    return res.json({
      status: true,
      message: "Property added successfully",
      data,
    });
  } catch (error) {
    return res.json({
      status: false,
      message: `You've got some error`,
      error,
    });
  }
};

const uploadFile = async (req, res, next) => {
  storage(req, res, async (err) => {
    if (err) {
      return res.json({
        status: "false",
        msg: error.message
      })
    }
    res.status(200).json({
      status: true,
      message: "Property image uploaded successfully",
    })
  })
}

// const getListedPropstoUpdate = async (req, res) => 
//   try {
//     const id = req.params.id;
//     const editProps = await Property.findById(id);
//     return res.status(201).json({
//       status: true,
//       message: "Property gotten Successful",
//       editProps,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       status: false,
//       message: `You've got some errors - ${error}`,
//       error: "An error occured while signing",
//     });
//   }
// };

const updateListedProp = async (req, res) => {
  try {
    const id = req.params.id;
    const Props = await Property.findById(id).populate("caretaker");
    if (!Props) {
      return res.status(400).json({
        status: false,
        message: "Property Not found In DB",
      });
    }
    if (Props.caretaker._id.toString() != req.body._id.toString()) {
      return res.status(400).json({
        status: false,
        message: "You are not authorized to update this property ",
      });
    }
    Props.findByIdAndUpdate(id, req.body);
    return res.status(201).json({
      status: true,
      message: "Property updated Successful",
      Props,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `You've got some errors - ${error}`,
      error: "An error occured while signing",
    });
  }
};

// const deleteProps = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const Props = await Property.findById({_id: id}).populate("caretaker");
//     if (!Props) {
//       return res.status(400).json({
//         status: false,
//         message: "Property Not found In DB",
//       });
//     }
//     if (Props.caretaker._id == req.body._id) {
//       return res.status(400).json({
//         status: false,
//         message: "You are not authorized to delete this property",
//       });
//     }
//    await Props.findByIdAndDelete(id);
//     return res.status(201).json({
//       status: true,
//       message: "Property deleted Successful",
//       Props,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       status: false,
//       message: `You've got some errors - ${error}`,
//       error: "An error occured while signing",
//     });
//   }
// };
const deleteProps = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("id:", id)
    const data = await Property.findByIdAndDelete(id)
    // console.log("data:", data)
    if (data) {
      return res.json({
        status: true,
        message: `Property's data deleted successfully`,
        data,
      });
    } else {
      return res.json({
        status: false,
        message: `Can't Find Property's details`,
      });
    }
  } catch (error) {
    return res.json({
      status: false,
      message: `You've got some errors`,
      error,
    });
  }
};
const allAppUser = async (req, res) => {
  try {
    const data = await Users.find();
    return res.json({
      status: true,
      message: "user details available here",
      data,
    });
  } catch (error) {
    return res.json({
      status: false,
      message: `You've got some error`,
      error,
    });
  }
};

module.exports = {
  getProperties,
  addProperty,
  uploadFile,
  getProperty,
  allAppUser,
  deleteProps
};
