const {
  GetSecretValueCommand,
  SecretsManagerClient,
} = require("@aws-sdk/client-secrets-manager");

const client = new SecretsManagerClient({
  region: "eu-central-1",
});

module.exports = async function get_key(secret_name) {
  let response;
  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT",
      })
    );
  } catch (error) {
    throw error;
  }

  const secret = JSON.parse(response.SecretString);

  return secret;
};
