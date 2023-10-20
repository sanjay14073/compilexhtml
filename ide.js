let editor;
let d1=document.querySelector("#editor")
editor=ace.edit(d1)
editor.setTheme("ace/theme/cobalt");
editor.session.setMode("ace/mode/python");
function changeval(){
        
    let lang=document.getElementById("sel").value
    console.log(lang)
    editor.session.setMode(`ace/mode/${lang}`);
  }
document.getElementById('b1').addEventListener('click',exeCode)
const values={
    'c_cpp':'cpp',
    'java':'java',
    'python':'py',
    'javascript':'js',
}
function exeCode(){
    let val=document.getElementById("input").value
  $.ajax({
    url:'https://api.codex.jaagrav.in',
    method:"POST",
    data:{
      language:values[document.getElementById("sel").value],
      code:editor.getSession().getValue(),
      input:val!=""?val:0,
    },
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    success:function(response){
      if(response['output']!=""){
      document.getElementById("input").value=response['output']
      }else{
        
          document.getElementById("input").value=response['error']
          //console.log(response);
      
      }
      console.log(response);
    },
    
  })
}