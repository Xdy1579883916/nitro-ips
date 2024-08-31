import {
    createIPX,
    ipxFSStorage,
    ipxHttpStorage,
    createIPXH3Handler,
} from "~~/ipx";

const ipx = createIPX({
    storage: ipxFSStorage({dir: "./public"}),
    httpStorage: ipxHttpStorage({allowAllDomains: true}),
});

export default createIPXH3Handler(ipx)
