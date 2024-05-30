import { pool } from "../db.js";

export const getAllKatjes = async (req, res) => {
    const query = "SELECT * from cats";
    try {
        const [result] = await pool.execute(query);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
};

export const createKatje = async (req, res) => {
    const { name, location, sex, age, img_url } = req.body;
    // Create a new user in the database
    // Always use a prepared statement!
    const query =
        "INSERT INTO cats (name, location, sex, age, img_url) VALUES (?, ?, ?, ?, ?)";
    const values = [name, location, sex, age, img_url];

    try {
        const [result] = await pool.execute(query, values);
        // Correct StatusCode
        // JSend syntax!
        res.status(201).json({
            status: "success",
            data: { id: result.insertId },
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
};

export const getKat = async (req, res) => {
    const id = +req.params.id;
    const query = "SELECT * from cats WHERE id = ?";
    try {
        const values = [id];
        const [result] = await pool.execute(query, values);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
};

