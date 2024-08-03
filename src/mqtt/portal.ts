import { connect as mqttConnect } from 'mqtt';
const connect = async () => {
  const emqxHostURL = 'mqtts://location';

  const options = {
    clientId: `some-id`,
    clean: false,
    rejectUnauthorized: false,
    // ...(caFile && { ca: [caFile] }),
    connectTimeout: 5000,
  };
  const client = mqttConnect(emqxHostURL, options);

  client.on('connect', () => {
    console.log('Connected');
  });
};

export default { connect };
