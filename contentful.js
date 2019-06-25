const contentful = require('contentful');
import { createClient } from '../plugins/contentful';
const contentfulClient = createClient();

//use default environment

const config = {
    space: Process.env.CTF_SPACE_ID,
    accessToken: Process.env.CTF_CDA_ACCESS_TOKEN
};

// export `createClient` to use it in page components
module.exports = {
    createClient () {
        return contentful.createClient(config
            )
    }
}

