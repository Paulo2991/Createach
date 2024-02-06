import { ApiClient } from "ravendb-cloud";

const client = new ApiClient({ 
    apiKey: "ezVndnxfn4jn1Cxv3boF+WJkAI5R3Sf2GMWU7R1L5O0=" 
});

const createProduct = new ProductCreateRequest({
    displayName: "Fancy",
    subdomainName: "fancy",
    cloudProvider: "Aws",
    region: "us-east-1",
    tier: "Development",
    instanceTypeName: "Dev10",
    storageTypeName: "SsdStandard",
    diskSize: 15,
    releaseChannel: "Stable42",
    allowedIps: ["0.0.0.0/0"]
});

const response = await client.products.create(req);
// ProductCreateResponse { productId: '1234-B' }

const listResponse = await client.products.list();
// ...