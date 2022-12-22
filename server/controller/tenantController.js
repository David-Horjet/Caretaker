const { Tenants } = require("../model/tenantModel");

const getTenants = async (req, res) => {
  try {
    const data = await Tenants.find().populate("property").sort({
      createdAt: -1
    });
    return res.json({
      status: true,
      message: "Tenant added successfully",
      data,
    });
  } catch (error) {
    return res.json({
      status: false,
      message: "You've got some errors",
      error,
    });
  }
}

const getTenant = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Tenants.findOne({
      _id: id,
    }).populate("property");
    if (data) {
      return res.json({
        status: true,
        msg: `Tenant's data fetched successfully`,
        data,
      });
    } else {
      return res.json({
        status: false,
        msg: `Can't Find Tenant's details`,
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

const addPropertyForm = async (req, res) => {
  try {
    const body = req.body;
    body.property = req.params.id;
    const data = await Tenants.create(body);
    return res.json({
      status: true,
      message: "Tenant added successfully",
      data,
    });
  } catch (error) {
    return res.json({
      status: false,
      message: "You've got some errors",
      error,
    });
  }
};

module.exports = {
  addPropertyForm,
  getTenants,
  getTenant
};
