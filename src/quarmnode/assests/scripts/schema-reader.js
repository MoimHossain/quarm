const URIS = {
    ROOT: 'https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json'
};

const SchemaReader = {
    getDeploymentTemplate: () => {
        fetch('/azget?targetURI=' + URIS.ROOT)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }
}