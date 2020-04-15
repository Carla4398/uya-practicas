var hola=document.getElementById("fname");
var adios=document.getElementById("lname");
$.ajax({
  url: "https://jsonplaceholder.typicode.com/comments?postId=2",
  type: "POST",
  async: true,
  dataType: "HTML",
  data:
    "name=hola&email=adios",
  success: function (data, body) {
    alert("Data: " + data + "\nStatus: " + body);
  },
});
