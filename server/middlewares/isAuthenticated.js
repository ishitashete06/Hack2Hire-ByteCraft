import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        // Check if token exists in cookies
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }

        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "Invalid token",
            });
        }

        // Attach user ID to the request object for downstream usage 
        req.user = { _id: decoded.userId };
        next(); // Proceed to the next middleware or controller
    } catch (error) {
        console.error("Authentication Error:", error.message);
        res.status(500).json({
            success: false,
            message: "Authentication failed. Please try again.",
        });
    }
};

export default isAuthenticated;
