// TODO: zet dit bestand in de juiste map!
import { pool } from "../db.js";

// getAll
    // tip:
    //  * ORDER BY rating DESC
    //  * ORDER BY rating ASC

    // tip:
    // console.log(req.query)

    export const getAllCats = async (req, res) => {
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


// patchRating

    // tip:
    //  * UPDATE cats set rating = ? where id = ?


// ...

export const createCat = async (req, res) => {};



export const getCat = async (req, res) => {

};

