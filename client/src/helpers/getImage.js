const { default: API_URL } = require("../constants/apiRoute");

const getImage = (imagePath) => {
    return `${API_URL.API_BASE}${imagePath}`
}

export default getImage;