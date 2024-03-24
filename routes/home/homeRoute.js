import { fileURLToPath } from "url";
import { join, dirname } from "path";


const __dirname = dirname(fileURLToPath(import.meta.url));

// Home Route handler
const homeRoute = async (req, res) => {
    res.sendFile(join(__dirname, "../../client", "index.html"))
};

export default homeRoute;
