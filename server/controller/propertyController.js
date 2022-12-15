const { Property } = require("../model/propertyModel");

const getProperties = async (req, res) => {
  try {
    const data = await Property.find().sort({
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
      error: "Internal Server Error",
    });
  }
};

const addProperty = async (req, res) => {
  try {
    const body = req.body;
    const data = await Property.create(body);
    return res.json({
      status: true,
      message: "Property added successfully",
      data,
    });
  } catch (error) {
    return res.json({
      status: false,
      message: "You've got some errors",
      error
    });
  }
};

const getListedProp = async (req, res) => {
    try {
      const listedProp = await Property.findOne().populate("caretaker").sort({
        createdAt: -1,
      });
      return res.status(200).json({
        status: true,
        message: "Listed Property Gotten Successful",
        data: listedProp,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: `You've got some errors`,
        error,
      });
    }
  };
  
  const getListedPropstoUpdate = async (req, res) => {
    try {
      const id = req.params.id;
      const editProps = await Property.findById(id);
      return res.status(201).json({
        status: true,
        message: "Property gotten Successful",
        editProps,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: `You've got some errors - ${error}`,
        error: "An error occured while signing",
      });
    }
  };
  
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
  
  const deleteProps = async (req, res) => {
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
          message: "You are not authorized to delete this property",
        });
      }
      Props.findByIdAndDelete(id);
      return res.status(201).json({
        status: true,
        message: "Property deleted Successful",
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

module.exports = {
  getProperties,
  addProperty,
};
