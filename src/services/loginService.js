import fetch from '../utils/request'


const url = 'http://localhost:8080/login';


export async function login(data)
{
  let _data = fetch(url,data);
  console.log(_data);
  return _data;
}
