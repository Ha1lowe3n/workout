// @desc    get user profile
// @route   GET /api/users/profile
// @access  private

export const getUserProfile = (req, res) => {
    const user = {
        name: "bla",
        age: 22,
    };

    res.json(user);
};
