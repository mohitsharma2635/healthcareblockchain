import { create } from 'ipfs-http-client'
const client = create({ url: "https://ipfs.infura.io:5001" });

export default client