const axios = require('axios');
const logger = require('../services/logging');

const serviceUrl = 'http://lpp-stations:93';

class StationRequestHandler {
    static async findOneById(stationId) {
        const url = `${serviceUrl}/${stationId}`;

        try {
            const request = await axios.get(url);

            const data = request.data;

            if (data.success) {
                return data.data;
            } else {
                logger.error(`[${process.env.npm_package_name}] The station service request handler returned an error for findOneById`);
            }
        } catch (ex) {
            logger.error(`[${process.env.npm_package_name}] The station service request handler encountered an error for findOneById: ${JSON.stringify(ex)}`);
        }

        return null;
    }
}

module.exports = StationRequestHandler;