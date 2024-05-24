const authService = require('../services/authService');

const signIn = async (req, res) => {
    let walletAddress = "13945h5h5h5n5nn6h7nb7nmm4mbb6brnnn6j7n7n8mm6m5m4nn6b7";

    try {
        const token = await authService.signIn(walletAddress);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { signIn };
