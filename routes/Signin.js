const JWT_SECRET = process.env.JWT_SECRET;  // Ensure this secret is stored as an environment variable

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Please add both email and password" });
    }

    try {
        const savedUser = await User.findOne({ email });

        if (!savedUser) {
            return res.status(422).json({ error: "Invalid Email or password" });
        }

        const doMatch = await bcrypt.compare(password, savedUser.password);
        
     
});
