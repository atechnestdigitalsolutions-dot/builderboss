const fs = require('fs');

const envVars = [
  'REACT_APP_adminEmail',
  'REACT_APP_appId',
  'REACT_APP_appName',
  'REACT_APP_databasePrefix',
  'REACT_APP_isSaaS',
  'REACT_APP_privateKey',
  'REACT_APP_projectId',
  'REACT_APP_purchaseCode',
  'REACT_APP_serviceAccount',
];

const envContent = envVars
  .map((key) => `${key}=${process.env[key] || ''}`)
  .join('\n');

fs.writeFileSync('.env', envContent);
console.log('.env file created successfully.');
