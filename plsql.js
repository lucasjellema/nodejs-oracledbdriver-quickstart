var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');

oracledb.getConnection(
  {
    user          : dbConfig.user,
    password      : dbConfig.password,
    connectString : dbConfig.connectString
  },
  function(err, connection)
  {
    if (err) {
      console.error(err.message);
      return;
    }
var empId = 199;    
var bindvars = { employeeId: { val: empId , dir: oracledb.BIND_IN, type: oracledb.NUMBER }
               , salary: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }                            
               };	
var plsqlStatement = "begin get_salary( p_id => :employeeId , p_salary=> :salary); end;";
var options = {"autoCommit":true};  
connection.execute( plsqlStatement , bindvars, options,  function (err, result) {
  if(err) {
    // handle error   
console.error('Error: '+ err);
 doRelease(connection); 
   } 
   else {
     var salary = result.outBinds.salary;
     console.log("Salary for employee "+empId+" was reported as "+salary )
     doRelease(connection);
   };
  });
});

function doRelease(connection)
{
  connection.release(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}
