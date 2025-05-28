const Vehicle = require("../model/vehicle");

const dummyChallan = [
  {
    date: "2024-10-11",
    amount: 500,
    violation: "Red Light Jumping",
  },
  {
    date: "2024-09-20",
    amount: 300,
    violation: "Over Speeding",
  },
]

const vehicleNumber = async (req, res) => {
  const { number } = req.body; 

  try {
    const existing = await Vehicle.findOne({ number });
    if (existing) {
      return res.status(200).json({
        success: true,
        message: "Number already searched",
        data: {
          alreadyExists: true,
          vehicleNumber: number,
          challans: dummyChallan,
        },
      });
    }

    const vehNumber = new Vehicle({ number ,challans: dummyChallan});
    const newVehicle = await vehNumber.save();

    return res.status(201).json({
      success: true,
      message: "New Vehicle Number saved successfully",
      data: {
        alreadyExists: false,
        vehicleNumber: number,
        challans: dummyChallan,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "An error occured",
    });
  }
};

const getHistory = async (req, res) => {
  try {
    const recentVehicles = await Vehicle.find()
      .sort({ createdAt: -1 }) 
      .limit(5);

    res.status(200).json({
      success: true,
      data: recentVehicles,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch history",
    });
  }
};

module.exports = { vehicleNumber , getHistory};
