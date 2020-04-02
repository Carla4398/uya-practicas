<!DOCTYPE html>
<html>
<body>
<script>
  var persona = JSON.parse(
    '{"dni": "67420139F", "nacimiento": 1990, "a_actual": 2020, "a_ingreso": 2010, "p_productividad": 0.2, "s_base": 1500}'
  );

  var calcular_edad = function () {
    var edad = persona.a_actual - persona.nacimiento;
    window.alert("La edad es " + edad + "\n");
    return edad;
  };

  var sueldo_total = function () {
    var p_antiguedad = 0.001 * ((persona.a_actual - persona.a_ingreso) / 3);
    window.alert(
      "Es el plus de antiguedad es " + p_antiguedad + "\n"
    );
    var aux1 = persona.s_base * p_antiguedad;
    var aux2 = persona.s_base * persona.p_productividad;
    var total = persona.s_base + aux1 + aux2;
    window.alert("El sueldo total es: " + total + "\n");
  };
  calcular_edad();
  sueldo_total();
</script>
</body>
</html>
