<script>
      function calculateBMI() {
        const markWeight = parseFloat(
          document.getElementById("markWeight").value
        );
        const markHeight = parseFloat(
          document.getElementById("markHeight").value
        );
        const johnWeight = parseFloat(
          document.getElementById("johnWeight").value
        );
        const johnHeight = parseFloat(
          document.getElementById("johnHeight").value
        );

        const markBMI = (markWeight / markHeight ** 2);
        const johnBMI = (johnWeight / johnHeight ** 2);

        //const markBMI = (markWeight / markHeight ** 2).toFixed(2);
        //const johnBMI = (johnWeight / johnHeight ** 2).toFixed(2);

        document.getElementById("MarkBMI").textContent = markBMI;
        document.getElementById("JohnBMI").textContent = johnBMI;

        console.log(`Mark's BMI: ${markBMI}, John's BMI: ${johnBMI}`);

        const markHigherBMI = parseFloat(markBMI) > parseFloat(johnBMI);
        console.log(`Mark's BMI: ${markBMI}, John's BMI: ${johnBMI}`);
        console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);
      }
</script>
