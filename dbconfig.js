module.exports = {
  user          : process.env.NODE_ORACLEDB_USER || "hr",

  // Instead of hard coding the password, consider prompting for it,
  // passing it in an environment variable via process.env, or using
  // External Authentication.
  password      : process.env.NODE_ORACLEDB_PASSWORD || "oracle",

  // For information on connection strings see:
  // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#connectionstrings
  // service: demos.lucasjellema.oraclecloud.internal
  // host: 140.86.4.91
  // port: 1521
  // username: hr
  
  
  
  //connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "127.0.0.1:1521/orcl",
  //local XE database in OXAR VM apparently does not like a connection string 
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "",

  // Setting externalAuth is optional.  It defaults to false.  See:
  // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#extauth
  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};