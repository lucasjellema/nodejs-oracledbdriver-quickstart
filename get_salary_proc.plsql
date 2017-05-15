create or replace 
procedure get_salary
( p_id in number
, p_salary out number
) is
begin
  select salary
  into   p_salary
  from   employees
  where  employee_id = p_id
  ;
end get_salary;