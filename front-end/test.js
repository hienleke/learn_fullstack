// Create function to convert given string to the output below

// Input
const optionRule = '{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})';

// Output Example
/* const output = {
  and: [
    1069,
    { or: [1070, 1071, 1072] },
    1244,
    { or: [1245, 1339] },
  ]
}; */

function solution(input)
{
  let array = input.split("AND");
  let obj = {};
  obj.and = [];
  for(let item of array)
  {
    if(item[0] == "{"){
     
      let data = optimize(item);
      obj.and.push(data)
    }
    else if(item.toString().includes("(")){
        let data = optimize(item)
         let sub_array = data.split("OR")
        let subobj = {};
        subobj["or"] =[];
          for(let item of sub_array)
     {
        
         subobj.or.push(optimize(item))
         
        }
        obj.and.push(subobj);
  }
  }
  return obj;
}
 function optimize(input)
  {
     let data = String(input).trim().replace(/[(){}]/g, '');
    return data;
  }
 console.log(JSON.stringify(solution(optionRule),null,2));