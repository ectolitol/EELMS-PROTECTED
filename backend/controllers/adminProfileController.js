const AdminProfile = require('../models/AdminProfileModel'); // Path to your AdminProfile model
const fs = require('fs'); // Required for file system operations if needed
const path = require('path'); // Required for file path operations


exports.updateAdminProfile = async (req, res) => {
  console.log("Request received to update admin profile:", req.params.adminId);
  console.log("Request body:", req.body);

  const { adminId } = req.params; 
  const { name, role, email, phone, password } = req.body; 

  try {
    const adminProfile = await AdminProfile.findById(adminId);
    if (!adminProfile) {
      return res.status(404).json({ message: 'Admin profile not found' });
    }

    console.log("Admin profile found:", adminProfile);

    // Update admin profile details
    adminProfile.name = name || adminProfile.name;
    adminProfile.role = role || adminProfile.role;
    adminProfile.contactInfo.email = email || adminProfile.contactInfo.email;
    adminProfile.contactInfo.password = password || adminProfile.contactInfo.password;
    adminProfile.contactInfo.phone = phone || adminProfile.contactInfo.phone;

    // If a new profile image is uploaded
    if (req.file) {
      console.log("New profile image uploaded:", req.file.filename);
      adminProfile.profileImage = req.file.filename;
    }

    await adminProfile.save();
    res.status(200).json({ message: 'Admin profile updated successfully', adminProfile });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Failed to update admin profile', error: error.message });
  }
};


// Get all admin profiles
exports.getAdminProfiles = async (req, res) => {
  try {
    const profiles = await AdminProfile.find();
    res.status(200).json(profiles);
  } catch (error) {
    console.error('Error fetching admin profiles:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.selectAdminProfile = async (req, res) => {
  const { profileId } = req.body; 

  try {
    const selectedProfile = await AdminProfile.findById(profileId);

    if (!selectedProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Update last logged in time
    selectedProfile.lastLoggedIn = Date.now();
    await selectedProfile.save();

    // Store the selected profile in the session
    req.session.adminProfile = {
      id: selectedProfile._id,
      name: selectedProfile.name,
      role: selectedProfile.role,
      profileImage: selectedProfile.profileImage || null, // Include the profile image if available
    };

    console.log('Session after setting profile:', req.session.adminProfile);

    req.session.save((err) => {
      if (err) {
        console.error('Error saving session:', err);
        return res.status(500).json({ message: 'Failed to save session' });
      }
      res.status(200).json({ message: 'Profile selected successfully', profile: req.session.adminProfile });
    });
  } catch (error) {
    console.error('Error selecting admin profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single admin profile by ID
exports.getSingleAdminProfile = async (req, res) => {
    const { profileId } = req.params; // Assume the profile ID is passed in the URL
   
    try {
      const profile = await AdminProfile.findById(profileId);
   
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
  
      res.status(200).json(profile);
    } catch (error) {
      console.error('Error fetching admin profile:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };  

// Fetch the logged-in admin's profile
exports.getLoggedInAdminProfile = async (req, res) => {
  try {
    console.log('Session on getLoggedInAdminProfile:', req.session);

    // Check if the session and adminProfile exist
    if (!req.session || !req.session.adminProfile || !req.session.adminProfile.id) {
      console.log('Session or admin profile missing, unauthorized access');
      return res.status(401).json({ message: 'Not authenticated or session has expired' });
    }

    const adminId = req.session.adminProfile.id;
    console.log(`Fetching profile for admin ID: ${adminId}`);

    // Find the admin profile by ID
    const profile = await AdminProfile.findById(adminId);

    if (!profile) {
      console.log(`Admin profile not found for ID: ${adminId}`);
      return res.status(404).json({ message: 'Admin not found' });
    }

    console.log('Admin profile successfully retrieved:', profile);

    // Return the profile data
    return res.status(200).json(profile);
  } catch (error) {
    console.error('Error fetching admin profile:', error);
    return res.status(500).json({ message: 'Error fetching admin profile' });
  }
};